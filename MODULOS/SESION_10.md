# Sesión 10. Mi primer script

**Módulo:** Módulo 4 — Aprendo a dar instrucciones
**Duración:** 90 minutos (con pausas y acompañamiento)
**Nivel:** principiante

## 1. Identificación

| Dato | Información |
|---|---|
| Sesión | 10 de 20 |
| Título | Mi primer script |
| Módulo | Módulo 4 — Aprendo a dar instrucciones |
| Duración | 90 minutos (bloque acompañado, con pausa activa) |
| Tipo de sesión | **Código** (bloques cortos: demo → copiar/explicar → probar) |
| Prerrequisitos | S09 secuencia de instrucciones en papel · S02 Explorer/Play · S07 Play/Stop |
| Conceptos nuevos | **Script** · ventana **Output** · función **print()** · cadena de texto |
| Insignia en juego | 💻 **Programador novato** (Módulo 4, entrega al cerrar) |
| Referencia oficial | *Crear un script* (coding-1) — verificado 25/11/2026 |

## 2. Nombre de la misión

**"Mi primer script."**

## 3. Historia o contexto motivador

Chip abre su mano y muestra una **lista de instrucciones** como la de la sesión 09: "Recuerda cuando me programaste en papel? El computador guarda sus listas en objetos llamados **scripts**. Hoy crearás el tuyo y verás tu primer mensaje en la pantalla del programador. Es el día en que dejas de jugar solo… y empiezas a **decirle al juego qué hacer**".

## 4. Objetivo de aprendizaje

Reconocer un script, crearlo en el lugar correcto y ejecutarlo para ver un mensaje propio en la ventana Output.

## 5. Competencias o habilidades que se desarrollan

- Comprensión de que un script contiene instrucciones para el computador (RA 5).
- Seguir una secuencia técnica exacta (Explorer → + → Script).
- Lectura guiada de una línea de código con analogías.
- Verificación: ejecutar → observar → detener.

## 6. Conocimientos previos necesarios

- S09: las instrucciones van en orden; "la lista de instrucciones".
- S02: paneles Explorer y Properties; botones ▶/■.
- S07: clic en la ventana del juego; W A S D (no se usan hoy, pero se conoce Play).
- No se requiere saber leer código: se explica línea por línea.

## 7. Materiales y herramientas

- Computador con Roblox Studio, conexión e internet, mouse y teclado.
- Proyecto de práctica del curso.
- Ventana **Output (Salida)** habilitada: pestaña **View** → **Output** (activarla antes de empezar).
- Ficha impresa "Anatomía de una línea": `print("Mi mensaje")` con colores: `print` = imprimir · `("…")` = el mensaje.
- La secuencia de papel de la S09 (recordatorio: "el script es esta lista").
- Adulto acompañante presente.

## 8. Conceptos nuevos

| Concepto | Nombre real | Explicación para niños |
|---|---|---|
| Script | objeto **Script** | "La cajita que guarda la lista de instrucciones" |
| Editor de scripts | pestaña **Script** | "Donde se escribe y se lee la lista" |
| Output (Salida) | ventana **Output** | "La pantalla donde el juego te contesta" |
| Imprimir | función **print()** | "Decir algo en la pantalla de salida" |
| Cadena | texto entre **comillas** | "El mensaje, envuelto en comillas" |
| Ejecutar | botón **▶ Play** | "Leer la lista en orden" |

## 9. Desarrollo paso a paso

| Tiempo | Bloque | Acción del facilitador |
|---:|---|---|
| 10 min | Bienvenida | Recordar la secuencia en papel; presentar el script como "esa lista, pero dentro del juego". |
| 15 min | Demostración | Crear el script, ver el mensaje por defecto y escribir uno propio (§10). |
| 20 min | Práctica guiada | El participante crea y renombra su script con acompañamiento (§11). |
| 5 min | Pausa activa | "Teclear en el aire": dedos abiertos/cerrados 10 veces, hombros, mirar lejos 10 s. |
| 20 min | Reto individual | Escribir un print con el nombre de SU juego y verlo en Output (§12). |
| 10 min | Prueba | Verificación del mensaje + Stop (§14). |
| 10 min | Cierre | Explicar con sus palabras qué hace print; entregar la insignia 💻. |

