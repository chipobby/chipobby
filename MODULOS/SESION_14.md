# Sesión 14. La moneda desaparece

**Módulo:** Módulo 5 — Objetos mágicos e interacciones
**Duración:** 90 minutos (con pausas y acompañamiento)
**Nivel:** principiante

## 1. Identificación

| Dato | Información |
|---|---|
| Sesión | 14 de 20 |
| Título | La moneda desaparece |
| Módulo | Módulo 5 — Objetos mágicos e interacciones |
| Duración | 90 minutos (bloque acompañado, con pausa activa) |
| Tipo de sesión | **Código** (reutiliza el evento de la S11 con una nueva acción) |
| Prerrequisitos | S11 evento Touched + :Connect · S13 estrella/moneda colocada · S07 CanCollide |
| Conceptos nuevos | **Transparency** con código · reutilizar el evento para una **recogida** |
| Requisito del proyecto | **P8** (interacción de recogida funcionando) |
| Insignia en juego | ⭐ **Cazador de estrellas** (evidencia de código) |
| Referencia oficial | *Funciones y eventos* (coding-2) — verificado 25/11/2026 |

## 2. Nombre de la misión

**"La moneda desaparece."**

## 3. Historia o contexto motivador

Chip salta alrededor de la estrella: "¿Ya está lista para ser **recogida**? Los jugadores necesitan que al tocar su tesoro… **desaparezca** — como en los juegos de verdad: '¡toma! ya es mía'. Hoy le darás esa vida a tu estrella con el mismo truco mágico de la sesión 11: evento → acción".

## 4. Objetivo de aprendizaje

Probar una interacción de recogida: programar que el coleccionable desaparezca cuando el personaje lo toca.

## 5. Competencias o habilidades que se desarrollan

- Reutilización creativa de un patrón aprendido (evento → acción) en un contexto nuevo.
- Lectura y modificación de un fragmento conocido (cambiar la acción, no el evento).
- Relación con la mecánica de juego: obtener = recoger.
- Verificación del resultado esperado en Play.

## 6. Conocimientos previos necesarios

- **S11:** crear script dentro de la pieza y la plantilla de 4 líneas (`Touched:Connect`).
- **S13:** estrella/moneda colocada, anclada y alcanzable.
- **S07:** CanCollide (hoy se usará en `false` para no bloquear).
- Play/Stop y Output (S10).

## 7. Materiales y herramientas

- Computador con Roblox Studio, conexión e internet, mouse y teclado.
- Proyecto de práctica con la estrella/moneda de la S13 (renombrarla `Moneda` si no lo está).
- **Plantilla de código** (4 líneas, con colores):
  - `local moneda = script.Parent`
  - `moneda.Touched:Connect(function()`
  - `    moneda.Transparency = 1`
  - `    moneda.CanCollide = false`
  - `end)`
- Ficha **Transparency**: `0` = se ve · `1` = invisible.
- Ventana Output activa.
- Adulto acompañante presente.

## 8. Conceptos nuevos

| Concepto | Nombre real | Explicación para niños |
|---|---|---|
| Transparencia | propiedad **Transparency** (0–1) | "`0` se ve, `1` desaparece (invisible)" |
| Recoger | evento **Touched** + acción Transparency | "Al tocarla, se la lleva el jugador" |
| No bloquear | **CanCollide = false** | "Ya no estorba: se puede atravesar" |
| Reutilización | el mismo patrón de la S11 | "Mismo truco, nueva acción" |

## 9. Desarrollo paso a paso

