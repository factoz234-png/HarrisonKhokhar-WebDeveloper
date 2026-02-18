const hammerburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hammerburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
