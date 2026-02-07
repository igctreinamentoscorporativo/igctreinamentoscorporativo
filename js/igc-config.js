// js/igc-config.js

window.IGC_CONFIG = {
  APPS_SCRIPT_BASE:
    "https://script.google.com/macros/s/AKfycby5QMCXGXIJXlRqN-k31YY4Vlv4K4I4aFKmfGeaFp30uu8ohFiwFU76o5LhHcj3FwExUA/exec",

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
