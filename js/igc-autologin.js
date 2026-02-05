function autoLoginIGC() {
  const senhaSalva = localStorage.getItem("IGC_SENHA");
  if (!senhaSalva) return;

  const campoSenha = document.getElementById("senhaLogin");
  if (!campoSenha) return;

  campoSenha.value = senhaSalva;

  setTimeout(() => {
    if (typeof login === "function") {
      login();
    }
  }, 300);
}
