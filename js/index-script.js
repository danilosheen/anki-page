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

//-----------------------------------------------------

//video modal
const openVideoBtn = document.getElementById("openVideo");
const videoModal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");

openVideoBtn.addEventListener("click", () => {
  abrirVideo();
});

function abrirVideo() {
  videoFrame.style.display = "block";
  videoModal.style.display = "block";

  // Adicionar event listener para fechar o modal clicando fora dele
  document.addEventListener("click", fecharAoClicarFora);
}

function fecharVideo() {
  videoFrame.style.display = "none";
  videoModal.style.display = "none";
  
  // Pausar o vídeo (se necessário)
  videoFrame.src = videoFrame.src;
  
  // Remover event listener para fechar o modal clicando fora dele
  document.removeEventListener("click", fecharAoClicarFora);
}

function fecharAoClicarFora(event) {
  if (event.target === videoModal) {
    fecharVideo();
  }
}
//------------------------------------------------


// faq
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");

      question.addEventListener("click", () => {
          item.classList.toggle("open");
          answer.style.display = item.classList.contains("open") ? "block" : "none";
      });
  });
});

// ------------------------------

// Lista de chaves e seus links correspondentes
const listaDeChaves = {
  "chave1": "https://www.google.com/",
  "chave2": "https://www.youtube.com/",
  // Adicione mais chaves e links conforme necessário
};

// Função para verificar a chave e redirecionar para o link correto
function verificarChave() {
  const chaveInput = document.getElementById("chaveInput");
  const chave = chaveInput.value.toLowerCase(); // Converter para letras minúsculas
  const link = listaDeChaves[chave];
  const feedbackText = document.getElementById("feedbackText");

  if (link) {
      window.location.href = link; // Redireciona para o link correspondente
  } else {
      chaveInput.classList.add("error"); // Adiciona a classe "error" para estilizar a borda em vermelho
      chaveInput.value = ""; // Limpa o texto do input
      feedbackText.textContent = "Chave incorreta. Tente novamente."; // Exibe o texto de feedback
      setTimeout(() => {
          chaveInput.classList.remove("error"); // Remove a classe "error" após um tempo
          feedbackText.textContent = ""; // Limpa o texto de feedback após um tempo
      }, 3000); // 3000 milissegundos = 3 segundos (ajuste conforme necessário)
  }
}

// Adicione um ouvinte de eventos ao botão
document.getElementById("obterDescontoBtn").addEventListener("click", verificarChave);



