import express from 'express';
import cors from 'cors';
import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { badges, parseSession } from '../shared/curso.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const db = new DatabaseSync(path.join(__dirname, 'chip-obby.sqlite'));
db.exec('PRAGMA journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS learners (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nickname TEXT NOT NULL UNIQUE,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS progress (
    learner_id INTEGER NOT NULL,
    session_id INTEGER NOT NULL,
    status TEXT NOT NULL DEFAULT 'todo',
    note TEXT DEFAULT '',
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (learner_id, session_id),
    FOREIGN KEY (learner_id) REFERENCES learners(id) ON DELETE CASCADE
  );
`);

const app = express();
app.use(cors());
app.use(express.json({ limit: '100kb' }));

function readSessions() {
  const dir = path.join(root, 'MODULOS');
  return Array.from({ length: 20 }, (_, index) => {
    const id = index + 1;
    const filename = `SESION_${String(id).padStart(2, '0')}.md`;
    const markdown = fs.readFileSync(path.join(dir, filename), 'utf8');
    return parseSession(id, markdown);
  });
}

const sessions = readSessions();

function getLearner(id) {
  return db.prepare('SELECT * FROM learners WHERE id = ?').get(id);
}
function getProgress(learnerId) {
  return db.prepare('SELECT session_id AS sessionId, status, note, updated_at AS updatedAt FROM progress WHERE learner_id = ? ORDER BY session_id').all(learnerId);
}

app.get('/api/course', (_req, res) => res.json({ sessions, badges }));

app.get('/api/learners', (_req, res) => {
  const learners = db.prepare('SELECT id, nickname, created_at AS createdAt FROM learners ORDER BY nickname COLLATE NOCASE').all();
  res.json({ learners });
});

app.post('/api/learners', (req, res) => {
  const nickname = String(req.body.nickname ?? '').trim().slice(0, 24);
  if (!nickname || /[<>]/.test(nickname)) return res.status(400).json({ error: 'Escribe un apodo sencillo.' });
  try {
    const result = db.prepare('INSERT INTO learners (nickname) VALUES (?)').run(nickname);
    res.status(201).json({ learner: getLearner(result.lastInsertRowid), progress: [] });
  } catch {
    res.status(409).json({ error: 'Ese apodo ya está en uso.' });
  }
});

app.get('/api/learners/:id', (req, res) => {
  const learner = getLearner(req.params.id);
  if (!learner) return res.status(404).json({ error: 'No encontramos ese explorador.' });
  res.json({ learner, progress: getProgress(learner.id) });
});

app.put('/api/learners/:id/progress/:sessionId', (req, res) => {
  const learnerId = Number(req.params.id);
  const sessionId = Number(req.params.sessionId);
  const status = ['todo', 'doing', 'done'].includes(req.body.status) ? req.body.status : 'todo';
  const note = String(req.body.note ?? '').slice(0, 240);
  if (!getLearner(learnerId) || sessionId < 1 || sessionId > 20) return res.status(404).json({ error: 'No encontramos esa misión.' });
  db.prepare(`INSERT INTO progress (learner_id, session_id, status, note, updated_at)
    VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
    ON CONFLICT(learner_id, session_id) DO UPDATE SET status=excluded.status, note=excluded.note, updated_at=CURRENT_TIMESTAMP`)
    .run(learnerId, sessionId, status, note);
  res.json({ progress: getProgress(learnerId) });
});

app.get('/api/learners/:id/report', (req, res) => {
  const learner = getLearner(req.params.id);
  if (!learner) return res.status(404).json({ error: 'No encontramos ese explorador.' });
  const progress = getProgress(learner.id);
  const done = progress.filter((item) => item.status === 'done').length;
  res.json({ learner, progress, done, total: 20, badges: badges.filter((badge) => done >= badge.session) });
});

app.listen(3001, () => console.log('Chip API lista en http://localhost:3001'));

