const hamburger = document.querySelector(".hamburger");
const menuContent = document.querySelector(".menu-content");

hamburger.addEventListener("click", () => {
  menuContent.classList.toggle("active");
});