**Regla de ritmo:** el código de esta sesión tiene **1 sola línea**. No se escribe nada más.

## 10. Demostración guiada

Acción por acción, esperando a que el niño la observe:

1. **Abrir Explorer** (pestaña View → Explorer si falta). Buscar **ServerScriptService** (una carpeta).
2. **Crear el script:** pasar el mouse sobre **ServerScriptService** → aparece el botón **+** → clic → elegir **Script**.
   - Se abre la pestaña del script con una línea que ya viene: `print("¡Hola mundo!")`.
   - "El script ya trae una instrucción de regalo".
3. **Renombrar:** clic derecho sobre **Script** (en Explorer) → **Renombrar** → escribir `PrimerScript` → Enter. "Los scripts se nombran para encontrarlos".
4. **Activar Output:** pestaña **View** → **Output** (si no estaba). Dejarla visible abajo.
5. **▶ Play.** Observar: aparece el mensaje en Output. **■ Stop.** "¡El computador escuchó la instrucción!".
6. **Cambiar el mensaje:** volver a la pestaña del script → seleccionar el texto entre comillas → borrar → escribir el nombre del juego del niño, p. ej. `print("Aventura en la selva")` → Play → ver el mensaje nuevo → Stop.
7. **Leer la línea en voz alta** usando la ficha: "print = imprimir; entre comillas = el mensaje".

> Ruta oficial confirmada: *Explorar → pasar el cursor sobre ServerScriptService → botón + → Script* (documentación Roblox, *Crear un script*).

## 11. Actividad práctica

Con acompañamiento:

1. Pestaña **View → Output** (verificar abierta).
2. **ServerScriptService → + → Script.**
3. **Clic derecho → Renombrar →** `PrimerScript`.
4. Leer juntos la línea que trae por defecto.
5. **▶ Play** → mirar Output → **■ Stop**.

## 12. Reto individual

**Reto: "El mensaje de mi juego"** — solo **1 línea** de código:

1. Seleccionar el texto entre comillas de la línea existente.
2. Escribir: `print("AQUÍ EL NOMBRE DE TU JUEGO")` — el nombre inventado en la S01.
   - ⚠️ **Seguridad:** el mensaje es el **nombre del juego**, nunca el nombre propio del niño, la escuela ni datos personales.
3. **▶ Play** → comprobar que el mensaje aparece en Output → **■ Stop**.
4. Probar con una variante: cambiar el mensaje por un emoji o palabra distinta y repetir (solo 1 cambio).

**Variantes:**
- *Más fácil:* el facilitador escribe el mensaje y el niño pulsa Play/Stop.
- *Desafío:* añadir una **segunda línea** `print("...")` y ver dos mensajes en orden (refuerza la secuencia de la S09).

## 13. Ejercicio de exploración

**"Adivina el mensaje":** el facilitador escribe un print sin enseñarlo; el niño ejecuta y adivina qué dice (leer Output). Invertir: el niño escribe, el facilitador adivina. Objetivo: afianzar que **el script dice exactamente lo que está escrito, en orden**.

## 14. Prueba del resultado

1. ▶ **Play** con el script propio → el mensaje del juego aparece en **Output**.
2. **■ Stop.**
3. Preguntas de verificación:
   - "¿Dónde se guarda la lista de instrucciones?" (en el **script**)
   - "¿Dónde ves el mensaje?" (en **Output**)
   - "¿Qué hace print?" (imprime/muestra el mensaje)
4. Confirmar: script renombrado (`PrimerScript`) en ServerScriptService.

