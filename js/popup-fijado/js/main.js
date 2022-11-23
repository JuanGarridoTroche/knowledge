
let AbrirPopupAna = document.getElementById("ana"), 
  AbrirPopupNiky = document.getElementById("niky"), 
  AbrirPopupJuan = document.getElementById("juan"),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
  h3 = document.getElementById('nombre'),
  h4 = document.getElementById('cargo'),
  texto = document.getElementById('texto'),
  img = document.getElementById('img'),
  avatar = document.getElementsByClassName("avatar");
	CerrarPopup = document.getElementById('btn-cerrar-popup');

  


AbrirPopupAna.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
  console.log(AbrirPopupAna);
  console.log(img);
  img.setAttribute('src', './img/frontend.png');
  h3.innerHTML = "Ana Arévano";
  h4.innerHTML = "Alumna de Hackaboss, promoción JSB14CO"
  texto.innerHTML ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sit distinctio deleniti iste error. Quo ad aperiam facere corporis eius officiis suscipit odit deleniti reprehenderit, autem magni neque! Explicabo, consectetur!"
});

AbrirPopupNiky.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
  console.log(AbrirPopupNiky);
  img.setAttribute('src', './img/backend.png');
  h3.innerHTML = " Muchika Chettakul";
  h4.innerHTML = "Alumna de Hackaboss, promoción JSB14CO"
  texto.innerHTML ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sit distinctio deleniti iste error. Quo ad aperiam facere corporis eius officiis suscipit odit deleniti reprehenderit, autem magni neque! Explicabo, consectetur!"
});

AbrirPopupJuan.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
  console.log(AbrirPopupJuan);
  img.setAttribute('src', './img/juan.jpg');
  h3.innerHTML = "Juan Garrido Troche";
  h4.innerHTML = "Alumno de Hackaboss, promoción JSB14CO"
  texto.innerHTML ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sit distinctio deleniti iste error. Quo ad aperiam facere corporis eius officiis suscipit odit deleniti reprehenderit, autem magni neque! Explicabo, consectetur!"
});

CerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});