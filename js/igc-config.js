// js/igc-config.js

window.IGC_CONFIG = {
  APPS_SCRIPT_BASE:
    "https://script.google.com/macros/s/AKfycbwhCqi0nUHYEo3WIcz1w3yCNn1PQpDILsg_hDyq-PUzwzOeYbfMlqwoZYcRQErOg332BQ/exec",

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
