# Sesión 16. Si pasa esto

**Módulo:** Módulo 6 — Retos, reglas y obstáculos
**Duración:** 90 minutos (con pausas y acompañamiento)
**Nivel:** principiante

## 1. Identificación

| Dato | Información |
|---|---|
| Sesión | 16 de 20 |
| Título | Si pasa esto |
| Módulo | Módulo 6 — Retos, reglas y obstáculos |
| Duración | 90 minutos (bloque acompañado, con pausa activa) |
| Tipo de sesión | **Código** (reutiliza el evento de S11/S14 con una condición nueva) |
| Prerrequisitos | S11 evento Touched · S14 acción con propiedades · S15 lava diseñada |
| Conceptos nuevos | **Condición** `if … then … end` — "si pasa esto, entonces pasa aquello" |
| Requisito del proyecto | **P8** (regla sencilla: la lava devuelve al inicio) |
| Insignia en juego | 🛡 **Guardián de reglas** (Módulo 6, primera evidencia) |
| Referencia oficial | *Condicionales* (coding-3) — patrón "si esto sucede, entonces haz aquello" |

## 2. Nombre de la misión

**"Si pasa esto."**

## 3. Historia o contexto motivador

Chip está al borde de la lava: "Diseñaste una regla con los ojos: *no la toques*. Pero un juego de verdad necesita que la regla **se cumpla solo**. Le diré al computador el patrón más famoso de la programación: **si pasa esto, entonces pasa aquello**. Hoy la lava sabrá castigar… con justicia".

## 4. Objetivo de aprendizaje

Comprender y aplicar una condición simple: si el personaje toca la lava, entonces vuelve al punto de inicio.

## 5. Competencias o habilidades que se desarrollan

- **Pensamiento computacional: condición** (si… entonces…).
- Lectura de un bloque de código de 7 líneas con apoyo (reutilizando patrones ya vistos).
- Relación diseño → regla (la lava de la S15 gana su comportamiento).
- Prueba con verificación de resultado esperado.

## 6. Conocimientos previos necesarios

- **S11/S14:** script dentro de la pieza, `Touched:Connect(function() … end)`.
- **S15:** la lava existe, con su señalización.
- **S06:** existe el SpawnLocation (lugar al que se volverá).
- **S07:** el personaje tiene un "cuerpo" que toca las piezas.
- Print y Output (S10) para verificar si hace falta depurar.

## 7. Materiales y herramientas

- Computador con Roblox Studio, conexión e internet, mouse y teclado.
- Proyecto de práctica con la lava de la S15 (renombrar la pieza `Lava`).
- **Plantilla de código** (8 líneas, con colores):
  - `local lava = script.Parent`
  - `lava.Touched:Connect(function(impacto)`
  - `    local personaje = impacto.Parent`
  - `    local humanoide = personaje:FindFirstChild("Humanoid")`
  - `    if humanoide then`
  - `        personaje:MoveTo(workspace.SpawnLocation.Position)`
  - `    end`
  - `end)`
- Ficha de la condición: **SI** (azul) **ENTONCES** (verde) — el patrón "si esto sucede, entonces haz aquello".
- Ventana Output activa.
- Adulto acompañante presente.

## 8. Conceptos nuevos

| Concepto | Nombre real | Explicación para niños |
|---|---|---|
| Condición | bloque **if … then … end** | "**Si** pasa esto, **entonces** haz aquello" |
| Parámetro del evento | `impacto` (lo que tocó) | "La pata o la cabeza que chocó con la lava" |
| Buscar algo dentro de otro | **FindFirstChild("Humanoid")** | "Buscar si lo que chocó es un personaje de verdad" |
| Devolver al inicio | **MoveTo(…SpawnLocation.Position)** | "Transportar al jugador a la alfombra de inicio" |
| Filtro | el `if humanoide` | "Si chocó una roca suelta, no pasa nada; solo si chocó un personaje" |

> **Nota para el facilitador:** el parámetro `impacto` reutiliza el concepto "bloque que se ejecuta cuando pasa el evento" (S11). No se enseñan tipos de datos ni teoría de funciones: se lee como "el objeto que tocó la lava".

## 9. Desarrollo paso a paso

