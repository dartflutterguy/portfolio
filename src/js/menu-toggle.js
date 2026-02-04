const navToggle = document.querySelector(".nav-toggle");
const navClose = document.querySelector(".nav-close");
const overlay = document.querySelector(".nav-overlay");

function openNav() {
  document.body.classList.add("nav-open");
}

function closeNav() {
  document.body.classList.remove("nav-open");
}

navToggle.addEventListener("click", openNav);
navClose.addEventListener("click", closeNav);
overlay.addEventListener("click", closeNav);
