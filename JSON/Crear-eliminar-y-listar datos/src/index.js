/* Ejercicio sacado del canal de Fazt Code: https://www.youtube.com/watch?v=YiBDvtEP88M  */
const app = require('./app');

/** Para que el await funcione, tiene que estardentro de una función, por eso sustituimos las líneas de abajo por estas. */
async function main () {
  await app.listen(app.get('port'));
  // console.log('Servidor escuchando en el puerto ', app.get('port'));
  console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
}

main();

/* En la variable app vamos a decirle que escuche en el puerto 3000 y cuando inicie quiero que muestre un mensaje por consola. Así que si abrimos una página nueva en el navegador y escribimos http://localhost:3000/ nos dará un error (porque no hay rutas ni nada hecho aún) pero esto nos sirve para saber que está funcionando.

app.listen(3000, () =>{
  console.log('Servidor escuchando en el puerto 3000');
});   

*/