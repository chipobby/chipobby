# Sesión 15. Cuidado con la lava

**Módulo:** Módulo 6 — Retos, reglas y obstáculos
**Duración:** 90 minutos (con pausas y acompañamiento)
**Nivel:** principiante

## 1. Identificación

| Dato | Información |
|---|---|
| Sesión | 15 de 20 |
| Título | Cuidado con la lava |
| Módulo | Módulo 6 — Retos, reglas y obstáculos |
| Duración | 90 minutos (bloque acompañado, con pausa activa) |
| Tipo de sesión | Construcción en Studio (diseño de obstáculo con señalización) |
| Prerrequisitos | S05 colores/materiales · S07–S08 saltos y CanCollide · S12 objetos que avisan |
| Conceptos nuevos | **Obstáculo** con regla implícita · señalización visual del peligro |
| Requisito del proyecto | base del **P4** (obstáculos) y preparación del **P8** con regla (S16) |
| Insignia en juego | 🛡 **Guardián de reglas** (Módulo 6, al terminar S17) |

## 2. Nombre de la misión

**"Cuidado con la lava."**

## 3. Historia o contexto motivador

Chip baja la voz: "Tu circuito necesita un momento de **peligro**… pero un peligro **justo**: el jugador debe entenderlo de un vistazo antes de sufrir. Si la lava no se ve clara, el juego es tramposo. Hoy crearás la zona de lava: roja, brillante y avisada — **una regla que se lee con los ojos**".

## 4. Objetivo de aprendizaje

Identificar un obstáculo y sus reglas, diseñando una zona de peligro visualmente clara y señalizada en el escenario.

## 5. Competencias o habilidades que se desarrollan

- **Pensamiento computacional:** inferir la regla ("si toca la lava, entonces…") desde el diseño — se formaliza en la S16.
- Comunicación visual: color + material + señal = advertencia comprensible.
- Coherencia de diseño: el obstáculo encaja con la ruta (S06–S08).
- Anticipación: prever qué hará el jugador.

## 6. Conocimientos previos necesarios

- S05 Color/Material (rojo/naranja + Neon) · S06 ubicar en la ruta · S08 saltos alcanzables · S12 objetos que avisan (Wedge/letrero).
- S07: saber que el personaje **toca** las piezas (base del evento de la S16).
- S13–S14: coleccionable funcionando (el circuito ya "responde").

## 7. Materiales y herramientas

- Computador con Roblox Studio, conexión e internet, mouse y teclado.
- Proyecto de práctica con la ruta completa.
- Ficha **"El ABC del peligro":** **A**pariencia (rojo/naranja + Neon) · **B**arrera definida (bordes nítidos) · **C**laridad de regla (se entiende sin palabras).
- Opcional: 1 objeto-letrero (Wedge) del patrón S12 para avisar antes de la lava.
- Adulto acompañante presente.

## 8. Conceptos nuevos

| Concepto | Nombre real en Studio | Explicación para niños |
|---|---|---|
| Obstáculo | pieza en la ruta | "Algo que obliga al jugador a esforzarse" |
| Zona de peligro | Part con Color rojo/naranja + **Neon** | "La lava: se ve caliente y clara" |
| Señalización | objeto-letrero (Wedge) anterior | "Aviso antes del peligro: el juego es justo" |
| Regla implícita | — | "El diseño ya dice: ¡no la toques!" (la programamos mañana) |

## 9. Desarrollo paso a paso

| Tiempo | Bloque | Acción del facilitador |
|---:|---|---|
| 10 min | Bienvenida | Mostrar el ABC del peligro; recordar que "si el jugador no entiende, el juego es tramposo". |
| 15 min | Demostración | Crear la lava: forma, color, material, ubicación y señal (§10). |
| 20 min | Práctica guiada | El participante crea su zona de lava con acompañamiento (§11). |
| 5 min | Pausa activa | "Volcanes": agacharse (calma), saltar (erupción), agacharse; estirar; descanso visual. |
| 20 min | Reto individual | Diseñar una zona de peligro clara y señalizada (§12). |
| 10 min | Prueba | Mirarla desde el inicio: ¿se entiende sin explicación? (§14) |
| 10 min | Cierre | Presentar la regla implícita de su obstáculo; preguntas de reflexión. |

## 10. Demostración guiada

1. **Elegir el lugar:** en la ruta, un tramo donde el jugador deba saltar (aprovechar los huecos ya ajustados en S08).
2. **Forma:** Part → **Block** (o Cylinder) → Scale: ancho como el pasillo, bajo ("no debe tapar la vista").
3. **Apariencia (A):** Color naranja/rojo fuerte + Material **Neon**. "La lava brilla: es inconfundible".
4. **Barrera definida (B):** Move para que los bordes queden nítidos entre plataformas; sin piezas grises mezcladas.
5. **Señal (C):** un **Wedge** pequeño con rojo intenso **antes** de la zona (patrón S12: objeto que avisa). "Primero el aviso, después la lava".
6. **CanCollide:** dejarla **✓ activada** (hoy el jugador puede pararse en ella; la regla que la vuelve peligrosa llega en la S16). Decirlo explícitamente: "Hoy solo se **ve** peligrosa; mañana sabrá **hacer** algo peligroso".
7. **▶ Play:** mirar la zona desde el inicio → ■ Stop. "¿Se entiende desde lejos?".

## 11. Actividad práctica

Con acompañamiento:

