# Sesión 11. Cambian los colores mágicamente

**Módulo:** Módulo 4 — Aprendo a dar instrucciones
**Duración:** 90 minutos (con pausas y acompañamiento)
**Nivel:** principiante

## 1. Identificación

| Dato | Información |
|---|---|
| Sesión | 11 de 20 |
| Título | Cambian los colores mágicamente |
| Módulo | Módulo 4 — Aprendo a dar instrucciones |
| Duración | 90 minutos (bloque acompañado, con pausa activa) |
| Tipo de sesión | **Código** (demo → copiar/explicar línea por línea → probar) |
| Prerrequisitos | S05 Color en Properties · S10 script + Output + Play/Stop |
| Conceptos nuevos | **Evento** `Touched` · conectar un evento con `:Connect()` · cambiar una propiedad con código |
| Requisito del proyecto | **P8** (primera interacción o regla sencilla) |
| Insignia en juego | 💻 **Programador novato** (segunda evidencia del Módulo 4) |
| Referencia oficial | *Funciones y eventos* (coding-2) · *Propiedades de objetos* (coding-1) — verificado 25/11/2026 |

## 2. Nombre de la misión

**"Cambian los colores mágicamente."**

## 3. Historia o contexto motivador

Chip toca una roca y esta cambia de color: "Los objetos de un juego **reaccionan** cuando algo les pasa: cuando los tocan, cuando caes encima, cuando llega el jugador. Hoy programarás esa magia: tu objeto cambiará **solo**, cuando alguien lo toque. Será el primer corazón de tu Obby".

## 4. Objetivo de aprendizaje

Relacionar un evento (algo que pasa) con una acción (lo que hace el juego): programar que una pieza cambie de color al ser tocada.

## 5. Competencias o habilidades que se desarrollan

- Pensamiento computacional: **evento → acción** (causa y efecto).
- Lectura de un fragmento corto con apoyo (4 líneas).
- Reutilización de saberes: Color (S05), script (S10), Explorer.
- Prueba y verificación del comportamiento esperado.

## 6. Conocimientos previos necesarios

- S05: seleccionar pieza y cambiar **Color** en Properties (hoy lo hará **el código**).
- S10: crear Script en ServerScriptService, renombrar, Output, ▶/■.
- S07: el personaje camina y toca piezas (que es lo que disparará el evento).
- Secuencia en papel (S09): "esto pasa → esto otro".

## 7. Materiales y herramientas

- Computador con Roblox Studio, conexión e internet, mouse y teclado.
- Proyecto de práctica; una **Part nueva** ("Botón mágico") que se insertará al inicio.
- Script nuevo dentro de esa Part (creado con el botón +, igual que en S10).
- **Plantilla de código** impresa o en pantalla (4 líneas, con colores y palabras clave):
  - `local pieza = script.Parent`
  - `pieza.Touched:Connect(function()`
  - `    pieza.Color = Color3.fromRGB(255, 0, 0)`
  - `end)`
- Ficha de analogías: **evento = "cuando pase esto"**, **acción = "entonces haz esto"**.
- Ventana Output activa.
- Adulto acompañante presente.

## 8. Conceptos nuevos

| Concepto | Nombre real | Explicación para niños |
|---|---|---|
| Evento | **Touched** | "El momento exacto en que algo toca la pieza" |
| Conectar | **:Connect(function() … end)** | "Amarrar el momento a la reacción" |
| script.Parent | — | "La pieza donde vive este script" (su casita) |
| Cambiar con código | `pieza.Color = Color3.fromRGB(255, 0, 0)` | "El código pintando: rojo puro" |
| Evento → acción | — | "**Cuando** la toquen, **entonces** se pone roja" |

**Nota para el facilitador:** `function() … end` se presenta como "el bloque que se ejecuta cuando el evento pasa", sin profundizar en funciones (la S14 y S16 lo reutilizarán; la teoría de funciones queda fuera del alcance de 6–8 años).

## 9. Desarrollo paso a paso

