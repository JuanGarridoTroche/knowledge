const datos = [
  {
    id: 1,
    title: "Iron Man",
    year: 2008,
  },
  {
    id: 2,
    title: "Spiderman: Homecoming",
    year: 2017,
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    year: 2019,
  },
];

/**
 * ¿Cuando usar PromiseS? cuando necesitamos recibir una respuesta con datos de una API o elemento externo a nuestro servidor y no sabemos en que momento llegarán. No podemos bloquear el funcionamiento de nuestro programa, sería como enviar un correo o un whatsapp y esperar mirando la pantalla a que nos contesten. 
 * Existen dos formas de trabajar con el procesamiento asíncrono (es decir, Promises) en JavaScript: usando el método .then() o las palabras clave async y await.
 */

/**================================================================================================================================================== 
 *                                                                         PROMESAS
 * ==================================================================================================================================================
 */

//Con esta función nos devuelve el array de objetos "datos":
// const getDatos = ()=> {
//   return datos;
// }

/*
Vamos a simular un retraso de la función (como si estuviésemos solicitando los datos a una API), pensando que el servidor donde se ejecuta tiene demasiadas conexiones simultáneas y no es capaz de devolver a tiempo los datos requeridos, añadiendo un setTimeout. 
Aquí, nos devolverá "undefined" ya que getDatos tiene que esperar 1500ms hasta devolver una respuesta y antes de que pase ese segundo y medio, ya nos ha respondido con undefined. Es decir, como nos responde antes de 1500ms y no tiene una respuesta, entonces la función nos devuelve undefined.
*/
// const getDatos = ()=>{
//   setTimeout(() => {
//     return datos;
//   }, 1500);
// }
// console.log(getDatos());

/**
 * Para resolver esto, se inventaron las Promise que tiene 2 argumentos: resolve( si se cumple) y reject (si no se cumple).
 * Como metemos el resolve dentro del setTimeout, no devuelve resolve hasta pasados 1500ms y nos devuelve el array de objetos, pasados 1500ms
 * 
 * No hay forma de usar try/catch cuando se usa .then(), ya que el cálculo solo se realizará después de devolver el objeto-Promise. Luego debemos pasar funciones que ejecuten las alternativas, en caso de éxito o fracaso de la operación.
 */
const getDatos = () => {
    return new Promise((resolve, reject) => {
      if(!datos.length) {
        reject(new Error('No existen datos registrados.'));
      }
      setTimeout(() => {
        resolve(datos);
      }, 1500);
    });   
};

getDatos().then((datos) => console.log(datos));


/**================================================================================================================================================== 
 *                                                            AWAIT
 * ==================================================================================================================================================
 */

/*Otra forma de mostrar los datos de una manera más secuencial sería utilizando await en vez de "then".
* Siempre que utilicemos await tiene que ir dentro de una función asíncrona sino nos dará error. Una función asíncrona se distingue de una función   * normal en que lleva delante la palabra especial "async"
* Aquí le decimos que espere hasta recibir los datos:
*/

async function fetchingDatos() {
  try {
    console.log(await getDatos());    
  } catch (error) {
    console.error(error.message);
  }
}

// fetchingDatos();