1. Elegir el tramo de la ruta para el obstáculo.
2. Insertar la pieza de lava → Scale → Move.
3. Color naranja/rojo + Material **Neon**.
4. Añadir el letrero (Wedge) anterior, si aplica.
5. ▶ Play → mirar desde el inicio → ■ Stop.

## 12. Reto individual

**Reto: "Mi zona de peligro justa"** — cumplir el ABC:

1. **A.** Rojo/naranja + Neon (se ve peligrosa).
2. **B.** Definida: ocupa el tramo exacto donde hay que esforzarse (sin tapar otras cosas).
3. **C.** Clara: un jugador nuevo la entiende **sin que nadie le explique** — incluir un aviso (letrero o color previo).
4. Todo **anclado** (Anchored ✓) y sin romper el tramo de saltos (revisar con Play).

**Variantes:**
- *Más fácil:* zona rectangular simple + color llamativo, con el facilitador eligiendo el lugar.
- *Desafío:* dos zonas de lava (Ctrl+D) o lava que rodee una plataforma "isla segura".

**Límite:** 1 zona (máx. 2). La **regla programada** es la sesión 16.

## 13. Ejercicio de exploración

**"El jugador novato":** el facilitador juega con la cámara desde el SpawnLocation (sin indicaciones) y, al ver la lava, debe **decir qué haría** (saltar, evitar, ¿tocar?). Si duda o diría "toco para ver qué pasa", el diseño no está claro: el niño mejora la señalización. 2 rondas. Objetivo: **empatía con el jugador** y justicia del diseño.

## 14. Prueba del resultado

1. ▶ **Play:** mirar la lava desde el inicio del circuito.
2. Preguntas de verificación (sin dar la respuesta antes):
   - "¿Qué es eso?" (esperado: lava/peligro)
   - "¿Qué haría el jugador?" (evitarla/saltarla)
   - "¿Es justo? ¿Se ve antes de llegar?" (esperado: sí, por el color y el aviso)
3. **■ Stop** → verificar **Anchored ✓** y que la ruta sigue siendo posible (S08).
4. Confirmar que **no hay script** en la lava todavía (esa es la S16).

**Criterio de éxito:** zona roja/neon, ubicada en un tramo de esfuerzo, con aviso previo y regla comprensible a simple vista.

## 15. Errores frecuentes y soluciones

| Problema | Solución |
|---|---|
| "No se ve peligrosa" | Subir la intensidad: **Neon** + rojo puro (`255, 0, 0`) o naranja fuerte. |
| Tapó la vista o la ruta | Scale más bajo/bajo y Move a los márgenes del tramo. |
| El jugador no la distingue de otra pieza | Aislar: sin piezas grises pegadas; añadir el letrero previo (C). |
| La ruta quedó imposible (S08) | Revisar que los saltos siguen alcanzables alrededor de la lava. |
| Se cayó al probar | **Anchored ✓**. |
| Ya le puso script y "no hace nada especial" | Correcto: la regla es la S16. No agregar código hoy. |
| Quiere que mate al jugador ya | Explicar que **eso** es la sesión 16 (la regla "si… entonces"); hoy es el diseño. |

## 16. Evidencia de aprendizaje

- Obstáculo de lava: zona de peligro visualmente clara y señalizada (ABC cumplido).
- Explicación de la **regla implícita**: "no la toques" (registrada por el facilitador).
- Demostración con el "jugador novato" (§13) superada.

## 17. Criterios de evaluación

| Criterio | Logrado | En proceso | Requiere apoyo |
|---|---|---|---|
| Diseña una zona roja/neon de aspecto peligroso | | | |
| La ubica en un tramo con sentido de la ruta | | | |
| Añade un aviso previo (señalización) | | | |
| La ancla y conserva el circuito jugable | | | |
| Explica la regla "no la toques" | | | |

## 18. Preguntas de reflexión

1. "¿Cómo hace un jugador para entender que eso es peligroso sin que nadie le avise?"
2. "¿Por qué el peligro debe ser justo y no una trampa escondida?"
3. "¿Qué debería pasar si alguien la toca de todas formas?" (gancho de la S16)

## 19. Actividad opcional de ampliación

- **Doble señal:** añadir una segunda advertencia (otro Wedge o un cambio de color en el piso previo).
- **Lava con textura:** combinar Neon con otra pieza de material `Basalt`/`CrackedLava` si está disponible en la versión (solo visual).
- Dibujar en el plano: 🔴 **zona de peligro + aviso previo**.

## 20. Orientaciones para padres o acompañantes

- El concepto clave es **justicia del diseño**: repita la idea "si el jugador no lo entiende, el juego no es bueno".
- No agregue todavía el script de lava: la sesión 16 es la de la regla programada; hoy se diseña.
- Use la ronda del "jugador novato" (§13): es la mejor forma de que el niño se coloque en el papel de quien juega.
- Recuerde: si el niño ya tiene lava de una sesión anterior, puede **mejorarla** en vez de crear otra.

- **Seguridad:** el proyecto **no se publica** y el curso **no usa Robux ni compras**; el adulto revisa las evidencias antes de compartirlas (ver `RECURSOS/REQUISITOS_TECNICOS_Y_SEGURIDAD.md`).

---

**Registro de cambios**
- 25/11/2026 (Fase 3): reescritura completa con las 20 secciones. Se conservaron de la versión anterior: título, módulo, duración, misión, propósito ("identificar un obstáculo y sus reglas"), materiales, distribución de tiempos, evidencia ("obstáculo seguro y claramente señalizado") y criterio de observación general. Se añadió la señalización previa y el puente explícito hacia la regla programada de la sesión 16.