**Criterio de éxito:** el mensaje propio aparece en Output y el niño explica print con sus palabras (o señalando la ficha).

## 15. Errores frecuentes y soluciones

| Problema | Solución |
|---|---|
| No aparece Output | Pestaña **View** → **Output**; también puede arrastrarse desde el menú Ventana. |
| El mensaje no aparece al jugar | Verificar que **▶ Play** se pulsó; mirar la parte baja de Output; reintentar una vez. |
| Aparece un texto **rojo** en Output | Hay un error de escritura: revisar **comillas** (`"`) y paréntesis. Ctrl+Z si se rompió algo. |
| Se borró la línea `print(...)` completa | Ctrl+Z; o escribir de nuevo `print("mensaje")` con la ficha de apoyo. |
| Falta una comilla | El editor marca el error: agregar la comilla faltante al final del mensaje. |
| El script está en Workspace en vez de ServerScriptService | Recortar (Ctrl+X) y pegar (Ctrl+V) en ServerScriptService, o crear uno nuevo en el lugar correcto y borrar el otro. |
| Varios scripts imprimiendo mensajes | Dejar solo el `PrimerScript`; borrar extras (Supr). |
| No renombra el script | Clic derecho sobre el nombre en Explorer → Renombrar (no sobre la pestaña). |

## 16. Evidencia de aprendizaje

- Script `PrimerScript` creado en ServerScriptService.
- Mensaje propio visible en la ventana Output durante la prueba.
- Explicación oral: "un script guarda instrucciones; print las muestra en Output".

## 17. Criterios de evaluación

| Criterio | Logrado | En proceso | Requiere apoyo |
|---|---|---|---|
| Crea un Script con el botón + de ServerScriptService | | | |
| Renombra el script | | | |
| Escribe un print con el nombre de su juego | | | |
| Ve el mensaje en Output al ejecutar | | | |
| Explica qué hace print (con ayuda o señalamiento) | | | |

## 18. Preguntas de reflexión

1. "¿Qué le diste a hacer al computador hoy?"
2. "¿Dónde vive la lista de instrucciones y dónde aparece la respuesta?"
3. "¿Qué te gustaría que dijera tu juego cuando alguien lo abra?"

## 19. Actividad opcional de ampliación

- **Dos prints en orden:** `print("Uno")` y `print("Dos")` para ver que se ejecutan de arriba hacia abajo (la secuencia de la S09, ahora en código).
- **Print de bienvenida:** cambiar el mensaje a "Bienvenidos a..." con el tema del juego.
- Explorar **qué pasa si se escribe mal print** (error rojo) y corregirlo con Ctrl+Z.

## 20. Orientaciones para padres o acompañantes

- Esta es la primera sesión de código: acompáñese de la ficha "Anatomía de una línea" y lea la línea junto al niño, palabra por palabra.
- Permita copiar/pegar solo después de explicar qué hace la línea (regla de `AGENT.md`).
- **Seguridad:** no escribir nombres propios, apellidos ni datos personales dentro del print.
- Si aparece un error rojo en Output: no lo esconda; es material de aprendizaje. Buscar juntos la comilla faltante.
- Cierre del Módulo 4 (con la S09): entregar la insignia 💻 *Programador novato*.

- **Seguridad:** el proyecto **no se publica** y el curso **no usa Robux ni compras**; el adulto revisa las evidencias antes de compartirlas (ver `RECURSOS/REQUISITOS_TECNICOS_Y_SEGURIDAD.md`).

---

**Registro de cambios**
- 25/11/2026 (Fase 3): reescritura completa con las 20 secciones. Se conservaron de la versión anterior: título, módulo, duración, misión, propósito ("reconocer un script y ejecutarlo con guía"), materiales, distribución de tiempos, evidencia ("primer script guardado y explicado") y criterio de observación general. Ruta de creación de script y uso de Output verificados contra la documentación oficial (25/11/2026).
