# Diseño pedagógico del curso

**Proyecto:** Curso de creación de videojuegos con Roblox Studio para niños de 6 a 8 años
**Fase:** Fase 2 — Diseño pedagógico (validación de mapa, objetivos, progresión y evidencias)
**Fecha:** 25 de noviembre de 2026
**Estado:** propuesta para aprobación — *no se modificaron los documentos originales*

---

## Tabla de contenidos

1. [Alcance de la fase](#1-alcance-de-la-fase)
2. [Validación del mapa curricular](#2-validación-del-mapa-curricular)
3. [Resultados de aprendizaje: alineación](#3-resultados-de-aprendizaje-alineación)
4. [Progresión técnica sesión a sesión](#4-progresión-técnica-sesión-a-sesión)
5. [Contraste con la documentación oficial](#5-contraste-con-la-documentación-oficial)
6. [Proyecto integrador: construcción progresiva](#6-proyecto-integrador-construcción-progresiva)
7. [Diseño por bloques de atención (6–8 años)](#7-diseño-por-bloques-de-atención-68-años)
8. [Sistema de gamificación](#8-sistema-de-gamificación)
9. [Validación de evidencias e instrumentos](#9-validación-de-evidencias-e-instrumentos)
10. [Cambios propuestos a los documentos originales](#10-cambios-propuestos-a-los-documentos-originales)

---

## 1. Alcance de la fase

Esta fase valida y concreta cuatro decisiones de diseño antes de redactar las sesiones:

1. El mapa curricular y su secuencia de módulos.
2. La correspondencia entre resultados de aprendizaje, sesiones y evidencias.
3. La progresión técnica (herramientas de Studio y conceptos Luau) con sus prerrequisitos.
4. La construcción progresiva del proyecto integrador.

Todo lo que sigue queda registrado aquí para que las sesiones de la Fase 3 (empezando por las 1–3) se redacten sobre una base validada.

## 2. Validación del mapa curricular

### 2.1 Verificaciones superadas

| Verificación | Resultado |
|---|---|
| 20 sesiones × 90 min = 30 h | ✅ |
| Suma de horas por módulo = 30 h | ✅ (1,5+3+4,5+3+4,5+4,5+4,5+4,5) |
| Títulos de `MAPA_CURRICULAR.md` = títulos de `SESION_XX.md` | ✅ |
| Asignación de módulo por sesión consistente | ✅ |
| Coherencia con resultados de aprendizaje del `PLAN_FORMATIVO.md` | ✅ (ver §3) |
| Progresión general: explorar → construir → probar → programar → integrar | ✅ |

### 2.2 Ajustes necesarios (propuestos, pendientes de aprobación)

| # | Documento | Cambio propuesto | Motivo |
|---|---|---|---|
| C-1 | `MAPA_CURRICULAR.md`, sesión 11 | Cambiar "Objeto que cambia mediante código" por "Objeto que cambia al tocarlo (primer evento)" | Precisar el producto real de la sesión |
| C-2 | `MAPA_CURRICULAR.md`, sesión 14 | Añadir a la columna de producto "recogida que desaparece probada con código" | La sesión actual solo alcanza una demostración pasiva |
| C-3 | `MAPA_CURRICULAR.md`, columna "Producto o avance" | Añadir marca de requisito del proyecto integrador (p. ej. `P1`, `P4`) | Exigencia de construcción progresiva (ver §6) |
| C-4 | `PLAN_FORMATIVO.md` §5 | Mantener el reparto, pero indicar que la distribución interna varía según el tipo de sesión (construcción, papel, código) | Las 20 tablas idénticas no se adaptan a la actividad |
| C-5 | `MODULOS/README.md` | Actualizar convenciones para reflejar las 20 secciones definitivas de cada sesión | Evitar divergencia entre índice y sesiones |

## 3. Resultados de aprendizaje: alineación

Los 8 resultados del `PLAN_FORMATIVO.md` quedan cubiertos por las sesiones indicadas:

| RA | Resultado | Sesiones que lo desarrollan | Evidencia principal |
|---:|---|---|---|
| 1 | Reconocer áreas principales de Roblox Studio | 2 | Recorrido guiado (S2) |
| 2 | Insertar, mover, escalar y personalizar piezas | 3, 4, 5 | Tres bloques (S3), escenario (S4–5) |
| 3 | Construir escenario y recorrido de obstáculos | 4, 5, 6, 18, 19 | Ruta y plano (S6, S18) |
| 4 | Probar el movimiento y ajustar el diseño | 7, 8 | Prueba con ajuste (S7–8) |
| 5 | Reconocer que un script contiene instrucciones | 9, 10 | Primer script (S10) |
| 6 | Identificar secuencias, eventos, condiciones y repeticiones | 9, 11, 16, 17 | Código guiado (S11, S16, S17) |
| 7 | Integrar escenario, obstáculos e interacción | 12, 13, 14, 19 | Versión jugable (S19) |
| 8 | Explicar una decisión de diseño y una mejora | 18, 20 | Plano y presentación (S18, S20) |

**Cobertura:** 8/8 resultados con al menos dos sesiones de desarrollo y una evidencia observable. Sin resultados huérfanos ni sesiones sin resultado asociado.

## 4. Progresión técnica sesión a sesión

Cada fila lista **lo que se usa (prerrequisito) → lo que se aprende (nuevo)**. Ninguna sesión introduce una herramienta que no se haya practicado antes.

### Módulo 0–1. Bienvenida e interfaz (S1–S3)

| Sesión | Herramientas (de sesiones previas) | **Concepto nuevo** | Producto |
|---:|---|---|---|
| 1 | Ninguno (papel y lápiz) | La idea de videojuego como plan | Nombre + tema + dibujo |
| 2 | Abrir Roblox Studio (adulto) | Interfaz: vista 3D, `Explorer`, `Properties`, botón **Play/Stop** | Proyecto de práctica abierto |
| 3 | Interfaz de la S2 | `Part`, herramientas **Move / Scale / Rotate**, duplicar (Ctrl+D), borrar | 3 piezas manipuladas |

### Módulo 2. Construcción (S4–S6)

| Sesión | Herramientas | **Concepto nuevo** | Producto |
|---:|---|---|---|
| 4 | Part, Move, Scale | Suelo grande; **`Anchored`** (las piezas flotan si no está activado) | Isla con suelo anclado |
| 5 | Part, Explorer | `Properties`: **`Color`** y **`Material`** | Escenario con paleta |
| 6 | Part, Move, Scale | **`SpawnLocation`**; organizar plataformas en ruta | Ruta inicio→meta |

### Módulo 3. Personaje y pruebas (S7–S8)

| Sesión | Herramientas | **Concepto nuevo** | Producto |
|---:|---|---|---|
| 7 | Play/Stop | Controles del personaje (WASD, salto); **`CanCollide`** (atravesar vs. apoyarse) | Recorrido probado |
| 8 | Todo lo anterior | Espaciado de saltos; ciclo **probar → ajustar → volver a probar** | Saltos alcanzables |

### Módulo 4. Primeros scripts (S9–S11)

| Sesión | Herramientas | **Concepto nuevo** | Producto |
|---:|---|---|---|
| 9 | Dibujo del S1 | **Secuencia**: las instrucciones se ejecutan en orden (papel, ligado a su propio Obby) | Secuencia ordenada |
| 10 | Explorer de la S2 | **Script** en `Workspace`; ventana **Output**; `print("texto")` | Mensaje en Output |
| 11 | Script del S10, `Color` del S5 | **Evento**: `Touched` — "cuando algo pasa, el juego responde"; primera conexión `:Connect()` | Parte que cambia al tocarla |

### Módulo 5. Objetos e interacciones (S12–S14)

| Sesión | Herramientas | **Concepto nuevo** | Producto |
|---:|---|---|---|
| 12 | Part, Color, Material | Diseño con propósito (¿para qué sirve este objeto?) | Objeto temático |
| 13 | Part, Move | Ubicación del coleccionable en la ruta | Estrella colocada |
| 14 | Evento del S11 | Aplicar el evento a la recogida: la moneda **desaparece** (`Transparency`/`Destroy`) | Recogida funcional |

### Módulo 6. Reglas y código (S15–S17)

| Sesión | Herramientas | **Concepto nuevo** | Producto |
|---:|---|---|---|
| 15 | Part, Color, Material | Obstáculo visualmente señalizado (solo diseño) | Zona de lava |
| 16 | Evento del S14 | **Condición**: `if … then … end` — "si toca la lava, entonces reaparece" | Regla funcionando |
| 17 | Condición del S16 | **Repetición**: `while wait() do … end` — parpadeo o giro continuo | Efecto repetido |

### Módulo 7. Integración (S18–S20)

| Sesión | Herramientas | **Concepto nuevo** | Producto |
|---:|---|---|---|
| 18 | Todo lo anterior | Planificación integral (mapeo de requisitos del proyecto) | Plano completo |
| 19 | Todo lo anterior | **Prueba con lista de verificación** y mejora registrada | Versión jugable |
| 20 | Todo lo anterior | Presentación privada y explicación de decisiones | Demostración + reflexión |

### Cadena de prerrequisitos de código

```
S9 secuencia (papel)
  └─ S10 script + Output (print)
       └─ S11 evento Touched + :Connect()
            └─ S14 aplicar evento a recogida
                 ├─ S16 condición if (sobre el evento)
                 └─ S17 repetición while (independiente, tras S16 por complejidad creciente)
```

**Variable:** se introduce solo si es imprescindible (p. ej. un nombre para la parte en S11), nunca como tema aparte; se explica como "una etiqueta que guarda un valor". Sin esto, el curso no excede el andamiaje de 6–8 años.

## 5. Contraste con la documentación oficial

Verificado el 25 de noviembre de 2026 en `create.roblox.com/docs/es-es`:

| Fuente oficial | Lo que confirma | Estado del diseño |
|---|---|---|
| *Fundamentos de programación* (coding-1) | Orden: Studio/Building → crear script → propiedades → funciones/eventos → condicionales → bucles | ✅ Nuestra progresión S2–S17 sigue ese orden |
| *Variables y objetos* (coding-1 landing) | Prerrequisito: "conocimiento básico de crear y manipular partes" → nuestro S10 ocurre **después** de S3–S8 | ✅ |
| *Crear un script* (coding-1) | Primer script = crear objeto script e imprimir en la ventana Salida → base de la S10 | ✅ |
| *Propiedades de objetos* (coding-1) | Cambiar color de una parte con código → base de la S11 | ✅ |
| *Funciones y eventos* (coding-2) | Eventos conectan código al mundo (trampas, puentes) → base de S11/S14/S16 | ✅ |
| *Condicionales* (coding-3) | Patrón "si esto sucede, entonces haz aquello" → base de la S16 | ✅ |
| *Bucles* (coding-4) | `for`/`while` → base de la S17 | ✅ |
| *Curriculum Studio/Building* | Interfaz y construcción previas al código | ✅ S2–S8 |

**Conclusión:** la progresión técnica del curso es una versión simplificada y adecuada a la edad del orden oficial. Ningún concepto se introduce fuera de secuencia. En la Fase 4 se verificarán los fragmentos de código concretos (`print`, `Touched`, `if/then`, `while wait()`) contra *Create a Script*, *Object properties* y *Functions and events*.

## 6. Proyecto integrador: construcción progresiva

Mapeo obligatorio **sesión → requisito del Obby** (los productos de sesión ya existentes se reutilizan; no se duplica trabajo):

| Requisito (`ESPECIFICACION.md`) | Sesión donde se construye | Sesión donde se refuerza |
|---|---|---|
| 1. Nombre del videojuego | **S1** (idea) | S18 (nombre definitivo) |
| 2. Tema elegido | **S1** | S18 |
| 3. Punto de inicio reconocible | **S6** (`SpawnLocation`) | S19 (prueba) |
| 4. Cinco o más plataformas u obstáculos | **S6** (ruta) | S8 (saltos), S15 (lava), S19 |
| 5. Decoración del tema | **S5** (color/material) | S12 (objeto), S18 |
| 6. Meta visible | **S6** (fin de la ruta) | S18 (plano) |
| 7. Objeto especial o coleccionable | **S12–S13** | S14 (recogida) |
| 8. Una regla o interacción sencilla | **S11** (primer evento) | S14, S16, S17 |
| 9. Prueba y al menos una mejora | **S7–S8** (ciclo probar-ajustar) | S19 (lista de verificación) |

**Validación:** los 9 requisitos tienen origen antes de la sesión 18. La sesión 18 deja de ser "el inicio del proyecto" y pasa a ser la **consolidación del plano**; la 19, la integración; la 20, la presentación. Cumple la exigencia de que el proyecto no se deje para las últimas clases.

## 7. Diseño por bloques de atención (6–8 años)

El reparto de 90 minutos del `PLAN_FORMATIVO.md` se mantiene, pero cada sesión lo adaptará a **un tipo de sesión**, con reglas de edad:

| Tipo de sesión | Bloque largo | Ejemplo |
|---|---|---|
| Construcción en Studio (S3–S8, S12–S13, S15) | Práctica guiada + reto | Más manos y menos pantalla |
| Papel/creatividad (S1, S9, S18) | Dibujo y conversación | Alternancia total con la pantalla |
| Código (S10, S11, S14, S16, S17) | Demostración + copiar/explicar/prueba | Bloques de código ≤ 8 líneas; una idea por vez |

Reglas transversales de edad (obligatorias en las 20 sesiones):

1. Instrucciones de **una línea** por paso; esperar a que el niño lo haga.
2. **Una habilidad nueva** por sesión (ya garantizado por el §4).
3. **Pausa activa** a los ~35 minutos (obligatoria, no opcional).
4. Todo bloque de concentración **≤ 15 minutos**.
5. Nombres de herramientas siempre acompañados de **analogía visual** ("Explorer es como la cajita de herramientas").
6. Cierre con **preguntas orales**, nunca con lectura o escritura obligatoria.
7. El acompañamiento adulto **no toma decisiones creativas** (consistente con `GUIA_PARA_FAMILIAS.md`).

## 8. Sistema de gamificación

Propuesta coherente con el encargo (sin Robux, sin compras, sin premios materiales):

- **Personaje guía:** "Chip", un robot constructor que aparece en el encabezado de cada sesión con la misión del día.
- **Insignias simbólicas** (una por módulo, otorgadas por el facilitador al observar la evidencia):

| Módulo | Insignia | Condición |
|---:|---|---|
| 0 | 🎨 Creador de ideas | Presenta su idea y dibujo |
| 1 | 🔍 Explorador | Nombra 3 zonas de la interfaz con ayuda |
| 2 | 🧱 Constructor | Suelo, colores y ruta completados |
| 3 | 🏃 Probador | Ajusta un salto tras probar |
| 4 | 💻 Programador novato | Ve su mensaje en la ventana Output |
| 5 | ⭐ Cazador de estrellas | Recogida probada |
| 6 | 🛡 Guardián de reglas | Condición y repetición funcionando |
| 7 | 🏆 Maestro del Obby | Presenta su juego y explica una mejora |

- **Recompensas simbólicas:** el nombre del niño en su propia pantalla de título (dentro del proyecto), sticker digital o mención en la clase; nunca Robux, compras ni desbloqueos pagados.
- **Desafíos opcionales:** "reto del desafío" opcional al final de cada sesión (actividad de ampliación).

## 9. Validación de evidencias e instrumentos

| Evidencia por tramo (`MATRIZ_EVIDENCIAS.md`) | ¿Cubierta en sesiones? | Observación |
|---|---|---|
| S1 idea | ✅ | — |
| S2–3 exploración y piezas | ✅ | — |
| S4–6 escenario y plataformas | ✅ | — |
| S7–8 pruebas de movimiento | ✅ | — |
| S9–11 secuencia y primer script | ✅ | Requiere que la S11 produzca evidencia de código (C-1) |
| S12–14 objeto y coleccionable | ⚠️ | La S14 debe alcanzar interacción probada (C-2) |
| S15–17 obstáculo y regla | ⚠️ | S16–17 deben producir código visible, no solo papel (H-07) |
| S18–20 proyecto integrador | ✅ | — |

**Instrumentos faltantes a crear en la Fase 5** (ya planificados aquí):

1. Lista de chequeo por módulo (8 listas, derivadas de las insignias del §8).
2. Guía de observación completa (columnas: tarea, nivel de ayuda, siguiente paso).
3. Autoevaluación infantil por módulo (3–4 preguntas con caritas: 😊 😐 😕).
4. Seguimiento de evidencias por sesión (registro del facilitador).
5. Evaluación del proyecto integrador (ya existe parcialmente en `ESPECIFICACION.md` §Criterios; se complementa con la lista final de `MATRIZ_EVIDENCIAS.md`).

**Criterio de coherencia:** cada evidencia de la matriz debe poder observarse en el **reto individual** de la sesión correspondiente; cada lista de chequeo debe referenciar el requisito del proyecto si lo hay.

## 10. Cambios propuestos a los documentos originales

| Archivo | Cambio | Estado |
|---|---|---|
| `MAPA_CURRICULAR.md` | C-1, C-2, C-3 (productos más precisos + marca de requisito de proyecto) | ⏳ Pendiente de autorización |
| `PLAN_FORMATIVO.md` | C-4 (flexibilidad de tiempos por tipo de sesión) | ⏳ Pendiente de autorización |
| `MODULOS/README.md` | C-5 (convenciones actualizadas) | ⏳ Pendiente de autorización |
| `MODULOS/SESION_XX.md` | Reescritura completa con las 20 secciones | 📋 Fase 3 (iniciando por S1–S3) |
| `EVALUACION/` | 4 instrumentos nuevos | 📋 Fase 5 |

*Los cambios C-1 a C-5 son menores y conservan toda la información válida existente; se aplicarán solo con autorización, registrándolos en el historial del archivo correspondiente.*

---

**Validación de la fase:** mapa curricular ✅ · objetivos alineados (8/8) ✅ · progresión técnica sin saltos y contrastada con la oficial ✅ · proyecto progresivo (9/9 requisitos) ✅ · evidencias con instrumentos planificados ⏳ (Fase 5).

**Siguiente paso:** autorizar los cambios C-1 a C-5 e iniciar la **Fase 3 con las sesiones 1 a 3** como lote piloto para validar metodología y nivel de dificultad.
