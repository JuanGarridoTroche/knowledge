saludo();

function saludo(){
  console.log('¡Hola chavales!')
}

saludo(); // Decimos que ejecute la función 

//PARÁMETRO PARA LA FUNCIÓN

function saludo(nombre){
  console.log(nombre + ', ¡Buenos días!');  
}

saludo('Pedro');

/*Como está definida 2 veces la misma función, ésta, machaca la 1ª y toma los valores de la segunda. Hay que tener ojo con esto y no repetir el nombre de nuestras funciones.*/

function suma(n1, n2){
  console.log(n1, n2);  
  console.log(n1 + n2);
}

suma(100, 300);
document.write(suma(100,300));