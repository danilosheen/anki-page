// // Função para rolar suavemente até a seção desejada
// function rolarParaDiv(id) {
//   var elemento = document.getElementById(id);
//   elemento.scrollIntoView({ behavior: "smooth" });
// }

// // Event listener para links de ancoragem
// document.addEventListener("click", function (event) {
//   if (event.target.tagName === "A" && event.target.getAttribute("href").startsWith("#")) {
//     event.preventDefault(); // Impede o comportamento padrão do link
//     var id = event.target.getAttribute("href").substring(1); // Obtém o ID da âncora
//     rolarParaDiv(id); // Chama a função para rolar suavemente até a seção
//   }
// });

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

