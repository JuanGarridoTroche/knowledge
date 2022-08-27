// Botón del menú lateral (X), para desplegar y cerrarlo.
const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})

// Formulario de contacto. Envío
// const $form = document.querySelector('#form')
// $form.addEventListener('submit', handleSubmit)
// function handleSubmit(event){
//   event.preventDefault()
//   const form = new FormData(this)
//   $buttonMailto.setAttribute('href', `mailto:juan@darthvader.es?subject=${form.get('nombre-completo')} correo ${form.get('email')} & {body=${form.get('mensaje')}`)
//   $buttonMailto.click()
// }