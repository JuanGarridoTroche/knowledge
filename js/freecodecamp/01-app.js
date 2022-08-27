
//Esto es un comentario en Javascript
/*Esto es un comentario
de varias líneas*/

console.log("Hola mundo");

console.log('this is a string');

//OBJETO
console.log({
  "username": 'Ryan',
  "score": 70.4,
  "hours":14,
  "profesional":true
});

//Otro modo de escribirlo un objeto definido en una variable:
let resultados = {
  pos1: 'Juan',
  pos2: 'Alberto',
  pos3: 'José',
  pos4: 'Lara'
};

let posicion = 'pos3';
console.log(resultados[posicion]);
// let resultados = {
//   1: 'Juan',
//   2: 'Alberto',
//   3: 'José',
//   4: 'Lara'
// };

// let posicion = 3;

//ARRAY
console.log(['Joe','Ryan','Martha']);

var nombre = "Juan";
let apellido = "Garrido";
let nombreCompleto = nombre + ' ' + apellido;
let numeroUno = 100;
let numeroDos = 500;

nombre = 'Carlos';
let resultado = numeroUno > numeroDos; 
/* 
::: Operadores :::

Binarios: +, -, *, /, %
concatenación: +
de comparación: ==, !=, === (es igual y con el mismo tipo de dato: string, número, boolean o undefined), !==, <, >, <=, >=
lógicos: &&, ||
unarios: -, !
typeof: saber el valor de un tipo
ternario: ?
 */ 

console.log(nombre);
console.log(nombreCompleto);
console.log(resultado); //es el nº1 (100) mayor que nº2 (500) = NO => FALSE


//ARRAYS: COLECCIÓN, ARREGLO U ORDENACIÓN (no se muuy bien como traducirlo. Es una fila ordenada de datos)
let coleccion = ['HTML','CSS','Javascript'];
let nomCol = coleccion[0];
console.log(nomCol); // sacamos el nombre de la colección o arreglo
console.log(coleccion.indexOf(nomCol));
// console.log(coleccion.indexOf('C++'));
// Si el nombre que buscamos en el array no existe, nos devolverá el valor -1


//OBJETO
let mochila = {
  'color': 'azul',
  'tamaño': 'mediano',
  'contenido': ['botella de agua','cuaderno','bolígrafo']
};
console.log(mochila.color); //azul
mochila.color = 'verde';
console.log(mochila.color); //verde
console.log(mochila.contenido[2]); //bolígrafo, ya que en el arrglo van del 0 a n elementos
//------------------------------------------------------------------------------------------//
//Sintaxis para declarar un objeto:
//Sintaxis antigua:
const nom = 'Gerardo';
const ape = 'Fernández';
const tel = '123 123 123';
const info = 'información del usuario: ' + nom + ' ' + ape + ' ' + tel;
console.log(info);
//Nueva sintaxis:
const infoNS = `Información del usuario: ${nom} ${ape} ${tel}`;
console.log(infoNS);

//Añadir un elemento al arreglo del objeto:
mochila.contenido.push('lápiz');
console.log(mochila.contenido);
//Quitar un elemento del contenido: 
mochila.contenido.pop();
console.log(mochila.contenido);

//Para actualizar/reasignar las variables de un arreglo de un objeto:
mochila.contenido = ['gafas','peluquín', 'lápiz', 'estetoscopio'];
console.log(mochila.contenido);

//Agregar nuevas propiedades a un objeto
let curso = {
  'titulo': 'Aprende Javascript desde ceor',
  'idioma': 'Español',
  'duracion': 30
}

console.log(curso.vistas); //Muestra undefined porque aún no hemos creado la propiedad nueva 'vistas'
curso['vistas'] = 355;
console.log(curso.vistas);
console.log(curso);

//Eliminar una propiedades de un objeto
delete curso.duracion;
console.log(curso);
console.log(curso.duracion); // undefined, ya que no existe

//Objetos para búsquedas
function buscarElementoQuimico (simbolo){
  let simbolosQuimicos = {
    'Al': 'Aluminio',
    'S': 'Azufre',
    'Cl': 'Cloro',
    'He': 'Helio',
    'B': 'Boro',
    'Li': 'Litio'
  };
  return simbolosQuimicos[simbolo];  
}

console.log(buscarElementoQuimico('Al')); //Si no existe, devuelve undefined