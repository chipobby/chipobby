# Sesión 17. Repetimos y mejoramos

**Módulo:** Módulo 6 — Retos, reglas y obstáculos
**Duración:** 90 minutos (con pausas y acompañamiento)
**Nivel:** principiante

## 1. Identificación

| Dato | Información |
|---|---|
| Sesión | 17 de 20 |
| Título | Repetimos y mejoramos |
| Módulo | Módulo 6 — Retos, reglas y obstáculos |
| Duración | 90 minutos (bloque acompañado, con pausa activa) |
| Tipo de sesión | **Código** (repetición) + revisión del patrón repetido en su juego |
| Prerrequisitos | S16 condición `if` · S13 estrella con Neon · S09 secuencia/orden |
| Conceptos nuevos | **Repetición** (`while true do` + `task.wait`) — ahorrar instrucciones |
| Requisito del proyecto | **P8** (efecto repetido) + consolidación del Módulo 6 |
| Insignia en juego | 🛡 **Guardián de reglas** (segunda evidencia, entrega al cerrar) |
| Referencia oficial | *Bucles* (coding-4) — `while` para repetir código |

## 2. Nombre de la misión

**"Repetimos y mejoramos."**

## 3. Historia o contexto motivador

Chip parpadea como una luz: "Mira esto: parpadeo, parpadeo, parpadeo… ¿y si te dijera que en el código puedo hacer que **una sola instrucción** se repita para siempre, sin escribirla mil veces? Los programadores usan trucos para **ahorrar trabajo**: el truco de hoy es la **repetición**. Tu estrella va a brillar sola, para siempre".

## 4. Objetivo de aprendizaje

Reconocer la repetición como forma de ahorrar instrucciones y aplicarla: hacer que un objeto cambie de forma continua con un bucle.

## 5. Competencias o habilidades que se desarrollan

- **Pensamiento computacional: repetición/patrón** (detectar lo que se repite y automatizarlo).
- Reutilización del patrón script-dentro-de-la-pieza (S11/S14/S16).
- Lectura de un bloque corto con dos líneas nuevas (`while` y `task.wait`).
- Criterio de eficiencia: "¿cuántas veces escribí lo mismo?".

## 6. Conocimientos previos necesarios

- S09: secuencias y patrones repetidos en papel (la base conceptual).
- S11/S14: script dentro de la pieza + cambiar `Color` con código.
- S13: la estrella existe con Material Neon.
- S16: plantilla de 7 líneas (hoy se usa una más corta; comparar tamaños motiva la repetición).

## 7. Materiales y herramientas

- Computador con Roblox Studio, conexión e internet, mouse y teclado.
- Proyecto de práctica con la estrella/moneda (renombrar `Estrella` si aplica) o una pieza-luz nueva (`Faro`).
- **Plantilla de código** (7 líneas, con colores):
  - `local estrella = script.Parent`
  - `while true do`
  - `    estrella.Color = Color3.fromRGB(255, 255, 0)`
  - `    task.wait(1)`
  - `    estrella.Color = Color3.fromRGB(0, 170, 255)`
  - `    task.wait(1)`
  - `end`
- Ficha de la repetición: **"REPITE para siempre"** + **"ESPERA 1 segundo"**.
- Ventana Output activa.
- Adulto acompañante presente.

## 8. Conceptos nuevos

| Concepto | Nombre real | Explicación para niños |
|---|---|---|
| Bucle / repetición | **while true do … end** | "Un carrusel: gira y gira sin parar" |
| Para siempre | `true` dentro del `while` | "La condición nunca se apaga" |
| Esperar | **task.wait(1)** | "El juego respira: espera 1 segundo" |
| Ahorrar instrucciones | — | "2 colores escritos 1 vez, en vez de escribir 'parpadea' 1000 veces" |

> **Nota para el facilitador:** se usa `while true do` con `task.wait(1)` (API vigente de Luau). Si se omite el `task.wait`, el juego puede bloquearse: es un excelente —y real— ejemplo de por qué la repetición necesita una espera.

## 9. Desarrollo paso a paso

