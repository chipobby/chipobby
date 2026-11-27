import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { marked } from 'marked';
import './styles.css';
import { apiLocal } from './api-local.js';
import { cursoEstatico } from './curso-estatico.js';

const API = 'http://localhost:3001/api';
// En GitHub Pages (u otro dominio) no hay servidor Express: se usa el modo
// navegador con localStorage. En localhost se intenta el servidor primero.
const EN_LOCAL = ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname);
let modoLocal = !EN_LOCAL;
const fallback = cursoEstatico.sessions;

async function api(url, options) {
  if (modoLocal) return apiLocal(url, options);
  try {
    const response = await fetch(`${API}${url}`, { headers: { 'Content-Type': 'application/json' }, ...options });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'No pudimos guardar el cambio.');
    return data;
  } catch (error) {
    // Sin servidor accesible (API apagada o sitio estático): modo navegador.
    if (error instanceof TypeError) {
      modoLocal = true;
      return apiLocal(url, options);
    }
    throw error;
  }
}

// Une dos listas de registros de progreso sin perder nada: gana "done" si uno
// de los dos lo tiene y se conserva la nota no vacía.
function fusionarRegistros(previo = [], importado = []) {
  const porSesion = new Map();
  [...previo, ...importado].forEach((p) => {
    const ya = porSesion.get(p.sessionId);
    if (!ya) { porSesion.set(p.sessionId, { ...p }); return; }
    const hecho = ya.status === 'done' || p.status === 'done';
    porSesion.set(p.sessionId, { ...ya, ...p, status: hecho ? 'done' : (p.status || ya.status), note: p.note || ya.note || '' });
  });
  return [...porSesion.values()].sort((a, b) => a.sessionId - b.sessionId);
}

