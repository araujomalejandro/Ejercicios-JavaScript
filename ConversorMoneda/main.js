// Define exchange rates
let exchangeRates = {
    'COP': {
      'EUR': 0.00024,
      'USD': 0.00026
    },
    'EUR': {
      'COP': 4166.67,
      'USD': 1.08
    },
    'USD': {
      'COP': 3846.15,
      'EUR': 0.92
    }
  };
  
 // Get the necessary elements from the HTML
let monedaUno = document.getElementById('moneda-uno');
let monedaDos = document.getElementById('moneda-dos');
let cantidadUno = document.getElementById('cantidad-uno');
let tasaButton = document.getElementById('tasa');
let cambio = document.getElementById('cambio');

// Add an event listener to the button
tasaButton.addEventListener('click', () => {
  // Get the values from the input and select elements
  let amount = parseFloat(cantidadUno.value);
  let selectedMonedaUno = monedaUno.value;
  let selectedMonedaDos = monedaDos.value;

  // Perform the conversion based on the selected currencies
  let result;
  if (selectedMonedaUno === 'COP') {
    if (selectedMonedaDos === 'USD') {
      result = amount * 0.00026;
    } else if (selectedMonedaDos === 'EUR') {
      result = amount * 0.00024;
    }
  }

  if (selectedMonedaUno === 'USD') {
    if (selectedMonedaDos === 'COP') {
      result = amount * 3846.15;
    } else if (selectedMonedaDos === 'EUR') {
      result = amount * 0.92;
    }
  }

  if (selectedMonedaUno === 'EUR') {
    if (selectedMonedaDos === 'COP') {
      result = amount * 4166.67;
    } else if (selectedMonedaDos === 'USD') {
      result = amount * 1.08;
    }
  }

  // Display the result
  cambio.textContent = `Result: ${result}`;
});