| Tiempo | Bloque | Acción del facilitador |
|---:|---|---|
| 10 min | Bienvenida | Juego de patrones: "encuentra lo que se repite" con ejemplos del propio escenario (saltos, luces). |
| 15 min | Demostración | Escribir el bucle en la estrella y ver el parpadeo (§10). |
| 20 min | Práctica guiada | El participante arma el bucle con acompañamiento (§11). |
| 5 min | Pausa activa | "Carrusel": girar en el sitio 3 veces, parar (Stop) y volver a girar; estirar; descanso visual. |
| 20 min | Reto individual | Su efecto repetido funcionando (§12). |
| 10 min | Prueba | Observar ≥ 3 repeticiones en Play + cierre del Módulo 6 (§14). |
| 10 min | Cierre | Explicar la repetición; entregar la insignia 🛡. |

## 10. Demostración guiada

1. **Preparar:** renombrar la pieza (estrella o faro) a `Estrella`.
2. **Script dentro de la pieza:** `+` sobre `Estrella` → **Script** → renombrar `ScriptEstrella`.
3. **Escribir la plantilla** de 7 líneas, leyendo con las fichas:
   - `local estrella = script.Parent` → "'estrella' guarda la casita".
   - `while true do` → "**REPITE para siempre** lo que esté adentro…"
   - `    estrella.Color = Color3.fromRGB(255, 255, 0)` → "…ponla **amarilla**…"
   - `    task.wait(1)` → "…**espera 1 segundo**…"
   - `    estrella.Color = Color3.fromRGB(0, 170, 255)` → "…ponla **azul**…"
   - `    task.wait(1)` → "…**espera 1 segundo**…"
   - `end` → "…y vuelve a empezar. Carrusel".
4. **▶ Play** → observar el parpadeo amarillo-azul → **■ Stop**.
5. **Comparar esfuerzo:** "Si no existiera la repetición, tendríamos que escribir 'amarilla… azul…' miles de veces. Con `while`, lo escribimos **una vez**".
6. (Opcional, con cuidado) Quitar un `task.wait` temporalmente → el juego puede congelarse → Stop y **Ctrl+Z**. "Por eso la espera es parte de la repetición".

> Verificado: `while` como bucle para repetir código en *Bucles* (coding-4, Roblox Creator Docs, 25/11/2026).

## 11. Actividad práctica

Con acompañamiento:

1. Renombrar la pieza `Estrella`; **+ → Script** dentro → renombrar `ScriptEstrella`.
2. Escribir/pegar la plantilla con las fichas visibles.
3. **▶ Play** → ver el parpadeo (esperar al menos 3 ciclos) → **■ Stop**.
4. Cambiar un color en la plantilla (p. ej. rojo en vez de azul) y probar otra vez.

## 12. Reto individual

**Reto: "Mi efecto para siempre"** — un objeto de su juego con repetición:

1. Elegir el objeto: la estrella (brilla llamando al jugador) o un faro/luz de la ruta.
2. El bucle funcionando: al menos **2 colores alternándose**.
3. **Personalización:** elegir los 2 colores de su tema (S05) y la velocidad: `task.wait(0.5)` = más rápido, `task.wait(2)` = más lento (probar 1 opción).
4. Verificar en Play que el resto del juego **sigue funcionando** (los saltos, la lava…): la repetición no rompió nada.

**Variantes:**
- *Más fácil:* pegar la plantilla tal cual (amarillo/azul) y probar.
- *Desafío:* 2 piezas con su propio bucle (Ctrl+D de pieza **y** script) o combinar con el Neon de la S13.

**Límite:** 1 pieza con bucle (máx. 2). El cierre del módulo es la insignia 🛡.

## 13. Ejercicio de exploración

**"Cuenta las repeticiones":** en Play, el facilitador cronometra 10 segundos y el niño cuenta cuántos parpadeos ocurren (con `task.wait(1)`, ~10; con `0.5`, ~20). Después adivina: "si pongo 2 segundos, ¿cuántos cabrán en 10?". Objetivo: entender que la **velocidad de la repetición** la controla la espera — una intuición de tiempo y ritmo en el juego.

## 14. Prueba del resultado

1. ▶ **Play:** observar el efecto repetido **≥ 3 ciclos**.
2. Jugar un tramo de la ruta mientras el efecto sigue (verificar que nada se rompió).
3. **■ Stop** → Output sin errores rojos.
4. Preguntas de verificación:
   - "¿Qué se repite?" (el cambio de color)
   - "¿Cuántas veces lo escribiste?" (una)
   - "¿Qué hace `task.wait(1)`?" (espera 1 segundo)
