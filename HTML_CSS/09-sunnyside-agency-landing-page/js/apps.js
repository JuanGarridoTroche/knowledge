window.onload = inicio;

function inicio(){
document.getElementById("menu-hamburger").onclick = mostrarMenu;
}

function mostrarMenu(){
  let hamburguesa = document.querySelector(".menu-content");
  if (hamburguesa.style.display == "none"){
    hamburguesa.style.display = "block";
  } else {
    hamburguesa.style.display = "none";
  }
}

//Al hacer click sobre la hamburguesa, quiero que se muestre el menú (.menu-content)