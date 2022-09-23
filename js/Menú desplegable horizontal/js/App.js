const listaDeElementos = document.querySelectorAll('.lista-img-click');
console.log(listaDeElementos);
console.log(listaDeElementos.length);

listaDeElementos.forEach(elemento => {
  elemento.addEventListener('click', ()=> {
    elemento.classList.toggle('arrow');
    let height = 0;
    let altura = 0;
    let menu = elemento.nextElementSibling;
    if (menu.clientHeight == 0) {
      height = menu.scrollHeight;
      menu.style.position = 'absolute';
    } else {
      height = 0;
      menu.style.position = 'unset';
    }
    altura = height + 10;
    menu.style.height = `${height}px`;
    console.log(altura);
    console.log(height);
  });
  
});