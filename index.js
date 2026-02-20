const hammerburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hammerburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

window.onscroll = function () {
  const nav = document.querySelector(".nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
};
