const inputNota1 = document.querySelector('#nota1');
const inputNota2 = document.querySelector('#nota2');
const btnCalcular = document.querySelector('#btn-calcular');
const divResultado = document.querySelector('#resultado');

function calcularPromedio() {
  const n1 = parseFloat(inputNota1.value);
  const n2 = parseFloat(inputNota2.value);

  if (isNaN(n1) || isNaN(n2)) {
    divResultado.textContent = "Por favor, ingresa ambas notas válidas.";
    return;
  }

  const promedio = (n1 + n2) / 2;
  divResultado.textContent = `Promedio Final: ${promedio.toFixed(2)}`;
}

btnCalcular.addEventListener('click', calcularPromedio);