| Tiempo | Bloque | Acción del facilitador |
|---:|---|---|
| 10 min | Bienvenida | Repasar la estrella (S13) y el evento de la S11; presentar la mecánica "recoger". |
| 15 min | Demostración | Copiar el patrón de la S11 a la moneda y cambiar la acción (§10). |
| 20 min | Práctica guiada | El participante adapta su script con acompañamiento (§11). |
| 5 min | Pausa activa | "Recolectores": agacharse, estirar, saltar y "guardar" en el bolsillo imaginario; descanso visual. |
| 20 min | Reto individual | Su moneda recogible funcionando (§12). |
| 10 min | Prueba | Recoger en Play y verificar (§14). |
| 10 min | Cierre | Explicar la mecánica con sus palabras; reforzar P8; insignia ⭐. |

## 10. Demostración guiada

1. **Preparar la pieza:** seleccionar la estrella/moneda de la S13 → renombrar a `Moneda` (clic derecho en Explorer → Renombrar). "Los nombres ayudan a que el código se entienda".
2. **Añadir el script:** pasar el mouse sobre `Moneda` en Explorer → **+** → **Script** → renombrar `ScriptMoneda`.
3. **Escribir la plantilla** (reemplazar el contenido), línea por línea con la ficha:
   - `local moneda = script.Parent` → "'moneda' guarda la casita: la moneda donde vive el script".
   - `moneda.Touched:Connect(function()` → "**Cuando** alguien la toque…"
   - `    moneda.Transparency = 1` → "…se vuelve **invisible**".
   - `    moneda.CanCollide = false` → "…y deja de estorbar: se atraviesa".
   - `end)` → "cierra la reacción".
4. **▶ Play** → caminar hasta la moneda → **¡desaparece!** → ■ Stop.
5. Comparar con la S11: "El **cuándo** (Touched) es igual; cambió el **qué hace** (la acción)".
6. Poner la moneda de nuevo visible para probar otra vez: en Properties, `Transparency = 0` y Play otra vez (el script la oculta al tocar).

> Verificado: patrón `Touched:Connect` para recogidas/objetos interactivos en *Funciones y eventos* (Roblox Creator Docs, 25/11/2026).

## 11. Actividad práctica

Con acompañamiento:

1. Renombrar la pieza `Moneda`.
2. **+ sobre la pieza → Script** → renombrar `ScriptMoneda`.
3. Escribir/pegar la plantilla de 5 líneas con la ficha visible.
4. ▶ Play → tocar la moneda → desaparece → ■ Stop.
5. Resetear (`Transparency = 0` en Properties) y probar otra vez.

## 12. Reto individual

**Reto: "Mi tesoro recogible"** — hacer que su coleccionable se pueda recoger:

1. El script funcionando en **su** estrella/moneda del proyecto.
2. **Personalización opcional:** cambiar `1` por `0.5` para probar una "moneda fantasma" (medio visible) y volver a `1`.
3. Verificar en Play que **desaparece al tocarla** y que el jugador **puede seguir** (no se atora: CanCollide = false).
4. Ubicación final: donde la puso en la S13 (¿se ve desde el inicio?).

**Variantes:**
- *Más fácil:* pegar la plantilla tal cual; el facilitador escribe las líneas.
- *Desafío:* **2 monedas** con su propio script cada una (Ctrl+D de pieza **y** script en Explorer).

**Límite:** 1 moneda (máx. 2). Las reglas con "si… entonces" son la sesión 16.

## 13. Ejercicio de exploración

**"¿Qué propiedad cambia?":** el facilitador describe 4 finales ("se pone roja", "desaparece", "ya no estorba", "aparece una palabra") y el niño decide cuál usa la acción de hoy (desaparece + deja de estorbar). Consolida distinguir **evento** (cuándo) de **acción** (qué).

## 14. Prueba del resultado

1. ▶ **Play:** recorrer hasta la moneda → **la toca → desaparece**.
2. Caminar por el sitio donde estaba → **no se atora** (CanCollide funciona).
3. **■ Stop** → en Properties: `Transparency = 1` quedó aplicado (resetear a `0` para la siguiente prueba si se desea).
4. Preguntas de verificación:
   - "¿Qué hace el jugador para recogerla?" (tocarla)
   - "¿Qué le dice el código que pase entonces?" (invisible + no estorba)
