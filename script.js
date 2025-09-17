const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

// Hamburger menü aç/kapa
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

// Overlay tıklayınca menüyü kapat
overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  menu.classList.remove("active");
  overlay.classList.remove("active");
});
