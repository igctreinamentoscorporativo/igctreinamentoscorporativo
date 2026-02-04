// js/igc-config.js

window.IGC_CONFIG = {
  APPS_SCRIPT_BASE:
    "https://script.google.com/macros/s/AKfycbyrhM682ZDSOtpFGR42aLXU3g9xT68Wb8N4gmPFyf1KCVvYuaSCf91SjIYeekMfbBewMg/exec",

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
