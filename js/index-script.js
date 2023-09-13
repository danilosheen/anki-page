document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuNav = document.querySelector(".container-nav-mobile");
  
    menuToggle.addEventListener("click", function () {
      menuNav.classList.toggle("active");
    });
  });