
// js/igc-autologin.js
(function tentarAutoLogin() {
  const senhaSalva = localStorage.getItem("IGC_SENHA");
  if (!senhaSalva) return;

  const campoSenha = document.getElementById("senhaLogin");
  if (!campoSenha) return;

  campoSenha.value = senhaSalva;

  // espera a função login existir
  if (typeof login === "function") {
    login();
  } else {
    // tenta novamente em 300ms
    setTimeout(tentarAutoLogin, 300);
  }
})();
