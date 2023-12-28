var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtube-video", {
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    setTimeout(function () {
      showCustomModal();
    }, 10000); // 10 segundos (10000 milissegundos)
  }
}

function showCustomModal() {
  var overlay = document.getElementById("overlay");
  var modal = document.getElementById("modal");
  overlay.style.display = "block";
  modal.classList.remove("hidden");
  setTimeout(function () {
    overlay.style.opacity = 1;
    modal.style.bottom = 0;
  }, 100); // Adiciona um pequeno atraso para a transição iniciar corretamente

  // Adiciona evento para fechar ao clicar no "x"
  var closeModalButton = document.getElementById("close-modal");
  closeModalButton.addEventListener("click", closeModalFunction);

  // Adiciona evento para fechar ao clicar fora do modal
  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      closeModalFunction();
    }
  });
}

function closeModalFunction() {
  var overlay = document.getElementById("overlay");
  var modal = document.getElementById("modal");
  var botao = document.getElementById("link-over-video");

  overlay.style.opacity = 0;
  modal.style.bottom = "-100%";
  botao.style.display = "block";

  setTimeout(function () {
    overlay.style.display = "none";
    modal.classList.add("hidden");
  }, 300);

  // Remove eventos para evitar vazamento de memória
  var closeModalButton = document.getElementById("close-modal");
  closeModalButton.removeEventListener("click", closeModalFunction);

  var overlayClick = document.getElementById("overlay");
  overlayClick.removeEventListener("click", function (event) {
    if (event.target === overlayClick) {
      closeModalFunction();
    }
  });
}