5. Confirmar: script dentro de la pieza, nombres correctos.

**Criterio de éxito:** el efecto se repite en Play, el juego sigue jugable y el niño explica que "se repite solo, sin escribirlo muchas veces".

## 15. Errores frecuentes y soluciones

| Problema | Solución |
|---|---|
| No se repite (cambia una vez y para) | Falta el `while true do` o está mal cerrado con `end`; comparar con la plantilla. |
| El juego se congela | Falta un `task.wait` o está fuera del bucle: **Stop** → revisar que hay **2** líneas `task.wait(1)` dentro del bucle → Ctrl+Z si se rompió. |
| Error rojo en Output | Mayúsculas: `while`, `true`, `do`, `task`, `wait`; comillas/paréntesis en `Color3.fromRGB(255, 255, 0)`. |
| Cambia de color "demasiado rápido/lento" | Ajustar el número de `task.wait(0.5)` / `task.wait(2)` y probar. |
| La pieza no se ve parpadear | Estar en **Play** y mirar de lejos; verificar Material Neon y color claro (S13). |
| Varios bucles a la vez y "todo parpadea" | Dejar solo el de la pieza elegida; borrar extras (Supr) o quitar sus scripts. |
| Se puso un color que "no combina" | Cambiar los `fromRGB` por los colores del tema y probar de nuevo. |

## 16. Evidencia de aprendizaje

- Efecto repetido funcionando en Play (≥ 3 ciclos observados).
- Explicación: "se repite solo; con una instrucción ahorré miles".
- Comparación de tamaño: la repetición vs. escribir todo muchas veces.
- Insignia 🛡 **Guardián de reglas** entregada (S15 + S16 + S17).

## 17. Criterios de evaluación

| Criterio | Logrado | En proceso | Requiere apoyo |
|---|---|---|---|
| Crea el script dentro de la pieza | | | |
| Completa el bucle con sus 2 esperas | | | |
| Observa la repetición en Play | | | |
| Ajusta colores o velocidad y prueba | | | |
| Explica que la repetición ahorra instrucciones | | | |

## 18. Preguntas de reflexión

1. "¿Cuántas veces escribiste el cambio de color? ¿Y cuántas veces se ejecutó?"
2. "¿Qué pasaría si olvidáramos la espera?"
3. "¿Qué otra cosa de tu juego debería repetirse para siempre (luces, movimientos, sorpresas)?"

## 19. Actividad opcional de ampliación

- **Repetir con límite (vista previa):** comentar que a veces se repite "solo 3 veces" (se verá en cursos posteriores; no se programa hoy).
- **Dos efectos:** una pieza parpadea y otra cambia lento → discutir cuál llama más la atención.
- Actualizar el mapa de interacciones: ⭐ **PARPADEA PARA SIEMPRE**.

## 20. Orientaciones para padres o acompañantes

- El concepto de "para siempre" puede asustar: tranquilice al niño diciendo que **Stop** siempre corta la repetición.
- Si el juego se congela, no hay pánico: **Stop** (o esperar) y revisar los `task.wait`; es un error real y predecible, ideal para practicar depuración.
- Cierre del Módulo 6: entregar la insignia 🛡 *Guardián de reglas* con las evidencias de las sesiones 15–17.
- Los 9 requisitos del proyecto están casi todos listos: la sesión 18 los consolida en un plano.

- **Seguridad:** el proyecto **no se publica** y el curso **no usa Robux ni compras**; el adulto revisa las evidencias antes de compartirlas (ver `RECURSOS/REQUISITOS_TECNICOS_Y_SEGURIDAD.md`).

---

**Registro de cambios**
- 25/11/2026 (Fase 3): reescritura completa con las 20 secciones. Se conservaron de la versión anterior: título, módulo, duración, misión, propósito ("reconocer la repetición como forma de ahorrar instrucciones"), materiales, distribución de tiempos, evidencia y criterio de observación general. El producto se precisó a efecto **funcionando** en Studio (coherente con el hallazgo H-07). Uso de `while true do` + `task.wait(1)` alineado con *Bucles* (coding-4).
