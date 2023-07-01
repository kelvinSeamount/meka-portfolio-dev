const scrollNav = document.querySelector("nav");

document.addEventListener("scroll", function () {
  scrollNav.classList.toggle("window-scroll", window.scrollY > 0);
});
