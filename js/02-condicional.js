let passwordDB = '12345R';
let input = '21345R';

let resultado = input == passwordDB;
if(resultado == true) {
  console.log('Login correcto');
}

if(resultado == false) {
  console.log('login incorrecto');
}

//otra manera de escribirlo de mejor manera
if(resultado == true) {
  console.log('Login correcto');
} else {
  console.log('login incorrecto');
}

let puntuacion = 70;

if (puntuacion>30) {
  console.log('Necesitas practicar más');
} else if (puntuacion > 15) {
    console.log('Estás mejorando');
  } else {
  console.log('Necesitas seguir este tutorial');
}