
const menuToggle = document.getElementById("menu-toggle");
const navLinksMenu = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinksMenu.classList.toggle("show");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinksMenu.classList.remove("show");
  });
});

