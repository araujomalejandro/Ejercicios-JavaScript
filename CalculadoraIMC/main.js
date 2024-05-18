// Obtener los elementos
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultElement = document.querySelector('input[type="text"]');

// Agregar el evento al botón
document.querySelector('button[type="submit"]').addEventListener('click', calcularIMC);

// Función para calcular el IMC
function calcularIMC(event) {
  event.preventDefault(); 

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; 

  if (weight && height) {
    const imc = weight / (height * height);
    resultElement.value = imc.toFixed(2);
  } else {
    resultElement.value = 'Entrada inválida';
  }
}