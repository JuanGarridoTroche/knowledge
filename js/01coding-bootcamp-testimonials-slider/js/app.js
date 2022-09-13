const btns = document.querySelectorAll('.toggler img');
const imagen = document.querySelectorAll('.img');
const testimonio = document.querySelectorAll('.card-content');
console.log(imagen);
// console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // console.log(e.target.classList); //muestra la clase de la imagen del botón en el que estamos pulsando.
    const index = e.target.classList.contains('prev') ? -1 : 1;
    const activeImg = document.querySelector('.img.active');    
    const activeCardContent = document.querySelector('.card-content.active');    
    let nextIndex = [...imagen].indexOf(activeImg) + index;
    // console.log([imagen].indexOf(activeImg));
    // console.log(imagen.length);
      console.log(nextIndex);
    // console.log(index);
    if (nextIndex < 0) {
      nextIndex = (imagen.length - 1);      
    }
    if (nextIndex >= imagen.length) {
      nextIndex = 0;      
    }

    imagen[nextIndex].classList.add('active');
    testimonio[nextIndex].classList.add('active');
    
    activeImg.classList.remove('active');
    activeCardContent.classList.remove('active');
    
    console.log(nextIndex);
  });
});
