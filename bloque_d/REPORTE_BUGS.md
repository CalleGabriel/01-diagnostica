# 🐛 Reporte de Bugs Encontrados y Corregidos (Bloque D)
**Estudiante:** [Gabriel Calle]  
**Paralelo:** [E1] | **Fecha:** [02/09/2026]  

---

## 1. 🔍 Bug de HTML Encontrado (D1)
- **¿Qué fallaba?:** Enlace CSS incorrecto, etiqueta `<header>` sin cerrar, e inputs/botones sin atributos `id`.
- **Causa Raíz:** Nombres de archivos erróneos y olvido de etiquetas clave que rompían la estructura y el enlace con JS.
- **Solución Aplicada:** Se corrigió el `href` a `estilos.css`, se cerró `</header>` y se añadieron `id="nota2"` e `id="btn-calcular"`.

---

## 2. 🔍 Bug de CSS Encontrado (D2)
- **¿Qué fallaba?:** Errores de escritura en `display: flexer`, `align-item` y `cursor: pointing-hand`.
- **Causa Raíz:** Uso de términos e instrucciones inválidas que el navegador no podía interpretar.
- **Solución Aplicada:** Se cambiaron por las propiedades correctas: `display: flex`, `align-items: center` y `cursor: pointer`.

---

## 3. 🔍 Bug de JavaScript Encontrado (D3)
- **¿Qué fallaba?:** Concatenaba texto en vez de sumar, selectores de ID equivocados y error de escritura en `textContnt`.
- **Causa Raíz:** Los inputs devuelven texto (Strings), los IDs no coincidían con el HTML y la propiedad del DOM estaba mal escrita.
- **Solución Aplicada:** Se aplicó `parseFloat()`, se añadieron paréntesis a la suma, se corrigieron los selectores a `#nota2` / `#btn-calcular` y se usó `.textContent`.

---

## 4. ✅ Verificación en Consola del Navegador (D5)
- [x] Presioné F12 en el navegador.
- [x] Fui a la pestaña **Console**.
- [x] Verifiqué que **NO aparezca ningún error en rojo**.

