const listElements = document.querySelectorAll('.list-button-click');

listElements.forEach(elemento => {
  elemento.addEventListener('click', ()=>{    
    elemento.classList.toggle('arrow');
    let height = 0;
    let menu = elemento.nextElementSibling;
    console.log(menu);
    console.log(menu.scrollHeight);
    if (menu.clientHeight == 0) {
      height = menu.scrollHeight;
    }
    menu.style.height = `${height}px`;
  });
});