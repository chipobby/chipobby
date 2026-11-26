# Tarjetas de código — Plantillas imprimibles

**Fase:** Fase 6 — Recursos
**Uso:** imprimir y recortar (una tarjeta por plantilla). Se usan en las sesiones de código (10, 11, 14, 16, 17) junto a la ficha "Anatomía de una línea". El niño puede señalar las líneas mientras lee en voz alta antes de pulsar Play (regla de `AGENT.md`).
**Colores:** cada palabra clave tiene un color fijo en todas las tarjetas (para reconocerla entre plantillas):

| Color | Palabra |
|---|---|
| 🟣 Morado | `local` (crea una etiqueta) |
| 🔵 Azul | nombres de cosas (`pieza`, `lava`, `moneda`…) |
| 🟢 Verde | eventos y bloques (`Touched`, `Connect`, `if`, `then`, `while`, `do`) |
| 🟠 Naranja | acciones (`print`, `Color`, `Transparency`, `MoveTo`, `wait`) |
| ⚫ Gris | comillas, paréntesis, comas, números |

---

## Tarjeta 1 — Sesión 10: mi primer mensaje

```luau
print("Aventura en la selva")
```
**Dónde:** Script en **ServerScriptService** · **Qué verás:** el mensaje en **Output** al pulsar Play.

---

## Tarjeta 2 — Sesión 11: el botón mágico (cambia de color)

```luau
local pieza = script.Parent
pieza.Touched:Connect(function()
    pieza.Color = Color3.fromRGB(255, 0, 0)
end)
```
**Dónde:** Script **dentro de la pieza** · **Qué verás:** la pieza se pone **roja** al tocarla.
**Lee así:** "cuando la toquen… **entonces** se pone roja".

---

## Tarjeta 3 — Sesión 14: la moneda desaparece (recogida)

```luau
local moneda = script.Parent
moneda.Touched:Connect(function()
    moneda.Transparency = 1
    moneda.CanCollide = false
end)
```
**Dónde:** Script **dentro de la moneda** · **Qué verás:** la moneda **desaparece** y no estorba al paso.
**Recuerda:** `0` se ve · `1` invisible.

---

## Tarjeta 4 — Sesión 16: la regla de la lava (condición)

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
**Dónde:** Script **dentro de la lava** · **Qué verás:** al tocar la lava, el personaje **vuelve al inicio**.
**Lee así:** "**SI** es un personaje… **ENTONCES** lo mando al inicio".
**Filtro:** solo castiga personajes (el `if`).

---

## Tarjeta 5 — Sesión 17: la estrella que parpadea (repetición)

```luau
local estrella = script.Parent
while true do
    estrella.Color = Color3.fromRGB(255, 255, 0)
    task.wait(1)
    estrella.Color = Color3.fromRGB(0, 170, 255)
    task.wait(1)
end
```
**Dónde:** Script **dentro de la estrella** · **Qué verás:** parpadea **amarillo ↔ azul** cada segundo, para siempre.
**Lee así:** "**REPITE** para siempre: amarillo, espera 1, azul, espera 1…".
**Cuidado:** sin `task.wait` el juego puede congelarse → **Stop** y revisar.

---

## Tarjeta de bolsillo — "¿Qué significa este color de Output?"

| En Output ves… | Qué pasó | Qué hacer |
|---|---|---|
| Texto normal (tu `print`) | Tu instrucción funcionó | ¡A seguir! |
| Texto **rojo** | Hay un error de escritura | Comparar la línea con la tarjeta, carácter por carácter |
| Nada | El script no está en su lugar o no pulsaste Play | Revisar Explorer + Play |

---

## Instrucciones para el facilitador

1. Imprimir a color si es posible (los colores son la ayuda visual); en B/N, subrayar las palabras clave.
2. Mantener la tarjeta **visible durante toda la sesión**; el niño apunta con el dedo al leer.
3. **Regla:** antes de cada Play, el niño lee la tarjeta en voz alta (puede ser guiado).
4. No entregar todas las tarjetas de una vez: solo la de la sesión en curso (las demás se archivan).
5. Los colores deben coincidir con los usados en las guías de sesión (§7 y §10 de cada SESION_xx.md).

---

**Registro de cambios**
- 25/11/2026 (Fase 6): creación del recurso (antes no existía). 5 tarjetas con los scripts oficiales del curso (idénticos a `DOCUMENTACION/VERIFICACION_TECNICA.md` §3), tabla de colores, tarjeta de errores de Output e instrucciones de uso.
