// função para carregar smooth
document.addEventListener("DOMContentLoaded", function () {
  // Verifique se o JavaScript está disponível
  if (typeof window.addEventListener === "function") {
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
            behavior: "smooth",
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
  const menuItems = menuNav.querySelectorAll("li");

  menuToggle.addEventListener("click", function (event) {
    menuNav.classList.toggle("active");
    event.stopPropagation(); // Impede a propagação do evento para o documento
  });

  // Ouvinte de evento de clique no documento
  document.addEventListener("click", function (event) {
    // Verifica se o clique ocorre fora do modal e do botão de ativação
    if (!menuNav.contains(event.target) && event.target !== menuToggle) {
      menuNav.classList.remove("active"); // Fecha o modal
    }
  });

  // Ouvinte de evento de clique para os itens do menu
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      menuNav.classList.remove("active"); // Fecha o modal ao clicar em um item
    });
  });
});
