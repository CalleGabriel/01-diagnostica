/**
 * ============================================================================
 * 🎓 EVALUACIÓN DIAGNÓSTICA — BLOQUE C: JAVASCRIPT & DOM (CE3)
 * ============================================================================
 */

// TODO: C2. Selecciona los elementos del DOM necesarios con const
const inputNombre = document.getElementById('input-nombre');
const btnSaludar = document.getElementById('btn-saludar');
const btnLimpiar = document.getElementById('btn-limpiar');
const mensajeResultado = document.getElementById('mensaje-resultado');

// TODO: C3. Declara una función nombrada para procesar el saludo
function generarSaludo() {
    let nombreUsuario = inputNombre.value.trim();

    if (nombreUsuario === "") {
        mensajeResultado.textContent = "Por favor, ingresa un nombre válido.";
    } else {
        mensajeResultado.textContent = "¡Bienvenido/a a la UETS, " + nombreUsuario + "!";
    }
}

function limpiarPantalla() {
    inputNombre.value = "";
    mensajeResultado.textContent = "Esperando interacción...";
}

// TODO: C4 y C5. Agrega los eventos addEventListener para actualizar la pantalla
btnSaludar.addEventListener('click', generarSaludo);
btnLimpiar.addEventListener('click', limpiarPantalla);