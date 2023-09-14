document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuNav = document.querySelector(".container-nav-mobile");
  
    menuToggle.addEventListener("click", function () {
      menuNav.classList.toggle("active");
    });
  });

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