function App() {
  const [course, setCourse] = useState({ sessions: [], badges: [] });
  const [learners, setLearners] = useState([]);
  const [learner, setLearner] = useState(() => JSON.parse(localStorage.getItem('chip-learner') || 'null'));
  const [progress, setProgress] = useState([]);
  const [selected, setSelected] = useState(1);
  const [view, setView] = useState('missions');
  const [nickname, setNickname] = useState('');
  const [adultMode, setAdultMode] = useState(false);
  const [configMode, setConfigMode] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([api('/course'), api('/learners')]).then(([courseData, learnerData]) => {
      setCourse(courseData); setLearners(learnerData.learners);
      if (learner) api(`/learners/${learner.id}`).then((data) => setProgress(data.progress));
    }).catch(() => setMessage('No pudimos cargar el curso. Recarga la página para intentarlo de nuevo.')).finally(() => setLoading(false));
  }, []);

  const sessions = course.sessions.length ? course.sessions : fallback;
  const current = sessions.find((session) => session.id === selected) || sessions[0];
  const done = progress.filter((item) => item.status === 'done').length;
  const percent = Math.round((done / 20) * 100);
  const statusOf = (id) => progress.find((item) => item.sessionId === id)?.status || 'todo';
  const earned = course.badges.filter((badge) => done >= badge.session);
  const grouped = useMemo(() => sessions.reduce((groups, session) => {
    (groups[session.module] ||= []).push(session); return groups;
  }, {}), [sessions]);

  async function createLearner(event) {
    event.preventDefault();
    if (!nickname.trim()) return setMessage('Escribe un apodo para tu explorador.');
    try {
      const data = await api('/learners', { method: 'POST', body: JSON.stringify({ nickname }) });
      setLearner(data.learner); setProgress([]); localStorage.setItem('chip-learner', JSON.stringify(data.learner)); setMessage('¡Tu mapa está listo!');
    } catch (error) { setMessage(error.message); }
  }
  async function chooseLearner(item) {
    const data = await api(`/learners/${item.id}`); setLearner(data.learner); setProgress(data.progress); localStorage.setItem('chip-learner', JSON.stringify(data.learner));
  }
  async function mark(status) {
    if (!learner) return setMessage('Primero crea tu explorador.');
    try { const data = await api(`/learners/${learner.id}/progress/${current.id}`, { method: 'PUT', body: JSON.stringify({ status }) }); setProgress(data.progress); setMessage(status === 'done' ? '¡Misión guardada! Chip está orgulloso.' : 'Guardamos tu misión para continuar después.'); }
    catch (error) { setMessage(error.message); }
  }

  async function exportarProgreso() {
    // Guardamos TODA la información del navegador (apodo, misiones, ajustes,
    // lista de exploradores…) para que restaurar en otro dispositivo no pierda nada.
    const almacen = {};
    for (let i = 0; i < localStorage.length; i++) {
      const clave = localStorage.key(i);
      almacen[clave] = localStorage.getItem(clave);
    }
    const data = {
      exportado: new Date().toISOString(),
      version: 2,
      learner: learner || JSON.parse(localStorage.getItem('chip-learner') || 'null'),
      nickname: nickname || (learner?.nickname || ''),
      progress: progress,
      done, percent, selected, view,
      almacen
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chip-obby-progreso-${(learner?.nickname || 'explorador').replace(/[^a-z0-9]/gi, '_')}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setMessage('Progreso exportado a archivo JSON.');
  }

  async function importarProgreso(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (!data.learner || !Array.isArray(data.progress)) throw new Error('Archivo no válido.');
        // 0) Capturar lo que YA hay en este navegador para fusionarlo (no se
        //    pierde absolutamente nada de lo que había antes de importar).
        const mapaPrevio = JSON.parse(localStorage.getItem('chip-progress-local') || '{}');
        const listaPrevia = JSON.parse(localStorage.getItem('chip-learners-local') || '[]');
        // 1) Restaurar TODAS las claves guardadas en el archivo (apodo, ajustes,
        //    lista de exploradores y progreso de cada misión).
        const almacen = data.almacen || data.localStorage || {};
        Object.entries(almacen).forEach(([clave, valor]) => {
          if (clave && clave.startsWith('chip-')) localStorage.setItem(clave, valor);
        });
        localStorage.setItem('chip-learner', JSON.stringify(data.learner));
        // 2) Combinar el progreso: lo importado gana, pero lo que ya había en
        //    este navegador para otros exploradores NO se borra.
        if (modoLocal) {
          const mapa = JSON.parse(localStorage.getItem('chip-progress-local') || '{}');
          const ids = new Set([...Object.keys(mapa), ...Object.keys(mapaPrevio), data.learner.id]);
          ids.forEach((id) => { mapa[id] = fusionarRegistros(mapaPrevio[id] || [], mapa[id] || []); });
          mapa[data.learner.id] = fusionarRegistros(mapa[data.learner.id] || [], data.progress);
          localStorage.setItem('chip-progress-local', JSON.stringify(mapa));
          const lista = JSON.parse(localStorage.getItem('chip-learners-local') || '[]');
          listaPrevia.forEach((l) => { if (!lista.some((x) => x.id === l.id)) lista.push(l); });
          if (!lista.some((l) => l.id === data.learner.id)) lista.push(data.learner);
          localStorage.setItem('chip-learners-local', JSON.stringify(lista));
        } else {
          const subir = (id) => data.progress.forEach((p) => {
            api(`/learners/${id}/progress/${p.sessionId}`, { method: 'PUT', body: JSON.stringify({ status: p.status, note: p.note || '' }) }).catch(() => {});
          });
          if (learners.some((l) => l.id === data.learner.id)) subir(data.learner.id);
          else api('/learners', { method: 'POST', body: JSON.stringify({ nickname: data.learner.nickname }) })
            .then((r) => { localStorage.setItem('chip-learner', JSON.stringify(r.learner)); setLearner(r.learner); subir(r.learner.id); })
            .catch(() => subir(data.learner.id));
        }
        setLearner(data.learner);
        setNickname(data.nickname || data.learner.nickname || '');
        setProgress(data.progress);
        if (Number.isInteger(data.selected) && data.selected >= 1 && data.selected <= 20) setSelected(data.selected);
        if (data.view) setView(data.view);
        api('/learners').then((d) => setLearners(d.learners)).catch(() => {});
        setConfigMode(false);
        setMessage('¡Listo! Restauramos tu apodo, tus misiones y todos tus ajustes: no se perdió nada.');
      } catch (error) {
        setMessage('No se pudo importar: ' + error.message);
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  }

  if (loading) return <div className="splash"><div className="chip">🤖</div><h1>Preparando tu aventura…</h1></div>;

  return <div className="app-shell">
    <header className="topbar">
      <button className="brand" onClick={() => setView('missions')}><span className="brand-mark">✦</span><span>Chip <b>Obby</b></span></button>
      <div className="top-actions"><span className="save-dot">● Guardado en tu navegador</span><button className="config-link" onClick={() => setConfigMode(true)}>⚙️ Configuración</button><button className="adult-link" onClick={() => setAdultMode(!adultMode)}>{adultMode ? 'Volver a misiones' : 'Zona de adulto'}</button></div>
    </header>
    {adultMode ? <AdultPanel learners={learners} chooseLearner={chooseLearner} active={learner} progress={progress} course={course} /> : <>
      {!learner ? <Welcome nickname={nickname} setNickname={setNickname} createLearner={createLearner} learners={learners} chooseLearner={chooseLearner} /> : <>
        <main className="layout">
          <aside className="sidebar">
            <div className="profile"><div className="avatar">🤖</div><div><strong>{learner.nickname}</strong><small>Explorador/a</small></div></div>
            <div className="progress-box"><div className="progress-label"><span>Mi aventura</span><b>{percent}%</b></div><div className="progress-track"><i style={{ width: `${percent}%` }} /></div><small>{done} de 20 misiones completadas</small></div>
            <nav className="nav"><button className={view === 'missions' ? 'active' : ''} onClick={() => setView('missions')}>🧭 Mis misiones</button><button className={view === 'badges' ? 'active' : ''} onClick={() => setView('badges')}>🏅 Mis insignias <span>{earned.length}/8</span></button><button className={view === 'map' ? 'active' : ''} onClick={() => setView('map')}>🗺️ Mi mapa</button></nav>
            <div className="chip-tip"><span>💡</span><p><b>Consejo de Chip</b><br />No tienes que terminar todo hoy. ¡Cada pequeño paso cuenta!</p></div>
          </aside>
          {view === 'missions' && <MissionView sessions={sessions} grouped={grouped} current={current} selected={selected} setSelected={setSelected} statusOf={statusOf} mark={mark} message={message} setMessage={setMessage} />}
          {view === 'badges' && <BadgesView badges={course.badges} earned={earned} done={done} />}
          {view === 'map' && <MapView sessions={sessions} statusOf={statusOf} setSelected={setSelected} setView={setView} />}
        </main>
      </>}
    </>}
    {configMode && <ConfigPanel onExport={exportarProgreso} onImport={importarProgreso} onClose={() => setConfigMode(false)} learner={learner} progress={progress} nickname={nickname} done={done} percent={percent} />}
  </div>;
}

