//Versión móvil Hamburger

// Al clicar en el icono de hamburger pasa a ser una X:

const hamburger = document.querySelector(".hamburger");
const headerContainer = document.querySelector(".header-container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  headerContainer.classList.toggle("active");
});

document.querySelectorAll(".dropdown").forEach(n => {
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    headerContainer.classList.remove("active");
  })
});
