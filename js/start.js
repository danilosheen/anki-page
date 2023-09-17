// função para exibir o menu hamburguer
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuNav = document.querySelector(".container-nav-mobile");
  
    menuToggle.addEventListener("click", function () {
      menuNav.classList.toggle("active");
    });
  });

//------------------------------------------------

// Função para rolar suavemente até a seção desejada
function rolarParaDiv(id) {
  var elemento = document.getElementById(id);
  elemento.scrollIntoView({ behavior: "smooth" });
}

// Event listener para links de ancoragem
document.addEventListener("click", function (event) {
  if (event.target.tagName === "A" && event.target.getAttribute("href").startsWith("#")) {
    event.preventDefault(); // Impede o comportamento padrão do link
    var id = event.target.getAttribute("href").substring(1); // Obtém o ID da âncora
    rolarParaDiv(id); // Chama a função para rolar suavemente até a seção
  }
});