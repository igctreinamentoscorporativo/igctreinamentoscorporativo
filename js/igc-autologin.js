// js/igc-autologin.js
(function () {
  // aguarda DOM
  document.addEventListener("DOMContentLoaded", () => {
    try {
      const senhaSalva = localStorage.getItem("IGC_SENHA");
      if (!senhaSalva) return;

      const campoSenha = document.getElementById("senhaLogin");
      if (!campoSenha) return;

      // se já tem algo digitado, não sobrescreve
      if (campoSenha.value.trim()) return;

      campoSenha.value = senhaSalva;

      // pequena espera para garantir que a função login exista
      setTimeout(() => {
        if (typeof login === "function") {
          login();
        }
      }, 300);

    } catch (e) {
      console.warn("AutoLogin IGC falhou:", e);
    }
  });
})();
