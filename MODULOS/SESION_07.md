# Sesión 07. Vamos a explorar

**Módulo:** Módulo 3 — Mi personaje y sus movimientos
**Duración:** 90 minutos (con pausas y acompañamiento)
**Nivel:** principiante

## 1. Identificación

| Dato | Información |
|---|---|
| Sesión | 07 de 20 |
| Título | Vamos a explorar |
| Módulo | Módulo 3 — Mi personaje y sus movimientos |
| Duración | 90 minutos (bloque acompañado, con pausa activa) |
| Tipo de sesión | Prueba de juego en Studio (más jugar, menos construir) |
| Prerrequisitos | S06 ruta con inicio + plataformas + meta |
| Conceptos nuevos | Controles del personaje · **CanCollide** (atravesar vs. apoyarse) |
| Requisito del proyecto | **P9** (prueba del recorrido) — primera pasada |
| Insignia en juego | 🏃 **Probador** (Módulo 3, al terminar S08) |

## 2. Nombre de la misión

**"Vamos a explorar."**

## 3. Historia o contexto motivador

Chip salta de alegría: "¡Ya hay ruta! Ahora hay que **recorrerla**. Todo creador debe jugar su propio juego antes de entregarlo". El niño será el **probador oficial** del circuito: caminará, saltará, caerá y anotará qué siente. Chip trae una regla: "Un buen probador no se enoja con el juego: **busca qué mejorar**".

## 4. Objetivo de aprendizaje

Probar el personaje dentro del propio escenario, usando los controles, y relacionar el recorrido con la propiedad CanCollide.

## 5. Competencias o habilidades que se desarrollan

- Coordinación mano-ojo con teclado y mouse (WASD + espacio).
- Observación crítica: detectar qué funciona y qué no.
- Relación causa-efecto: "caí porque esa pieza no era sólida".
- Registro de hallazgos (primera lista de mejoras).

## 6. Conocimientos previos necesarios

- S02: botones ▶ Play y ■ Stop.
- S06: ruta con SpawnLocation, ≥ 5 plataformas y meta; todo anclado.
- Manejo básico de teclado: teclas W, A, S, D y **barra espaciadora** (saltar).

## 7. Materiales y herramientas

- Computador con Roblox Studio, conexión e internet, mouse **y teclado** (imprescindible hoy).
- Proyecto de práctica con la ruta de la sesión 06.
- Hoja "Notas del probador" con 3 casillas: 😊 funcionó · 😐 dudoso · 😕 no funcionó (una fila por tramo).
- Lápiz para anotar con ayuda del facilitador.
- Adulto acompañante presente.

## 8. Conceptos nuevos

| Concepto | Nombre real en Studio | Explicación para niños |
|---|---|---|
| Modo de prueba | botón **▶ Play** / **■ Stop** | "Encender el juego y jugarlo de verdad" |
| Controles | W A S D + **barra espaciadora** | "W adelante, A/D lados, S atrás, espacio = saltar" |
| Cámara del jugador | mouse (clic en la ventana del juego) | "Mirar a los lados mientras corres" |
| Solidez | propiedad **CanCollide** | "Si está activada, el personaje se apoya; si no, la atraviesa" |

## 9. Desarrollo paso a paso

| Tiempo | Bloque | Acción del facilitador |
|---:|---|---|
| 10 min | Bienvenida | Presentar las "Notas del probador"; recordar la ruta de la S06. |
| 15 min | Demostración | Jugar la ruta con narración: controles, cámara, caída y una salida (§10). |
| 20 min | Práctica guiada | El participante prueba controles en zona segura (§11). |
| 5 min | Pausa activa | "Estiramiento de teclado": manos abiertas/cerradas 10 veces, hombros, mirar lejos 10 s. |
| 20 min | Reto individual | Recorrer la ruta anotando en las Notas del probador (§12). |
| 10 min | Prueba | Mini-recorrido final con 1 hallazgo anotado (§14). |
| 10 min | Cierre | Compartir 1 cosa que funcionó y 1 que no; sin resolver aún. |

## 10. Demostración guiada

El facilitador juega mientras narra (o guía las manos del niño en el teclado si es necesario):

1. **▶ Play.** "El juego arranca; mi personaje aparece en el SpawnLocation".
2. **Clic en la ventana del juego** para tomar el control. "Hay que decirle al juego que miro aquí".
3. **W** → avanza; **A/D** → lados; **barra** → salta. Probar cada tecla en zona segura.
4. **Mouse** → girar la cámara. "Así miro hacia dónde voy".
5. Caminar hasta la primera plataforma y **saltar**. Si cae: "¡Caí! Eso también es información: anoto 😐 o 😕".
6. **Reaparecer:** el personaje vuelve al SpawnLocation. "Los juegos te dan otra oportunidad".
7. **■ Stop.** "Probamos; ahora mi turno de decidir qué arreglo".
8. Mostrar **CanCollide** (ejemplo): seleccionar una plataforma → Properties → **CanCollide** → desactivar → Play → **atraviesa** → Stop → reactivar → Play → **se apoya**. "Este es el interruptor de la solidez". Dejarlo **activado ✓**.

## 11. Actividad práctica

En zona segura (sobre la isla, lejos del borde):