function Welcome({ nickname, setNickname, createLearner, learners, chooseLearner }) {
  return <main className="welcome"><section className="welcome-copy"><div className="eyebrow">Una aventura para crear</div><h1>Tu idea puede<br /><em>convertirse</em> en juego.</h1><p>Construye tu propio Obby con Chip: crea plataformas, supera retos y aprende a dar instrucciones a Roblox.</p><div className="welcome-steps"><span><b>01</b> Imagina</span><span><b>02</b> Construye</span><span><b>03</b> Juega</span></div></section><section className="login-card"><div className="orbit">✦</div><div className="chip-large">🤖</div><h2>¡Hola, creador!</h2><p>Elige un apodo para guardar tu aventura.</p><form onSubmit={createLearner}><label htmlFor="nickname">Mi apodo</label><input id="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="Ej. Súper Constructor" maxLength="24" autoFocus /><button className="primary wide">Comenzar aventura <span>↗</span></button></form><small>Usa un apodo. No escribas tu nombre completo.</small>{learners.length > 0 && <div className="returning"><b>¿Ya tienes una aventura?</b>{learners.slice(0, 4).map((item) => <button key={item.id} onClick={() => chooseLearner(item)}>Continuar como {item.nickname}</button>)}</div>}</section></main>;
}

function MissionView({ sessions, grouped, current, selected, setSelected, statusOf, mark, message, setMessage }) {
  return <section className="content"><div className="page-heading"><div><div className="eyebrow">Tu camino de creador</div><h1>Mis misiones</h1></div><span className="session-count">{selected} <small>/ 20</small></span></div><div className="mission-grid"><div className="mission-list">{Object.entries(grouped).map(([module, items], groupIndex) => <div className="module-group" key={module}><h3><span className="module-number">0{groupIndex + 1}</span>{module}</h3>{items.map((item) => <button key={item.id} className={`mission-row ${selected === item.id ? 'selected' : ''}`} onClick={() => setSelected(item.id)}><span className={`mission-status ${statusOf(item.id)}`}>{statusOf(item.id) === 'done' ? '✓' : item.id}</span><span><b>{item.title}</b><small>{item.mission?.replaceAll('**', '')}</small></span><i>{statusOf(item.id) === 'done' ? 'Listo' : '›'}</i></button>)}</div>)}</div><article className="mission-detail"><div className="detail-top"><span className="mission-tag">MISIÓN {String(current.id).padStart(2, '0')}</span><span className="module-tag">{current.module}</span></div><h2>{current.title}</h2><p className="mission-line">{current.mission?.replaceAll('**', '')}</p><div className="chip-speech"><div className="mini-chip">🤖</div><p>“{current.objective || 'Hoy vamos a construir algo nuevo para tu aventura.'}”</p></div><div className="detail-section"><h4>Lo que aprenderás</h4><p>{current.objective}</p></div><div className="detail-section"><h4>Palabras mágicas</h4><div className="concepts" dangerouslySetInnerHTML={{ __html: marked.parse(current.concepts || 'Explorar · Construir · Probar') }} /></div><details className="full-guide"><summary>📖 Abrir la guía completa de esta misión</summary><div className="guia-imagen-contenedor"><img src={`imagenes-misiones/mision-${String(current.id).padStart(2, '0')}.webp`} alt={`Ilustración de la misión ${current.id}`} className="guia-imagen" /></div><div className="guia-texto" dangerouslySetInnerHTML={{ __html: marked.parse(current.markdown || "") }} /></details><div className="detail-actions"><button className="secondary" onClick={() => mark('doing')}>Empezar misión</button><button className="primary" onClick={() => mark('done')}>Marcar como lista <span>✓</span></button></div>{message && <button className="toast" onClick={() => setMessage('')}>{message}</button>}</article></div></section>;
}

