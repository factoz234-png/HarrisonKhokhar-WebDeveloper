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

const navLinks = document.querySelectorAll(".nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

const viewCert = document.querySelector(".certificates-section .yes .btnss");
const CertSec = document.getElementById("Cert-sec");

viewCert.addEventListener("click", () => {
  CertSec.classList.toggle("active");

  if (CertSec.classList.contains("active")) {
    viewCert.textContent = "Close Certificate";
  } else {
    viewCert.textContent = "View Certificate";
  }
});