| Tiempo | Bloque | Acción del facilitador |
|---:|---|---|
| 10 min | Bienvenida | Recordar la regla de la S15 ("no la toques") y presentar el patrón SI/ENTONCES con la ficha. |
| 15 min | Demostración | Añadir el script a la lava, escribir la plantilla y probar el castigo (§10). |
| 20 min | Práctica guiada | El participante escribe/pega la condición con acompañamiento (§11). |
| 5 min | Pausa activa | "SI salto ENTONCES aplaudo": el facilitador dice SI/ENTONCES y el niño ejecuta la acción; luego al revés. |
| 20 min | Reto individual | Su lava cumple la regla en Play (§12). |
| 10 min | Prueba | Tocar la lava y comprobar el regreso al inicio (§14). |
| 10 min | Cierre | Explicar la condición con la ficha; avanzar hacia la insignia 🛡. |

## 10. Demostración guiada

1. **Preparar:** renombrar la pieza de lava a `Lava` (clic derecho en Explorer → Renombrar).
2. **Script dentro de la lava:** pasar el mouse sobre `Lava` → **+** → **Script** → renombrar `ScriptLava`.
3. **Escribir la plantilla** de 7 líneas, leyendo con la ficha SI/ENTONCES:
   - `local lava = script.Parent` → "'lava' guarda la casita del script".
   - `lava.Touched:Connect(function(impacto)` → "**Cuando** algo toque la lava, y ese algo me lo da en `impacto`…"
   - `    local personaje = impacto.Parent` → "…miro qué es: su casita es su padre (`Parent`)".
   - `    local humanoide = personaje:FindFirstChild("Humanoid")` → "…busco si tiene un **Humanoid** (la parte que hace que sea un personaje vivo)".
   - `    if humanoide then` → "**SI** es un personaje…"
   - `        personaje:MoveTo(workspace.SpawnLocation.Position)` → "**ENTONCES** lo mando a la posición de la alfombra de inicio".
   - `    end` → "cierra el SI".
   - `end)` → "cierra la reacción".
4. **▶ Play** → caminar hasta la lava → tocarla → **el personaje reaparece en el inicio** → ■ Stop.
5. **Probar el filtro:** lanzar (o dejar caer) una pieza suelta sobre la lava en Edit → Play → nada pasa (solo se castiga a personajes). Si es muy avanzado, solo comentarlo.
6. Reforzar con la ficha: "**SI** toca la lava **ENTONCES** vuelve al inicio".

> Verificado: patrón "si esto sucede, entonces haz aquello" como definición de condicionales en *Condicionales* (coding-3, Roblox Creator Docs, 25/11/2026).

## 11. Actividad práctica

Con acompañamiento:

1. Renombrar la pieza `Lava`; **+ → Script** dentro de ella → renombrar `ScriptLava`.
2. Escribir/pegar la plantilla de 7 líneas con las fichas SI/ENTONCES visibles.
3. **▶ Play** → tocar la lava → observar el regreso al inicio → **■ Stop**.
4. Repetir una vez para consolidar (la lava es un bucle de prueba: tocar → volver → intentar de nuevo).

## 12. Reto individual

**Reto: "La regla se cumple sola"** — la lava de su Obby castiga con justicia:

1. El script completo funcionando en **su** lava.
2. **Verificación doble:**
   - Tocar la lava **con el personaje** → vuelve al inicio.
   - Ver que el circuito **sigue siendo posible** (la regla no rompió los saltos de S08).
3. **Personalización opcional:** cambiar el lugar de regreso no es posible hoy (siempre es el SpawnLocation); sí puede cambiar la señalización de la S15 si algo quedó poco claro.

**Variantes:**
- *Más fácil:* pegar la plantilla y probar; el facilitador explica cada línea mientras se escribe.
- *Desafío:* explicar con sus palabras qué hace cada una de las 7 líneas (evidencia oral).

**Límite:** 1 regla. La **repetición** es la sesión 17.

## 13. Ejercicio de exploración

**"SI / ENTONCES de la vida real":** el facilitador da la primera parte y el niño completa la segunda:
- "SI me pongo el abrigo…" → "ENTONCES no paso frío".
- "SI toco la lava…" → "ENTONCES vuelvo al inicio".
- "SI la moneda está en el suelo…" → "ENTONCES el jugador la recoge".
- "SI la estrella está muy lejos…" → "ENTONCES el jugador no llega".

Después el niño inventa 2 pares SI/ENTONCES de su propio juego. Objetivo: dominar el **patrón** antes de la sintaxis.

## 14. Prueba del resultado

