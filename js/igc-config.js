// js/igc-config.js

window.IGC_CONFIG = {
  APPS_SCRIPT_BASE:
    "https://script.google.com/macros/s/AKfycbzuz10GP7T-LAVj1w1Mn632apzltDIS3ar3mzs9Q8lYFCqB_K5rc4ReNP9gs4oOLDzYcg/exec",

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
