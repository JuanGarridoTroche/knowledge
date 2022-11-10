const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

console.log(hamburger);
console.log(nav);


const cambiarEstadoHamburguer = document.addEventListener("click", (e)=> {
  if(hamburger.classList.contains("ocultar")) {
    hamburger.style.cssText = "display: block"; 
  } else {
    hamburger.style.cssText = "display: none"; 
  };
})