1. ▶ **Play:** caminar hasta la lava → tocarla → **regresa al SpawnLocation**.
2. Repetir una vez (confirmar que la regla es constante, no una vez).
3. **■ Stop** → revisar Output: sin errores rojos.
4. Preguntas de verificación:
   - "¿Cuál es el SI?" (que el personaje toque la lava)
   - "¿Cuál es el ENTONCES?" (volver al inicio)
   - "¿Qué pasa si algo que no es personaje la toca?" (nada — el filtro)
5. Confirmar: script dentro de `Lava`, nombres correctos, lava anclada.

**Criterio de éxito:** la regla funciona de forma consistente y el niño identifica el SI y el ENTONCES de su código.

## 15. Errores frecuentes y soluciones

| Problema | Solución |
|---|---|
| Nada pasa al tocar la lava | Verificar que el script está **dentro** de `Lava` y que el bloque está completo (el `if` termina en `end` y la reacción en `end)`). |
| Error rojo en Output | Comparar carácter a carácter con la plantilla: mayúsculas en `Touched`, `FindFirstChild`, `Humanoid`, `MoveTo`; comillas en `"Humanoid"`; `then` al final de la línea SI. |
| "attempt to index nil" | La línea de `SpawnLocation` falla: verificar que existe un **SpawnLocation** en Workspace (S06); si se borró, insertarlo (Home → flechita de Part → SpawnLocation). |
| El jugador se queda quieto al tocar | Falta la línea `MoveTo`; o el `if` está vacío (revisar que la línea de acción está entre `if` y `end`). |
| Vuelve al inicio aunque toque la lava con una rota | Correcto por ahora si la rota es parte del personaje; el filtro es para objetos sueltos. Simplificar: solo probar con el personaje. |
| Sangría (espacios) perdida | No impide funcionar hoy; si hay error, rehacer con la plantilla. |
| Muchos scripts en la lava | Dejar solo `ScriptLava`. |

## 16. Evidencia de aprendizaje

- Regla funcionando: tocar la lava → regreso al inicio (demostración en Play, repetida).
- Explicación del par SI/ENTONCES del propio código (oral, con la ficha).
- Script `ScriptLava` sin errores en Output.

## 17. Criterios de evaluación

| Criterio | Logrado | En proceso | Requiere apoyo |
|---|---|---|---|
| Crea el script dentro de la lava | | | |
| Completa la plantilla de 7 líneas | | | |
| Observa el regreso al inicio en Play | | | |
| Identifica el SI y el ENTONCES | | | |
| Verifica que el circuito sigue jugable | | | |

## 18. Preguntas de reflexión

1. "¿Cuál es el SI y cuál es el ENTONCES en tu código?"
2. "¿Por qué la lava solo castiga a personajes y no a las piezas sueltas?"
3. "¿Qué otras reglas SI/ENTONCES tendría tu juego si pudieras añadirlas?"

## 19. Actividad opcional de ampliación

- **Segunda regla:** duplicar el script en otra pieza de peligro (p. ej. un charco) con la misma plantilla.
- **Regla amable:** en un objeto de la ruta, SI se toca ENTONCES cambiar de color (un "aviso" en vez de castigo) — reutiliza la plantilla de la S11 dentro del patrón SI.
- Dibujar en el mapa de interacciones: 🔥 **TOCA LAVA → VUELVE AL INICIO**.

## 20. Orientaciones para padres o acompañantes

- Esta es la sesión técnicamente más densa: dedique tiempo a **leer cada línea en voz alta** con las fichas; la comprensión es del patrón SI/ENTONCES, no de la sintaxis.
- Si hay error rojo en Output, use la técnica de comparar con la plantilla; no intente "mejorar" el código.
- Recuerde al niño que la regla debe sentirse **justa** (la lava está señalizada desde la S15).
- Este es el **P8** (regla sencilla) del proyecto final: guardar el proyecto sin publicarlo; el curso **no usa Robux ni compras** (ver `RECURSOS/REQUISITOS_TECNICOS_Y_SEGURIDAD.md`).

---

**Registro de cambios**
- 25/11/2026 (Fase 3): reescritura completa con las 20 secciones. Se conservaron de la versión anterior: título, módulo, duración, misión, propósito ("comprender una condición simple"), materiales, distribución de tiempos, evidencia y criterio de observación general. El producto se precisó a regla **funcionando** en Studio (coherente con el hallazgo H-07). Plantilla contrastada con el patrón oficial de condicionales (25/11/2026).
