//Función que captura datos de un input del formulario:

function recogerDatosFormulario() {
  const user = document.getElementById("player").value;
  console.log(user);

  if(user === "" || user === "Date de alta") {
    alert("Por favor, introduce un nombre de jugador válido.");
    document.getElementById("player").focus();
  }
}

/** Validar datos */

// const formulario = document.getElementById("formulario");
// const inputs = document.querySelectorAll("#formulario input");

// console.log(formulario);
// formulario.addEventListener("submit", (e) => {
//   e.preventDefault(); /* No permite que haga nada mientras no validemos todos los inputs aunque pulsemos en el botón */
// })