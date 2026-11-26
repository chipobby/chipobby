# Verificación técnica de los scripts del curso

**Fase:** Fase 4 — Desarrollo técnico
**Fecha de verificación:** 25 de noviembre de 2026
**Método:** contraste de cada API y patrón con la documentación oficial de Roblox Creator Docs (secciones citadas al final)

---

## Tabla de contenidos

1. [Resumen de verificación](#1-resumen-de-verificación)
2. [Scripts del curso](#2-scripts-del-curs)
3. [Detalle línea por línea](#3-detalle-línea-por-línea)
4. [Pruebas de funcionamiento](#4-pruebas-de-funcionamiento)
5. [Errores frecuentes consolidados](#5-errores-frecuentes-consolidados)
6. [Notas y decisiones técnicas](#6-notas-y-decisiones-técnicas)
7. [Lista de verificación para probar en Roblox Studio](#7-lista-de-verificación-para-probar-en-roblox-studio)
8. [Fuentes oficiales consultadas](#8-fuentes-oficiales-consultadas)

---

## 1. Resumen de verificación

| Elemento usado | Sesiones | Estado | Fuente oficial |
|---|---|---|---|
| Ruta de creación de script (Explorer → + → Script en ServerScriptService o dentro de una Part) | 10–17 | ✅ | *Crear un script* (coding-1) |
| Ventana Output (View → Output) | 10–17 | ✅ | *Crear un script* (coding-1) |
| `print("texto")` y cadenas entre comillas | 10 | ✅ | *Crear un script* (coding-1) |
| Propiedades `Anchored`, `CanCollide`, `Color`, `Material`, `Transparency` | 4–17 | ✅ | Referencia `BasePart` |
| Evento `Touched` + `:Connect(function() … end)` | 11, 14, 16 | ✅ | Referencia `BasePart` (muestra oficial `part.Touched:Connect(onTouch)`) |
| `script.Parent` como referencia a la pieza contenedora | 11–17 | ✅ | Patrón oficial `local part = script.Parent` |
| `Color3.fromRGB(r, g, b)` | 11, 17 | ✅ | Referencia `Color3` (muestra oficial en `BasePart`) |
| `FindFirstChild("Humanoid")` | 16 | ✅ (ver nota 6.1) | Patrón oficial `FindFirstChildOfClass("Humanoid")` |
| Condición `if … then … end` | 16 | ✅ | *Condicionales* (coding-3) |
| `Model:MoveTo(Vector3)` | 16 | ✅ | Referencia `Model` (método vigente) |
| `workspace.SpawnLocation.Position` | 16 | ✅ | Objeto `SpawnLocation` presente en Workspace desde la S06 |
| Bucle `while true do … end` + `task.wait(1)` | 17 | ✅ | *Bucles* (coding-4) + muestra oficial con `task.wait` |
| Renombrar piezas/scripts (clic derecho → Renombrar) | 10–17 | ✅ | Práctica estándar documentada |

**Resultado: 0 correcciones necesarias en las sesiones 10–17.** Los 5 fragmentos de código usan únicamente APIs y patrones presentes en la documentación vigente.

## 2. Scripts del curso

### Script 1 — Sesión 10: mensaje en Output

| Dato | Valor |
|---|---|
| Nombre | `PrimerScript` |
| Ubicación | **ServerScriptService** (Explorer → pasar el mouse → botón **+** → Script) |
| Código | `print("Aventura en la selva")` *(el nombre lo elige el niño)* |
| Líneas | 1 |
| Objetivo | Ver un mensaje propio en la ventana Output |

### Script 2 — Sesión 11: el botón mágico

| Dato | Valor |
|---|---|
| Nombre | `ScriptBoton` dentro de la pieza `BotonMagico` |
| Ubicación | **Dentro de la Part** (Explorer → pasar el mouse sobre la Part → **+** → Script) |
| Código | ver §3.2 |
| Líneas | 4 |
| Objetivo | Cambiar de color al tocar la pieza (evento `Touched`) |

### Script 3 — Sesión 14: la moneda desaparece

| Dato | Valor |
|---|---|
| Nombre | `ScriptMoneda` dentro de la pieza `Moneda` |
| Ubicación | **Dentro de la Part** (mismo procedimiento que la S11) |
| Código | ver §3.3 |
| Líneas | 5 |
| Objetivo | Recogida: invisible + no bloquea al tocarla |

### Script 4 — Sesión 16: la regla de la lava

| Dato | Valor |
|---|---|
| Nombre | `ScriptLava` dentro de la pieza `Lava` |
| Ubicación | **Dentro de la Part** |
| Código | ver §3.4 |
| Líneas | 7 |
| Objetivo | Condición: si toca la lava, entonces vuelve al inicio |

### Script 5 — Sesión 17: la estrella que parpadea

| Dato | Valor |
|---|---|
| Nombre | `ScriptEstrella` dentro de la pieza `Estrella` |
| Ubicación | **Dentro de la Part** |
| Código | ver §3.5 |
| Líneas | 7 |
| Objetivo | Repetición: cambio de color para siempre |

## 3. Detalle línea por línea

### 3.1 Sesión 10

```luau
print("Aventura en la selva")
```

| Línea | Qué hace |
|---|---|
| `print(...)` | Función que muestra el texto en la ventana Output. |
| `"Aventura en la selva"` | Cadena: el mensaje, siempre entre comillas. |

### 3.2 Sesión 11

```luau
local pieza = script.Parent
pieza.Touched:Connect(function()
    pieza.Color = Color3.fromRGB(255, 0, 0)
end)
```

| Línea | Qué hace | Verificado en |
|---|---|---|
| `local pieza = script.Parent` | Crea la etiqueta `pieza` con la Part que contiene el script. | Patrón oficial `local part = script.Parent` |
| `pieza.Touched:Connect(function()` | Conecta el evento "cuando algo la toca" con el bloque de reacción. | Referencia `BasePart.Touched` + muestra `part.Touched:Connect(...)` |
| `pieza.Color = Color3.fromRGB(255, 0, 0)` | Pinta la pieza de rojo puro (R=255, G=0, B=0). | Propiedad `BasePart.Color` (tipo `Color3`) |
| `end)` | Cierra el bloque de la reacción. | — |

### 3.3 Sesión 14

```luau
local moneda = script.Parent
moneda.Touched:Connect(function()
    moneda.Transparency = 1
    moneda.CanCollide = false
end)
```

| Línea | Qué hace | Verificado en |
|---|---|---|
| `local moneda = script.Parent` | Etiqueta hacia la moneda que contiene el script. | Patrón oficial |
| `moneda.Touched:Connect(function()` | Evento: al tocarla. | Referencia `BasePart.Touched` |
| `moneda.Transparency = 1` | `0` = visible, `1` = invisible. | Propiedad `BasePart.Transparency` (number) |
| `moneda.CanCollide = false` | Deja de ser sólida: el jugador la atraviesa. | Propiedad `BasePart.CanCollide` (boolean); muestra oficial usa `part.CanCollide = false` |
| `end)` | Cierra la reacción. | — |

### 3.4 Sesión 16

```luau
local lava = script.Parent
lava.Touched:Connect(function(impacto)
    local personaje = impacto.Parent
    local humanoide = personaje:FindFirstChild("Humanoid")
    if humanoide then
        personaje:MoveTo(workspace.SpawnLocation.Position)
    end
end)
```

| Línea | Qué hace | Verificado en |
|---|---|---|
| `local lava = script.Parent` | Etiqueta hacia la lava. | Patrón oficial |
| `lava.Touched:Connect(function(impacto)` | Evento que entrega en `impacto` la parte que tocó (`otherPart`). | `BasePart.Touched(otherPart: BasePart)` |
| `local personaje = impacto.Parent` | Sube un nivel: de la pata a su modelo (el personaje). | Jerarquía de instancias |
| `local humanoide = personaje:FindFirstChild("Humanoid")` | Busca el Humanoid (solo existe en personajes vivos). | `Instance.FindFirstChild`; la muestra oficial usa `FindFirstChildOfClass("Humanoid")` (ver nota 6.1) |
| `if humanoide then` | **Condición:** solo continúa si es un personaje. | *Condicionales* (coding-3): "si esto sucede, entonces haz aquello" |
| `personaje:MoveTo(workspace.SpawnLocation.Position)` | Mueve el modelo a la posición del SpawnLocation. | Referencia `Model:MoveTo(position: Vector3)` — método vigente |
| `end` + `end)` | Cierra el SI y después la reacción. | — |

### 3.5 Sesión 17

```luau
local estrella = script.Parent
while true do
    estrella.Color = Color3.fromRGB(255, 255, 0)
    task.wait(1)
    estrella.Color = Color3.fromRGB(0, 170, 255)
    task.wait(1)
end
```

| Línea | Qué hace | Verificado en |
|---|---|---|
| `local estrella = script.Parent` | Etiqueta hacia la estrella. | Patrón oficial |
| `while true do` | Bucle: repite el bloque **para siempre**. | *Bucles* (coding-4): `while` |
| `estrella.Color = Color3.fromRGB(255, 255, 0)` | Pinta amarillo. | `BasePart.Color` |
| `task.wait(1)` | Espera 1 segundo (cede el paso al juego). | Muestras oficiales con `task.wait(1)` (p. ej. clase `Model`) |
| `estrella.Color = Color3.fromRGB(0, 170, 255)` | Pinta celeste. | `BasePart.Color` |
| `task.wait(1)` | Espera otro segundo. | Idem |
| `end` | Cierra el bucle. | — |

## 4. Pruebas de funcionamiento

| Script | Prueba oficial | Resultado esperado |
|---|---|---|
| S10 | ▶ Play → mirar Output → ■ Stop | Aparece el mensaje escrito por el niño |
| S11 | ▶ Play → caminar hasta la pieza → tocarla | La pieza cambia a rojo (o al color elegido) |
| S14 | ▶ Play → tocar la moneda → caminar por ahí | Desaparece y no bloquea el paso |
| S16 | ▶ Play → caminar hasta la lava → tocarla | El personaje reaparece en el SpawnLocation |
| S17 | ▶ Play → observar ≥ 3 segundos | Alterna amarillo/celeste cada segundo; el resto del juego sigue funcionando |

**Pruebas negativas (deben fallar a propósito):**
- S16 con una pieza suelta lanzada sobre la lava: no debe pasar nada (filtro del `if`).
- S17 sin un `task.wait`: el juego puede bloquearse → **Stop** y restaurar (lección incluida en la sesión).

## 5. Errores frecuentes consolidados

Los errores por sesión ya están en cada guía (§15). Consolidados por tipo:

| Tipo | Síntoma | Solución general |
|---|---|---|
| Ubicación del script | Nada reacciona | El script debe estar **dentro de la pieza** (S11/14/16/17) o en **ServerScriptService** (S10). |
| Sintaxis | Texto **rojo** en Output | Comparar carácter a carácter con la plantilla: comillas, mayúsculas (`Touched`, `Transparency`, `CanCollide`, `MoveTo`), `then`, `end)`. |
| Nombres | "attempt to index nil" / nada ocurre | Verificar nombres exactos de piezas (`Lava`, `Moneda`, `Estrella`) y variables (`pieza`, `lava`… iguales en todas las líneas). |
| SpawnLocation | Error en la línea de `MoveTo` | Confirmar que existe un SpawnLocation en Workspace (S06); si se borró: Home → flechita de Part → SpawnLocation. |
| Bucle | Juego congelado | Falta `task.wait`; **Stop** → revisar las 2 esperas → Ctrl+Z si hace falta. |
| Física | Piezas cayéndose | **Anchored ✓** en Properties (S04). |
| Colisión | Se atraviesa o se atora | **CanCollide ✓** (S07); en la moneda debe ser `false` (S14). |

## 6. Notas y decisiones técnicas

### 6.1 `FindFirstChild` vs. `FindFirstChildOfClass` (sesión 16)
La muestra oficial de Roblox detecta el personaje con `otherPart.Parent:FindFirstChildOfClass("Humanoid")`. El curso usa `personaje:FindFirstChild("Humanoid")`, que también funciona porque el Humanoid del personaje se llama exactamente "Humanoid". **Decisión:** se mantiene `FindFirstChild` por legibilidad infantil (un solo concepto: "buscar por nombre"); el facilitador avanzado puede sustituirlo por `FindFirstChildOfClass("Humanoid")` sin cambiar la lógica. Ambos son API oficial.

### 6.2 Scripts dentro de la pieza vs. ServerScriptService
La documentación crea scripts con frecuencia en ServerScriptService. El curso lo usa **solo en la S10** (para aprender la ubicación canónica) y coloca los scripts de interacción **dentro de la pieza**, porque `script.Parent` resulta directo y visual para la edad ("la casita del script"). Ambas ubicaciones son válidas.

### 6.3 Variables
Solo se usan como **etiquetas** (`local pieza = script.Parent`), sin teoría de tipos de datos: cumple el requisito "variables cuando sean necesarias" sin sobrecargar.

### 6.4 Anonimato de funciones
Las sesiones 11, 14 y 17 usan `function() … end` sin parámetros y la 16 con un solo parámetro (`impacto`). Es el patrón oficial simplificado; no se enseña teoría de funciones (fuera del alcance 6–8 años).

### 6.5 Cosas que el curso **no** hace (a propósito)
- No usa `game:GetService(...)`, `Debris`, `Clone()`, tablas, bucles `for` ni funciones con nombre.
- No publica el juego ni usa servidores públicos.
- No usa plugins ni modelos externos (todo se crea desde cero).

## 7. Lista de verificación para probar en Roblox Studio

Ejecutar **antes de impartir** el curso (15 minutos):

- [ ] Crear script: Explorer → pasar el mouse sobre ServerScriptService → **+** → Script.
- [ ] El script nuevo trae `print("...")` por defecto y se renombra con clic derecho → Renombrar.
- [ ] View → **Output** muestra el mensaje al ▶ Play.
- [ ] Insertar Part desde la pestaña Home; herramientas **Move / Scale / Rotate** disponibles.
- [ ] Propiedades **Anchored, CanCollide, Color, Material, Transparency** visibles en el panel Properties.
- [ ] Botón **Part** tiene flechita con **Sphere / Cylinder / Wedge** y **SpawnLocation**.
- [ ] Pegar los 5 scripts de §2–§3 en un proyecto de prueba y ejecutar las pruebas de §4.
- [ ] Confirmar que `MoveTo` devuelve al personaje al SpawnLocation y que `task.wait(1)` parpadea 1/seg.
- [ ] Guardar el proyecto de prueba **sin publicar**.

## 8. Fuentes oficiales consultadas

- [Crear un script](https://create.roblox.com/docs/es-es/tutorials/fundamentals/coding-1/create-a-script) — creación de scripts, print, Output.
- [Fundamentos de programación](https://create.roblox.com/docs/es-es/tutorials/fundamentals/coding-1/coding-fundamentals) — orden de la serie.
- [Funciones y eventos](https://create.roblox.com/docs/es-es/tutorials/fundamentals/coding-2/functions-and-events) — eventos para objetos interactivos.
- [Referencia BasePart](https://create.roblox.com/docs/es-es/reference/engine/classes/BasePart) — `Anchored`, `CanCollide`, `Color`, `Material`, `Transparency`, evento `Touched` y muestras `part.Touched:Connect(...)`, `part.CanCollide = false`, `task.wait`.
- [Referencia Model](https://create.roblox.com/docs/es-es/reference/engine/classes/Model) — `MoveTo(position: Vector3)` vigente; muestras con `task.wait(1)`.
- [Condicionales (coding-3)](https://create.roblox.com/docs/es-es/tutorials/fundamentals/coding-3/landing) — patrón "si esto sucede, entonces haz aquello".
- [Bucles (coding-4)](https://create.roblox.com/docs/es-es/tutorials/fundamentals/coding-4/landing) — `while` para repetir código.

*Fecha de consulta: 25 de noviembre de 2026. La interfaz de Roblox Studio puede cambiar: ejecutar la lista de la §7 antes de impartir cada edición del curso.*

---

**Resultado de la Fase 4:** 5 scripts verificados · 0 correcciones · 1 nota de estilo (§6.1) · lista de prueba en Studio pendiente de ejecución por el instructor (§7).
