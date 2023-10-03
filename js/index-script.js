const openVideoBtn = document.getElementById("openVideo");
const videoModal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");

openVideoBtn.addEventListener("click", () => {
  abrirVideo();
});

function abrirVideo() {
  videoFrame.src = "https://www.youtube.com/embed/lYEdc355rQU"; // Substitua pela URL do seu vídeo
  videoModal.style.display = "block";

  // Adicionar event listener para fechar o modal clicando fora dele
  document.addEventListener("click", fecharAoClicarFora);
}

function fecharVideo() {
  videoFrame.src = ""; // Limpar a URL do vídeo
  videoModal.style.display = "none";

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
  "indique": "https://pay.kiwify.com.br/PYRmcpA",
  "cronograma": "https://pay.kiwify.com.br/TbUfka9",
  "trechos25": "https://pay.kiwify.com.br/PYRmcpA?afid=b4AsGXQo",
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

// Adicione um ouvinte de eventos ao campo de entrada "chaveInput"
const chaveInput = document.getElementById("chaveInput");
chaveInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    verificarChave(); // Chama a função verificarChave quando a tecla Enter for pressionada
  }
});




