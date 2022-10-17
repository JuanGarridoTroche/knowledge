const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', e => {
  document.querySelector('.mobile-nav').classList.add('show');
  document.querySelector('.overlay').style.display = 'block';
});