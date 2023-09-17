
// função para carregar smooth
document.addEventListener("DOMContentLoaded", function () {
  // Verifique se o JavaScript está disponível
  if (typeof window.addEventListener === 'function') {
    // Adicione um comportamento avançado de navegação
    var links = document.querySelectorAll("a[href^='#']");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function (event) {
        event.preventDefault();
        var targetId = this.getAttribute("href").substring(1);
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
          });
        }
      });
    }
  }
});

//------------------------------------------------

// função para exibir o menu hamburguer
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuNav = document.querySelector(".container-nav-mobile");
  
    menuToggle.addEventListener("click", function () {
      menuNav.classList.toggle("active");
    });
  });