| Tiempo | Bloque | Acción del facilitador |
|---:|---|---|
| 10 min | Bienvenida | Recordar S10 (print) y S05 (Color); presentar la magia: "hoy el CÓDIGO pinta". |
| 15 min | Demostración | Crear pieza + script + código + probar el toque (§10). |
| 20 min | Práctica guiada | El participante arma la pieza y pega la plantilla (§11). |
| 5 min | Pausa activa | "Estatuas que reaccionan": congelarse y moverse solo cuando el facilitador diga "¡toque!" (analogía del evento). |
| 20 min | Reto individual | Su botón mágico funcionando en Play (§12). |
| 10 min | Prueba | Tocar con el personaje y verificar el cambio (§14). |
| 10 min | Cierre | Explicar evento→acción con la ficha; recordatorio P8 del proyecto. |

## 10. Demostración guiada

1. **Crear la pieza:** botón **Part** (Home) → moverla al suelo con Move → **Anchored ✓** → Color a gusto (S05). "Esta será nuestro botón mágico".
2. **Script dentro de la pieza:** en Explorer, pasar el mouse sobre **la Part** → **+** → **Script**. (¡Ojo! Esta vez el script va **dentro de la pieza**, no en ServerScriptService: así sabe cuál es "su casita").
3. **Renombrar** la Part a `BotonMagico` y el Script a `ScriptBoton` (clic derecho → Renombrar).
4. **Reemplazar el código:** borrar la línea por defecto y escribir/pegar la plantilla de 4 líneas (§7), **respeta los espacios y las comillas**.
5. **Leer línea por línea con la ficha:**
   - `local pieza = script.Parent` → "una etiqueta: 'pieza' guarda la casita de este script".
   - `pieza.Touched:Connect(function()` → "**Cuando** alguien toque la pieza…"
   - `    pieza.Color = Color3.fromRGB(255, 0, 0)` → "…**entonces** se pinta de rojo (255,0,0 = rojo puro)".
   - `end)` → "cierra el bloque de la reacción".
6. **▶ Play** → caminar el personaje hasta tocar la pieza → **¡se pone roja!** → ■ Stop.
7. Volver a ponerla de otro color en Properties y probar otra vez (el código la vuelve a poner roja al tocar).

> Verificado: eventos conectados con `:Connect` y patrón "cuando pase X, haz Y" en *Funciones y eventos*; cambiar propiedades con código en *Propiedades de objetos* (Roblox Creator Docs, 25/11/2026).

## 11. Actividad práctica

Con acompañamiento:

1. Insertar **Part** → moverla, anclarla (Anchored ✓) y pintarla (S05).
2. **+ sobre la Part → Script**; renombrar pieza y script.
3. Pegar/escribir la plantilla de 4 líneas con la ficha al lado.
4. **▶ Play** → tocar con el personaje → observar el cambio → **■ Stop**.

## 12. Reto individual

**Reto: "Mi botón mágico"** — que su pieza reaccione al toque:

1. Una pieza colocada en su escenario (puede ser un "botón", una "puerta" o una "roca").
2. El script con la plantilla funcionando.
3. **Personalización:** cambiar el color del `fromRGB(255, 0, 0)` a otro color que elija (p. ej. `0, 200, 255` = azul) y probarlo.
4. Ubicar la pieza en un lugar **visible** de su ruta (es requisito P8 del proyecto final).

**Variantes:**
- *Más fácil:* pegar la plantilla tal cual con el facilitador escribiendo los números del color.
- *Desafío:* dos botones con scripts distintos (uno rojo, otro azul).

**Límite:** 1 pieza + 1 script. La recogida y las reglas vienen en las sesiones 14 y 16.

## 13. Ejercicio de exploración

**"¿Evento o no evento?":** el facilitador describe situaciones ("el jugador lo toca", "está de noche", "el jugador saltó encima", "yo parpadeo") y el niño decide si sería un evento del juego. Solo se afina la idea de **"el momento que dispara algo"**; no se enseñan otros eventos todavía.

## 14. Prueba del resultado

