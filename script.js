document.getElementById("btn-ejecutar").addEventListener("click", ejecutarEjercicio);

function ejecutarEjercicio() {
  const resultado = document.getElementById("resultado");

  // Genera un valor aleatorio entre 1 y 400
  const valor = Math.floor(Math.random() * 400) + 1;

  resultado.style.display = "block";

  // Verificamos si el valor está dentro del rango usando &&
  if (valor >= 100 && valor <= 300) {
    resultado.textContent = ` ¡Felicitaciones! El valor ${valor} está dentro del rango de 100 a 300.`;
    resultado.style.color = "#155724";
    resultado.style.backgroundColor = "#e6ffed";
    resultado.style.borderColor = "#b6e8c1";
  } else {
    resultado.textContent = ` El valor ${valor} no está dentro del rango de 100 a 300.`;
    resultado.style.color = "#856404";
    resultado.style.backgroundColor = "#fff3cd";
    resultado.style.borderColor = "#ffeeba";
  }
}
