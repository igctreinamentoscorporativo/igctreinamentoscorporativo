// js/igc-config.js

window.IGC_CONFIG = {
  APPS_SCRIPT_BASE:
    "https://script.google.com/macros/s/AKfycbyKGJHQDQDXnipetwCUB9ijIO0xCsP0jcRFtgE7jERnvN-AESo4sit9SA1JTcZU9Nu7Lw/exec",

  APPS: {
    ADMIN: "admin",
    TOKEN: "token",
    LOGIN: "login"
  }
};

// 🔹 Helper global (opcional, mas profissional)
window.IGC = {
  app(name) {
    return `${window.IGC_CONFIG.APPS_SCRIPT_BASE}?app=${window.IGC_CONFIG.APPS[name]}`;
  }
};