1. ▶ **Play** → tocar la pieza con el personaje → **cambia de color**.
2. Cambiar el color en Properties, probar otra vez → el código **lo vuelve a poner** (demuestra que manda el código).
3. **■ Stop.**
4. Preguntas de verificación:
   - "¿QUÉ hace cambiar el color?" (que **lo toquen** → evento)
   - "¿Dónde vive el programa de la magia?" (el **script dentro de la pieza**)
5. Confirmar: pieza anclada, script renombrado, mensaje sin errores rojos en Output.

**Criterio de éxito:** la pieza cambia de color al tocarla en Play y el niño explica "cuando la toco, se pinta".

## 15. Errores frecuentes y soluciones

| Problema | Solución |
|---|---|
| Nada pasa al tocar | Verificar que el script está **dentro de la pieza** (Explorer: la pieza → flechita del script) y que el código está completo hasta `end)`. |
| Error **rojo** en Output | Revisar mayúsculas/minúsculas, comillas y paréntesis; comparar con la plantilla carácter por carácter (el facilitador puede hacerlo). |
| "Unknown global" o nombres raros | El nombre `pieza` debe ser igual en las 3 líneas donde aparece. |
| La pieza no se ve o se cae al jugar | **Anchored ✓** (S04) y Move para colocarla bien. |
| Se pegó el código con sangrías raras | No importa para que funcione hoy; si hay error, rehacer con la plantilla. |
| Cambió el color pero "no se nota" | Elegir un color más fuerte (rojo puro) o probar con luz; ver el cambio en Play. |
| Tocó varias veces y "no pasa nada más" | Es normal: ya está roja. Cambiar el color en Properties y tocar de nuevo. |
| Varios scripts en la pieza | Dejar solo uno (Supr en los extras). |

## 16. Evidencia de aprendizaje

- Objeto que cambia de color **al tocarlo** (demostración en vivo durante Play).
- Script dentro de la pieza, renombrado, sin errores en Output.
- Explicación oral del patrón evento → acción con la ficha.

## 17. Criterios de evaluación

| Criterio | Logrado | En proceso | Requiere apoyo |
|---|---|---|---|
| Crea la pieza y la ancla | | | |
| Inserta el script dentro de la pieza | | | |
| Completa la plantilla de 4 líneas | | | |
| Ve el cambio de color al tocar en Play | | | |
| Explica "cuando lo toco, se pinta" | | | |

## 18. Preguntas de reflexión

1. "¿Qué es lo que hace que tu pieza cambie?"
2. "¿Quién 'manda' más, tú al pintarla o el código?"
3. "¿En qué parte de tu Obby querías un objeto que reaccione así?"

## 19. Actividad opcional de ampliación

- **Cambiar a otro color por código:** probar `0, 200, 0` (verde) o `255, 200, 0` (amarillo).
- **Segundo evento simple:** duplicar pieza + script (Ctrl+D en Explorer) y colocar el clon en otro punto.
- Dibujar en el plano la flecha "TOCA → CAMBIA" para el mapa de interacciones del proyecto.

## 20. Orientaciones para padres o acompañantes

- Apoye la escritura del código si el niño aún no escribe con fluidez: **leer juntos cada línea** es suficiente; la comprensión es lo que se evalúa.
- Mantenga la plantilla visible durante toda la sesión.
- Si hay error rojo en Output, use la técnica "comparar con la plantilla línea por línea": es una habilidad de depuración real y apropiada para la edad con ayuda.
- Este es el **P8** (interacción) del proyecto final: guardar el proyecto sin publicarlo; el curso **no usa Robux ni compras** (ver `RECURSOS/REQUISITOS_TECNICOS_Y_SEGURIDAD.md`).

---

**Registro de cambios**
- 25/11/2026 (Fase 3): reescritura completa con las 20 secciones. Se conservaron de la versión anterior: título, módulo, duración, misión, propósito ("relacionar evento y acción"), materiales, distribución de tiempos, evidencia ("objeto que cambia en una demostración guiada") y criterio de observación general. El producto se precisó a "cambia al tocarlo (primer evento)" (cambio C-1 del mapa curricular). Fragmento de código y patrón de eventos contrastados con la documentación oficial (25/11/2026).
