# Diagnóstico inicial del repositorio

**Proyecto:** Curso de creación de videojuegos con Roblox Studio para niños de 6 a 8 años
**Fase:** Fase 1 — Auditoría (sin modificar los documentos originales)
**Fecha del diagnóstico:** 25 de noviembre de 2026
**Alcance:** 28 archivos Markdown del repositorio

---

## Tabla de contenidos

1. [Estructura encontrada](#1-estructura-encontrada)
2. [Documentos revisados](#2-documentos-revisados)
3. [Hallazgos por documento](#3-hallazgos-por-documento)
4. [Problemas identificados](#4-problemas-identificados)
5. [Riesgos](#5-riesgos)
6. [Mejoras recomendadas](#6-mejoras-recomendadas)
7. [Plan de ejecución de las siguientes fases](#7-plan-de-ejecución-de-las-siguientes-fases)

---

## 1. Estructura encontrada

```
Curso de Programacion con Roblox/
├── AGENT.md                      (guía para agentes/asistentes)
├── MAPA_CURRICULAR.md            (8 módulos, 20 sesiones, 30 horas)
├── PLAN_FORMATIVO.md             (propósito, metodología, evaluación)
├── README.md                     (descripción y uso del material)
├── REFERENCIAS.md                (enlaces a documentación oficial)
├── DOCUMENTACION/                (NO EXISTÍA — creada en esta fase)
│   └── DIAGNOSTICO_INICIAL.md    (este documento)
├── EVALUACION/
│   └── MATRIZ_EVIDENCIAS.md
├── MODULOS/
│   ├── README.md
│   └── SESION_01.md … SESION_20.md   (20 archivos)
├── PROYECTO_INTEGRADOR/
│   └── ESPECIFICACION.md
└── RECURSOS/
    ├── GUIA_PARA_FAMILIAS.md
    ├── PLANTILLA_SESION.md
    └── REQUISITOS_TECNICOS_Y_SEGURIDAD.md
```

- **Total de archivos Markdown:** 28 (27 originales + 1 creado en esta fase).
- **Imágenes, capturas u otros recursos multimedia:** ninguno.
- **Archivos de código (`.lua`, `.luau`):** ninguno.
- **Carpetas sin documentos:** ninguna.

## 2. Documentos revisados

| # | Archivo | Líneas | Tipo |
|---:|---|---:|---|
| 1 | `README.md` | 29 | Base |
| 2 | `MAPA_CURRICULAR.md` | 41 | Base |
| 3 | `PLAN_FORMATIVO.md` | 49 | Base |
| 4 | `AGENT.md` | 28 | Base |
| 5 | `REFERENCIAS.md` | 16 | Base |
| 6 | `MODULOS/README.md` | 13 | Índice |
| 7–26 | `MODULOS/SESION_01.md` … `SESION_20.md` | 48 c/u | Sesiones |
| 27 | `EVALUACION/MATRIZ_EVIDENCIAS.md` | 40 | Evaluación |
| 28 | `PROYECTO_INTEGRADOR/ESPECIFICACION.md` | 45 | Proyecto |
| 29 | `RECURSOS/PLANTILLA_SESION.md` | 52 | Plantilla |
| 30 | `RECURSOS/REQUISITOS_TECNICOS_Y_SEGURIDAD.md` | 31 | Seguridad |
| 31 | `RECURSOS/GUIA_PARA_FAMILIAS.md` | 34 | Familias |

*Se leen los 20 archivos de sesión por completo; todos comparten la misma estructura (ver hallazgo H-01).*

## 3. Hallazgos por documento

### 3.1 Documentos base (coherentes en lo esencial)

- **`README.md`, `MAPA_CURRICULAR.md`, `PLAN_FORMATIVO.md`:** consistentes entre sí. 20 sesiones × 90 minutos = 30 horas. La suma por módulo cuadra (1,5 + 3 + 4,5 + 3 + 4,5 + 4,5 + 4,5 + 4,5 = 30). Los títulos de la secuencia de sesiones coinciden con los títulos de los archivos `SESION_XX.md`. Las asignaciones de módulo por sesión son correctas (S2–S3 → M1, S4–S6 → M2, S7–S8 → M3, S9–S11 → M4, S12–S14 → M5, S15–S17 → M6, S18–S20 → M7).
- **`REFERENCIAS.md`:** incluye las 7 fuentes oficiales solicitadas más dos adicionales, con la nota correcta de que no es un currículo oficial.
- **`AGENT.md`:** principios pedagógicos y de seguridad correctos y alineados con el encargo.
- **Documentos de `RECURSOS/`:** seguridad, privacidad y acompañamiento adulto están bien cubiertos y son consistentes con el apartado 9 del encargo.

### 3.2 Sesiones (`MODULOS/SESION_01.md` … `SESION_20.md`)

Las 20 sesiones son **la misma plantilla de 48 líneas con solo cuatro campos cambiados**: título, propósito, reto individual y evidencia. Todo lo demás (materiales, tabla de tiempos, orientaciones al facilitador, preguntas de cierre, criterio de observación) es **idéntico palabra por palabra en las 20 sesiones**.

### 3.3 `RECURSOS/PLANTILLA_SESION.md`

La plantilla incluye secciones que **no aparecen en ninguna sesión**: *Preparación previa*, *Orientación* por bloque, *Ajustes y apoyos*, *Reflexión de cierre* y *Observaciones del facilitador*. Es decir, las sesiones no siguen ni siquiera la propia plantilla del repositorio.

### 3.4 `EVALUACION/MATRIZ_EVIDENCIAS.md`

Buena articulación por tramos de sesión, pero es **una sola matriz**. Faltan los instrumentos que el encargo exige: listas de chequeo por módulo, guía de observación detallada, autoevaluación infantil y seguimiento de evidencias por sesión.

### 3.5 `PROYECTO_INTEGRADOR/ESPECIFICACION.md`

Correcta en requisitos y seguridad. Sin embargo, **no define en qué sesión se construye cada requisito**, pese a que el encargo exige que el proyecto se elabore progresivamente desde las primeras sesiones.

## 4. Problemas identificados

### H-01 — Sesiones genéricas e idénticas (crítico)
Las 20 sesiones carecen de diferenciación real. Un instructor recibiría el mismo documento 20 veces. No hay desarrollo paso a paso, demostración guiada específica, ni errores frecuentes.

### H-02 — Estructura de sesión incompleta (crítico)
El encargo exige **20 secciones por sesión**. Las sesiones actuales tienen ~10. Faltan:

| Sección exigida | Estado |
|---|---|
| 1. Identificación | ⚠️ Parcial (sin fecha/participante) |
| 2. Nombre de la misión | ✅ |
| 3. Historia o contexto motivador | ❌ Solo una frase |
| 4. Objetivo de aprendizaje | ✅ ("Propósito") |
| 5. Competencias/habilidades | ❌ |
| 6. Conocimientos previos necesarios | ❌ |
| 7. Materiales y herramientas | ⚠️ Genérico |
| 8. Conceptos nuevos | ❌ |
| 9. Desarrollo paso a paso | ❌ Solo tabla de tiempos |
| 10. Demostración guiada | ❌ Genérica |
| 11. Actividad práctica | ❌ |
| 12. Reto individual | ⚠️ Una frase |
| 13. Ejercicio de exploración | ❌ |
| 14. Prueba del resultado | ⚠️ Genérica |
| 15. Errores frecuentes y soluciones | ❌ |
| 16. Evidencia de aprendizaje | ✅ |
| 17. Criterios de evaluación | ⚠️ Idénticos en las 20 sesiones |
| 18. Preguntas de reflexión | ⚠️ Idénticas en las 20 sesiones |
| 19. Actividad opcional de ampliación | ❌ |
| 20. Orientaciones para padres | ❌ (solo en `GUIA_PARA_FAMILIAS.md`) |

### H-03 — Ausencia total de contenido técnico (crítico)
Ninguna sesión menciona herramientas reales de Roblox Studio: ni `Workspace`, `Explorer`, `Properties`, `Part`, `Move/Scale/Rotate`, `Anchored`, `CanCollide`, `Material`, `Color`, `Terrain`, `SpawnLocation` ni la prueba del juego. Los conceptos exigidos por el encargo no aparecen en ningún archivo.

### H-04 — Ausencia total de código Luau (crítico)
Cero scripts en todo el repositorio. Las sesiones 10 ("Mi primer script"), 11 ("Cambian los colores mágicamente"), 14 ("La moneda desaparece"), 16 ("Si pasa esto") y 17 ("Repetimos y mejoramos") prometen programación pero no incluyen:
- código;
- ubicación exacta de inserción del script;
- explicación línea por línea;
- forma de ejecutar y probar;
- errores frecuentes.

Esto viola las reglas de código del apartado 6 del encargo.

### H-05 — Progresión técnica no asegurada (alto)
El mapa curricular declara eventos, condiciones y repeticiones, pero las sesiones 15–17 trabajan "en papel o con guía", sin conexión con Studio. No está definido el andamiaje previo (variables, funciones, cómo se estructura un script) que debería adquirirse antes de cada concepto nuevo.

### H-06 — El proyecto integrador no se construye progresivamente (alto)
El encargo exige que el Obby se elabore desde las primeras sesiones. Hoy solo hay indicios dispersos (sesiones 3–6 construyen piezas, rutas y escenarios) sin vínculo explícito con los 9 requisitos del proyecto. El sesgo real es: *planear todo en la sesión 18 y construir en 19*.

### H-07 — No centrado en el videojuego (alto)
Varias sesiones son actividades de aula abstractas (tarjetas para ordenar, patrones "en papel"), contradictorio con el principio "la enseñanza debe estar centrada en la creación de videojuegos y no en explicaciones abstractas".

### H-08 — Gamificación ausente (medio)
Solo existe la etiqueta "misión". No hay sistema de insignias, personajes guía, recompensas simbólicas ni desafíos, exigido por el encargo.

### H-09 — Evaluación formativa incompleta (medio)
Faltan: lista de chequeo por módulo, guía de observación completa, seguimiento de evidencias por sesión y autoevaluación infantil con preguntas sencillas. Los criterios de observación de las sesiones son literalmente idénticos.

### H-10 — Inconsistencias menores (bajo)
- Sesión 1: "recordar el avance anterior" cuando aún no hay avance.
- Sesión 1 (materiales): pide "Proyecto de práctica del curso" antes de que exista; no se indica quién lo crea ni cómo.
- `MAPA_CURRICULAR.md` (sesión 11): promete "objeto que cambia mediante código", pero la sesión solo dice "observar un ejemplo".
- `MODULOS/README.md` usa convenciones (*Cierre*, *Reto*, *Evidencia*) que coinciden parcialmente con las sesiones reales.
- La distribución de tiempos del `PLAN_FORMATIVO.md` (sección 5) coincide con las tablas de sesión, pero ambas son idénticas 20 veces, sin adaptación al tipo de actividad.

### H-11 — Recursos multimedia inexistentes (medio)
No hay imágenes, diagramas, infografías, storyboards ni mapas. Es aceptable que no existan aún, pero ninguna sesión referencia recursos visuales concretos ni indica cuáles deben crearse. El encargo prohíbe afirmar que existen; hay que planificarlos explícitamente.

### H-12 — Material del instructor ausente (medio)
No hay guiones de explicación, soluciones de ejercicios, recomendaciones para dificultades frecuentes ni planeaciones por sesión más allá de las 7 líneas genéricas de "Orientaciones para el facilitador".

## 5. Riesgos

| ID | Riesgo | Probabilidad | Impacto |
|---|---|---|---|
| R-01 | Un instructor no pueda impartir las sesiones sin rediseñarlas (violación del requisito de detalle) | Alta | Crítico |
| R-02 | El curso no pueda llevarse a la práctica porque no hay instrucciones reales de Studio ni código verificado | Alta | Crítico |
| R-03 | Desconexión entre evidencias, actividades y proyecto final al reescribir sesiones sin control de versiones | Media | Alto |
| R-04 | Introducir código Luau sin validar contra la documentación oficial vigente | Media | Alto |
| R-05 | Perder información válida de los documentos base al reformular el material | Baja | Medio |
| R-06 | Bloquear el avance del curso por intentar desarrollar todo de una vez (20 sesiones completas simultáneamente) | Media | Alto |
| R-07 | Que las actividades superen la atención real de un niño de 6 años si se mantienen 90 minutos en pantalla sin segmentación real | Media | Medio |

## 6. Mejoras recomendadas

### Prioridad 1 — antes de avanzar a la Fase 2
1. **Reconstruir cada sesión con las 20 secciones exigidas**, manteniendo los campos válidos actuales (título, propósito, evidencia, tiempos).
2. **Diferenciar las 20 sesiones**: historia propia, conceptos nuevos propios, errores frecuentes propios, criterios propios.
3. **Definir la progresión técnica sesión a sesión** con las herramientas reales de Studio (Explorer, Part, Move/Scale/Rotate, Anchored, CanCollide, Material, Color, Terrain, SpawnLocation, Play), verificadas contra la documentación oficial.
4. **Planificar los scripts Luau** de las sesiones 10–17 con reglas completas: código corto, indentado, comentado, línea por línea, ubicación exacta, prueba y errores frecuentes.
5. **Vincular cada sesión con un requisito del proyecto integrador** (tabla de correspondencia sesión → requisito del Obby).

### Prioridad 2 — Fases 3 a 6
6. Crear los instrumentos de evaluación faltantes (listas por módulo, guía de observación, autoevaluación infantil).
7. Diseñar el sistema de gamificación (insignias simbólicas, personaje guía, recompensas sin Robux).
8. Planificar los recursos visuales (diagramas de la interfaz, mapas del Obby, storyboards) como tareas explícitas, sin afirmar que ya existen.
9. Desarrollar el material del instructor (guiones, soluciones, apoyos para dificultades).
10. Ajustar la plantilla de sesión o las sesiones para que ambos documentos converjan.

### Prioridad 3 — Fase 7
11. Control de calidad global: coherencia mapa → plan → sesiones → evidencias → proyecto; exactitud técnica; seguridad; integridad de archivos.

## 7. Plan de ejecución de las siguientes fases

| Fase | Contenido | Punto de verificación antes de avanzar |
|---|---|---|
| **2. Diseño pedagógico** | Validar mapa curricular, progresión técnica sesión a sesión, correspondencia con el proyecto integrador y sistema de gamificación. | Progresión sin saltos conceptuales; cada sesión prepara la siguiente. |
| **3. Desarrollo de sesiones** | Reescribir las sesiones **empezando por las sesiones 1 a 3** para validar metodología y nivel de dificul­tad con el usuario; luego, grupos de 2–3 hasta completar las 20. | Aprobación del usuario tras las sesiones 1–3. |
| **4. Desarrollo técnico** | Verificar scripts Luau contra la documentación oficial, instrucciones de Studio, inserción de scripts y pruebas. | Todo código revisado y con explicación línea por línea. |
| **5. Evaluación** | Listas de chequeo por módulo, guías de observación, autoevaluación infantil, evaluación del proyecto. | Instrumentos alineados con evidencias del mapa curricular. |
| **6. Recursos** | Materiales de estudiante, instructor y familias; recursos multimedia planificados. | Sin afirmar recursos que no existan. |
| **7. Control de calidad** | Revisión integral según los 8 criterios del encargo. | Cero errores importantes pendientes. |

**Decisión metodológica registrada:** conforme a la instrucción del usuario, la Fase 3 iniciará con las **sesiones 1 a 3** como lote piloto para validar metodología y nivel de dificultad antes de continuar con el resto del programa.

---

*Documento generado en la Fase 1. No se modificó ningún archivo original durante esta auditoría.*
