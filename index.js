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

const checkbox = document.getElementById("checkbox");
const body = document.body;

checkbox.addEventListener("change", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    checkbox.checked = true;
  }
});

const qoutes = document.querySelector(".qoutes");
const texts = [
  "“I'm not a great programmer; I'm just a good programmer with great habits” ― Kent Beck”",
  "“Truth can only be found in one place: the code.” ― Robert C. Martin",
  "“The next world war is not gonna be a cold war, it's gonna be a code war.” ― Abhijit Naskar",
];
let index = 0;

setInterval(() => {
  qoutes.style.fontStyle = "italic";
  qoutes.style.fontSize = "1.2em";
  qoutes.style.textAlign = "center";
  index = (index + 1) % texts.length;
  qoutes.innerText = texts[index];
}, 3000); // 2000 milliseconds = 2 seconds
