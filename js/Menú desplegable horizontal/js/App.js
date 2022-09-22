const listaDeElementos = document.querySelectorAll('.lista-img-click');

listaDeElementos.forEach(elemento => {
  elemento.addEventListener('click', ()=> {
    elemento.classList.toggle('arrow');
    let height = 0;
    let menu = elemento.nextElementSibling;
    if (menu.clientHeight == 0) {
      height = menu.scrollHeight;
    }
    menu.style.height = `${height}px`;
  });
});