function BadgesView({ badges, earned, done }) { return <section className="content"><div className="page-heading"><div><div className="eyebrow">Pequeñas victorias</div><h1>Mis insignias</h1></div><span className="session-count">{earned.length} <small>/ 8</small></span></div><div className="badge-intro">Cada insignia aparece cuando completas una parte importante de tu aventura. ¡Sigue construyendo!</div><div className="badge-grid">{badges.map((badge) => <div className={`badge-card ${done >= badge.session ? 'earned' : ''}`} key={badge.key}><div className="badge-icon">{badge.icon}</div><b>{badge.name}</b><small>{done >= badge.session ? '¡La ganaste!' : `Misión ${badge.session}`}</small></div>)}</div></section>; }
function MapView({ sessions, statusOf, setSelected, setView }) { return <section className="content"><div className="page-heading"><div><div className="eyebrow">De la idea al juego</div><h1>Mi mapa</h1></div></div><div className="map-card"><div className="map-path">{sessions.map((session, index) => <button key={session.id} className={`map-node ${statusOf(session.id)}`} onClick={() => { setSelected(session.id); setView('missions'); }}><span>{statusOf(session.id) === 'done' ? '✓' : session.id}</span><small>{index === 0 ? 'Empieza aquí' : session.id === 20 ? 'Gran final' : `Misión ${session.id}`}</small></button>)}</div></div></section>; }
function AdultPanel({ learners, chooseLearner, active, progress, course }) { const done = progress.filter((item) => item.status === 'done').length; return <main className="adult-panel"><div className="page-heading"><div><div className="eyebrow">Acompañamiento adulto</div><h1>Seguimiento del grupo</h1></div></div><div className="adult-layout"><section className="learner-list"><h3>Exploradores</h3>{learners.map((item) => <button className={active?.id === item.id ? 'active' : ''} key={item.id} onClick={() => chooseLearner(item)}><span className="adult-avatar">🤖</span><b>{item.nickname}</b><span>›</span></button>)}</section><section className="report-card">{active ? <><div className="report-head"><div className="avatar">🤖</div><div><h2>{active.nickname}</h2><p>Progreso guardado en {modoLocal ? 'este navegador' : 'SQLite'}</p></div><strong>{done}/20</strong></div><div className="progress-track large"><i style={{ width: `${done * 5}%` }} /></div><div className="report-grid">{course.sessions.map((session) => { const item = progress.find((p) => p.sessionId === session.id); return <div key={session.id} className={item?.status || 'todo'}><span>{item?.status === 'done' ? '✓' : session.id}</span><small>{session.title}</small></div>; })}</div></> : <div className="empty-report">Elige un explorador para ver su progreso.</div>}</section></div></main>; }

function ConfigPanel({ onExport, onImport, onClose, learner, progress, nickname, done, percent }) {
  return <section className="config-panel"><div className="config-overlay" onClick={onClose} /><div className="config-box"><div className="config-header"><h2>⚙️ Configuración</h2><button className="config-cerrar" onClick={onClose}>✕</button></div><div className="config-body"><div className="config-info"><p><b>Explorador:</b> {learner?.nickname || nickname || '—'}</p><p><b>Misiones completadas:</b> {done} de 20</p><p><b>Avance:</b> {percent}%</p><p>Tu información (apodo, misiones hechas, ajustes y lista de exploradores) se guarda en este navegador. Puedes exportarla a un archivo JSON para llevarla a otra computadora, celular o navegador.</p></div><div className="config-actions"><button className="primary wide" onClick={onExport}>📤 Exportar todo mi progreso (JSON)</button><label style={{ display: 'block', marginTop: '1rem' }}><input type="file" accept=".json" onChange={onImport} style={{ marginTop: '0.5rem' }} />📥 Restablecer en este dispositivo (importar JSON)</label><p className="config-nota">Al importar se recupera tu apodo, tus misiones, tus ajustes y tus exploradores. No se borra nada: se combina con lo que ya haya en este navegador.</p></div></div></div></section>;
}

createRoot(document.getElementById('root')).render(<App />);

