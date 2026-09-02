/**
 * ============================================================================
 * 🎓 EVALUACIÓN DIAGNÓSTICA — BLOQUE D: JAVASCRIPT CORREGIDO
 * ============================================================================
 */

function calcularPromedioNotas(a, b) {
  // CORREGIDO: Paréntesis para priorizar la suma antes de la división
  return (a + b) / 2;
}

function procesarCalculo() {
  const input1 = document.querySelector("#nota1");
  // CORREGIDO: Selector correcto apuntando al ID #nota2
  const input2 = document.querySelector("#nota2");
  const cajaResultado = document.querySelector("#resultado");

  // CORREGIDO: Conversión numérica explícita usando parseFloat()
  const val1 = parseFloat(input1.value);
  const val2 = parseFloat(input2.value);

  // Validación preventiva ante campos vacíos
  if (isNaN(val1) || isNaN(val2)) {
    cajaResultado.textContent = "Por favor, ingresa notas válidas.";
    return;
  }

  const promedio = calcularPromedioNotas(val1, val2);

  // CORREGIDO: Propiedad textContent escrita de manera correcta
  cajaResultado.textContent = "Promedio: " + promedio.toFixed(2);
}

// CORREGIDO: Selector correcto por ID del botón (#btn-calcular)
const boton = document.querySelector("#btn-calcular");
if (boton) {
  boton.addEventListener("click", procesarCalculo);
}