5. Confirmar: sin errores rojos en Output.

**Criterio de éxito:** la moneda desaparece al tocarla en Play, no bloquea al jugador y el niño explica la mecánica.

## 15. Errores frecuentes y soluciones

| Problema | Solución |
|---|---|
| No desaparece | Verificar que el script está **dentro** de `Moneda` y que las líneas 3–4 están dentro del bloque (antes de `end)`). |
| Error rojo en Output | Comparar con la plantilla: comillas, mayúsculas (`Touched`, `Transparency`, `CanCollide`) y punto exacto. |
| `false` mal escrito | En inglés y minúsculas: `false` (no `False` ni `falso`). |
| Desaparece pero el jugador se atora | Falta la línea `moneda.CanCollide = false`. |
| Ya no la ve para probar de nuevo | Properties → `Transparency = 0` (y Play otra vez). |
| La moneda no se toca (queda lejos) | Moverla con Move a una posición alcanzable (criterio S08/S13). |
| Cambió el script de la pieza equivocada | Revisar nombres en Explorer (`ScriptMoneda` debe vivir en `Moneda`). |
| Varios scripts reaccionando a la vez | Dejar solo el de la moneda (Supr en extras). |

## 16. Evidencia de aprendizaje

- Recogida probada: la moneda/estrella desaparece al tocarla en Play y no bloquea.
- Script `ScriptMoneda` dentro de `Moneda`, sin errores.
- Explicación: "cuando la toco, se pone invisible y deja de estorbar" (evento → acción).
- Insignia ⭐ reforzada con evidencia de código.

## 17. Criterios de evaluación

| Criterio | Logrado | En proceso | Requiere apoyo |
|---|---|---|---|
| Crea o reutiliza el script dentro de la moneda | | | |
| Escribe la plantilla de 5 líneas | | | |
| Observa la recogida en Play | | | |
| Verifica que el jugador no se atora | | | |
| Explica qué hace cada línea (con apoyo) | | | |

## 18. Preguntas de reflexión

1. "¿En qué se parece este código al de la sesión 11? ¿En qué se diferencia?"
2. "¿Por qué la moneda debe dejar de estorbar además de hacerse invisible?"
3. "¿Qué otras cosas de tu juego querrías que se pudieran recoger?"

## 19. Actividad opcional de ampliación

- **Efecto de "medio fantasma":** probar `Transparency = 0.5` y comentar qué se ve.
- **Reinicio para probar:** resetear `Transparency = 0` a mano y crear una mini "rutina de prueba" (probar → resetear → probar).
- Dibujar en el mapa de interacciones: ✨ **TOCA → DESAPARECE** (apila con el de la S11).

## 20. Orientaciones para padres o acompañantes

- Esta sesión **consolida** el patrón evento→acción: pida que compare con la S11 ("¿qué cambió?") en vez de re-explicar desde cero.
- El `false` en inglés suele ser el punto de error: compare carácter a carácter con la plantilla.
- Si el niño solo pega el código, asegúrese de que **lea en voz alta** las 5 líneas antes de Play (regla de `AGENT.md`).
- Este es el **P8** (interacción de recogida) del proyecto final: guardar el proyecto sin publicarlo; el curso **no usa Robux ni compras** (ver `RECURSOS/REQUISITOS_TECNICOS_Y_SEGURIDAD.md`).

---

**Registro de cambios**
- 25/11/2026 (Fase 3): reescritura completa con las 20 secciones. Se conservaron de la versión anterior: título, módulo, duración, misión, propósito ("probar una interacción de recogida"), materiales, distribución de tiempos, evidencia y criterio de observación general. El producto se precisó a "recogida que desaparece probada con código" (cambio C-2 del mapa curricular). Plantilla de código contrastada con *Funciones y eventos* (25/11/2026).
