const menu = document.querySelector(".menu-icons");
const nav = document.querySelector(".nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});