1. ▶ Play → clic en la ventana → caminar con W, A, S, D (cada tecla, con el facilitador nombrándola).
2. Saltar con **barra** 3 veces.
3. Girar la cámara con el mouse mientras camina.
4. Caminar hacia una plataforma y tocarla (sin saltar aún) para ver que **no se atraviesa**.
5. ■ Stop.

## 12. Reto individual

**Reto: "Primera exploración oficial"** — recorrer la ruta con las Notas del probador:

1. Empezar en el SpawnLocation y avanzar hasta donde pueda (saltando si se atreve).
2. Anotar (o decirle al facilitador para que anote) en cada tramo:
   - 😊 "lo logré" · 😐 "está raro" · 😕 "no pude".
3. Identificar **un lugar** donde falló (plataforma lejana, pieza atravesada, caída).
4. Terminar la exploración con al menos **1 😊** y **1 😕 o 😐** (si todo es 😊, el facilitador complica una pieza a escondidas para que haya algo que analizar).

**Límite:** no se modifican piezas hoy; solo se **observa y anota** (la corrección es la sesión 08).

## 13. Ejercicio de exploración

**"El interruptor invisible":** con CanCollide, el facilitador desactiva 1 plataforma a escondidas; el niño debe descubrir **cuál** recorriendo el circuito y señalarla. Después activa/desactiva con él viendo. Objetivo: que entienda que **CanCollide decide si el jugador se apoya o atraviesa**.

## 14. Prueba del resultado

1. **Mini-recorrido:** ▶ Play → llegar al menos a la mitad de la ruta → ■ Stop.
2. Revisar la hoja Notas del probador: ¿tiene 1 😊 y al menos 1 😐/😕?
3. Pregunta de verificación: "¿Qué hace CanCollide cuando está apagada?" (esperado: "se atraviesa").
4. Confirmar que **todas las piezas quedaron con CanCollide ✓ y Anchored ✓**.

**Criterio de éxito:** el niño jugó, anotó hallazgos y explicó en sus palabras qué hace CanCollide.

## 15. Errores frecuentes y soluciones

| Problema | Solución |
|---|---|
| El personaje no responde al teclado | Hacer **clic dentro de la ventana del juego** primero; verificar que esté en Play. |
| El personaje atraviesa una pieza | **CanCollide ✓** ausente en esa pieza (seleccionar → Properties → activar). |
| El personaje aparece dentro de una pieza y "parpadea" | Mover esa pieza o el SpawnLocation (flechas Move) para que no se solapen; Stop primero. |
| No sabe saltar | **Barra espaciadora**; practicar 3 saltos en zona plana antes de la ruta. |
| Se frustra al caer muchas veces | Normalizar: "caer es parte de probar"; usar el SpawnLocation como "otra oportunidad"; la dificultad se ajusta mañana. |
| La cámara gira sin control | Clic en la ventana del juego; no mover el mouse fuera de la ventana. |
| Play no arranca | Esperar carga, revisar internet, reintentar una vez. |

## 16. Evidencia de aprendizaje

- Prueba del recorrido en vivo (el facilitador observa el Play).
- Hoja **Notas del probador** con al menos 1 😊 y 1 😐/😕.
- Explicación oral de CanCollide.

## 17. Criterios de evaluación

| Criterio | Logrado | En proceso | Requiere apoyo |
|---|---|---|---|
| Inicia y detiene la prueba (▶/■) de forma autónoma | | | |
| Mueve el personaje con W A S D + barra | | | |
| Registra al menos 2 hallazgos en su hoja | | | |
| Relaciona una caída con CanCollide (con ayuda) | | | |

## 18. Preguntas de reflexión

1. "¿Qué parte de tu ruta se sintió fácil? ¿Y difícil?"
2. "¿Por qué crees que atravesaste esa pieza?"
3. "¿Qué le dirías a Chip que hay que arreglar mañana?"

## 19. Actividad opcional de ampliación

- **Modo cámara libre:** explorar el escenario en Play mirando desde ángulos distintos (sin saltar).
- **Dibujar el recorrido:** marcar en el plano con un lápiz el lugar exacto donde falló.
- Contar cuántos intentos tardó en llegar a la meta (número para la hoja de pruebas de la S19).

## 20. Orientaciones para padres o acompañantes

- Sostenga el teclado o ayude con las teclas al principio: a los 6 años la coordinación W A S D + espacio es el mayor desafío técnico de la sesión.
- No tome el mando para "llegar más lejos": el objetivo es que **el niño** experimente y anote.
- Valide cada caída como información, no como fracaso.
- No arregle CanCollide hoy aunque lo note: la sesión 08 es la de correcciones; hoy se observa.

- **Seguridad:** el proyecto **no se publica** y el curso **no usa Robux ni compras**; el adulto revisa las evidencias antes de compartirlas (ver `RECURSOS/REQUISITOS_TECNICOS_Y_SEGURIDAD.md`).

---

**Registro de cambios**
- 25/11/2026 (Fase 3): reescritura completa con las 20 secciones. Se conservaron de la versión anterior: título, módulo, duración, misión, propósito ("probar el personaje dentro del mundo"), materiales, distribución de tiempos, evidencia ("prueba del recorrido y un ajuste") y criterio de observación general. El "ajuste" se trasladó a la sesión 08 para separar observar de corregir.
