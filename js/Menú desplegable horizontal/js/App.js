const listaDeElementos = document.querySelectorAll('.lista-img-click');
console.log(listaDeElementos);
console.log(listaDeElementos.length);

listaDeElementos.forEach(elemento => {
  elemento.addEventListener('click', ()=> {
    elemento.classList.toggle('arrow');
    let height = 0;
    let menu = elemento.nextElementSibling;
    if (menu.clientHeight == 0) {
      height = menu.scrollHeight;
      menu.style.position = 'absolute';
    } else {
      height = 0;
      menu.style.position = 'unset';
    }

    menu.style.height = `${height}px`;

    
  });
});