
let contar = 10;
// WHILE (condicion) {}
while(contar > 0) {
  console.log(contar);
  contar = contar - 1;
}

// Se podría hacer de otro modo:
while(contar <= 10) {
  console.log(contar);
  contar++;
}

//OJO con crear un bucle infinito

//Bucle FOR
let nombres = ['Mario', 'Juan', 'Carlos', 'Iván', 'Jesús', 'Julio', 'María','Isabel','Andrea','Carolina','Javier'];
let numNombres = nombres.length;
console.log(nombres[3]);
console.log(numNombres);

for(let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

//Otro modo de escribirlo
for(let i = nombres.length -1; i >= 0; i--) {
  console.log(nombres[i]);
}