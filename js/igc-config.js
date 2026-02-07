// js/igc-config.js
window.IGC_CONFIG = {
  // 🔹 BASE PRINCIPAL (HTML / navegação / apps)
  APPS_SCRIPT_BASE:
    "https://script.google.com/macros/s/AKfycbxN8gBrgbNAOS1s_nRfm-pIKgo7g3fhWgfYm6VwRV1PDVFlS507uWt9nKowZ4MYoKKXWw/exec",

  // 🔹 BASE EXCLUSIVA PARA FETCH / JSON (CORS OK)
  APPS_SCRIPT_API:
    "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLg6PXnRNYBKx7snVoCVDLkympEltXzX3CXQd68hcpCWs6njTX73f1Xp8FWSKpTqHT_LqAFRJPQqfnQ-F_AhbALLWU8eA0RhPyG8hiTw1-bE9STYMBHW4MkuOHNXiC0zOazNVMWDo2UDxBNcLDCgd1PcsgzclGGbexE8QqyoPOn_cGx1uoKOREouqVRdSIF8a5oSZ-C-jy_6aeACMPMnANSmcCtRpLT7UGgvi5zK4rc8aeEC9RvVv8UqLM9xWeMv60A4iyJz_MEMCMnRY9JbOozSanfzSZ-m5jnDrB6J&lib=ML1zOo_OUUflxdLMuXK8vDNaDE_gWchIX",

  APPS: {
    ADMIN: "admin",
    TOKEN: "token",
    LOGIN: "login"
  }
};

// helpers
window.IGC = {
  app(name) {
    return `${window.IGC_CONFIG.APPS_SCRIPT_BASE}?app=${window.IGC_CONFIG.APPS[name]}`;
  },

  api(params = {}) {
    const url = new URL(window.IGC_CONFIG.APPS_SCRIPT_API);
    Object.entries(params).forEach(([k, v]) => {
      url.searchParams.append(k, v);
    });
    return url.toString();
  }
};
