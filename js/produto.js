// ================================
// PÁGINA DE PRODUTO
// ================================

// pega o id da URL
const params = new URLSearchParams(window.location.search);
const produtoId = params.get("id");

// busca o produto
const produto = produtos.find(p => p.id == produtoId);


if (!produto) {
  document.getElementById("produto-topo").innerHTML =
    "<p>Produto não encontrado.</p>";
} else {
  montarProduto(produto);
  
}

function montarProduto(produto) {

  // ----- TOPO DO PRODUTO -----
  document.getElementById("produto-topo").innerHTML = `
    <div class="produto-card">

      <div class="produto-imagem">
      
      ${produto.mostrarlancamento ? `
    <span class="badge-lancamento-produto">LANÇAMENTO</span>
  ` : ""}
        <img src="${produto.imagem}" alt="${produto.nome}">
        ${produto.mostrarVideo && produto.videos?.length ? `
          <button class="produto-video-btn" onclick="abrirVideo('${produto.videos[0]}')">
  <video
    src="${produto.videos[0]}"
    muted
    autoplay
    loop
    playsinline
  ></video>
  <span class="play-indicador">▶</span>
</button>
        ` : ""}
      </div>

     <div class="produto-info">

  ${produto.configuracoes?.mostrarNome !== false
  ? `<h1>${produto.nome}</h1>`
  : ``}

  ${produto.configuracoes?.mostrarResumo !== false
  ? `<p class="produto-resumo">${produto.descricao.resumo}</p>`
  : ``}

  ${produto.configuracoes?.mostrarPreco !== false
  ? `<p class="produto-preco">${formatarPreco(produto.preco)}</p>`
  : ``}

  <p class="produto-parcelamento">
    ${produto.textoParcelamento || ""}
  </p>

  <!-- AÇÕES: quantidade + comprar -->
    <div class="produto-acoes">

    ${produto.configuracoes?.mostrarPreco !== false ? `
      <div class="produto-quantidade">
        <div class="produto-quantidade-anel">
          <button onclick="alterarQuantidade(-1)">−</button>
          <span id="quantidade">1</span>
          <button onclick="alterarQuantidade(1)">+</button>
        </div>
      </div>
    ` : ``}

    <button class="btn-comprar" onclick="comprarProduto()">
      ${produto.configuracoes?.mostrarPreco === false
        ? "Falar com um consultor"
        : "Reservar vaga"}
    </button>

  </div>


</div>



  `;

  // ----- DESCRIÇÃO COMPLETA -----
  if (produto.descricao?.accordion) {

  document.getElementById("produto-descricao").innerHTML =
    renderAccordion(produto.descricao.accordion);

} else {

  document.getElementById("produto-descricao").innerHTML = `
    <section>${produto.descricao.oQueE || ""}</section>
    <section>${produto.descricao.composicao || ""}</section>
    <section>${produto.descricao.comoUsar || ""}</section>
    <section>${produto.descricao.advertencias || ""}</section>
  `;

}


// 🔽 AQUI VOCÊ CHAMA OS BLOCOS ASSISTIVOS
  renderBlocosAssistivos(produto);
  







  
// =============================
// ACCORDION ESTÁVEL
// =============================

setTimeout(() => {

  const items = document.querySelectorAll(".accordion-item-premium");

  items.forEach(item => {

    const header = item.querySelector(".accordion-header-premium");
    const content = item.querySelector(".accordion-content-premium");

    header.addEventListener("click", () => {

      const aberto = item.classList.contains("active");

      const posAntes = header.getBoundingClientRect().top;

      items.forEach(i => {

        const c = i.querySelector(".accordion-content-premium");

        i.classList.remove("active");
        c.style.height = "0px";

      });

      if (!aberto) {

        item.classList.add("active");

        const alturaReal = content.scrollHeight;

        content.style.height = alturaReal + "px";

      }

      requestAnimationFrame(() => {

        const posDepois = header.getBoundingClientRect().top;
        const diff = posDepois - posAntes;

        window.scrollBy(0, diff);

      });

    });

  });

},200);

  





  


    

// ================= CTA DINÂMICO =================
if (produto.configuracoes?.cta?.mostrar) {

  const ctaHTML = `
    <div class="cta-inscricao">
      <a href="${produto.configuracoes.cta.link}" class="btn-pre-inscricao">
        ${produto.configuracoes.cta.texto}
      </a>
    </div>
  `;

  // CTA no topo (já existente)
  document
    .getElementById("produto-topo")
    .insertAdjacentHTML("afterend", ctaHTML);

  // 🔥 CTA repetido após blocos assistivos
  document
    .getElementById("produto-blocos")
    .insertAdjacentHTML("afterend", ctaHTML);
}
// ================= FIM CTA DINÂMICO =================



// ================= INICIO VIDEO PRINCIPAL TOPO =================
if (produto.videoPrincipal?.mostrar && produto.videoPrincipal.youtubeId) {

  const section = document.createElement("section");
  section.className = "video-principal-section";

  section.innerHTML = `
    
    <h2>Seja um Practitioner em PNL</h2>

    <div class="slider-estatico">
      <div class="card depoimento-card"
           onclick="abrirModalYoutube('${produto.videoPrincipal.youtubeId}')">
        <img src="https://img.youtube.com/vi/${produto.videoPrincipal.youtubeId}/hqdefault.jpg">
      </div>
    </div>
    
  `;

  document
  .getElementById("produto-topo")
  .insertAdjacentElement("afterend", section);
    
}
  
// ================= FIM VIDEO PRINCIPAL TOPO =================  
  
  
// ================= AUTO ABRIR VÍDEO =================
if (produto.videoPrincipal?.mostrar && produto.videoPrincipal.youtubeId) {
  setTimeout(() => {
  abrirModalYoutube(produto.videoPrincipal.youtubeId);
  }, 200); // pequeno delay para carregar layout
  }


// ================= OFERTA RELÂMPAGO =================
if (produto.ofertaRelampago?.mostrar) {
  iniciarOfertaRelampago(produto.ofertaRelampago, produto.id);
}

  
}





function renderBlocosAssistivos(produto) {

  const container = document.getElementById("produto-blocos");
  container.innerHTML = "";

  // ============================
// DEPOIMENTOS (USANDO SLIDER DO INDEX)
// ============================
if (produto.depoimentos?.mostrar) {

  const videos = produto.depoimentos.videos || [];

  const section = document.createElement("section");
  section.className = "categoria-section";

  section.innerHTML = `
    <div class="container">
      <h2 style="text-align:center;">Depoimentos<span>⭐⭐⭐⭐⭐</span></h2>

      <div class="slider">
        <button class="arrow left">&#10094;</button>

        <div class="slider-track">
          ${videos.map(id => `
            <div class="card depoimento-card"
                 onclick="abrirModalYoutube('${id}')">
              <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg">
            </div>
          `).join("")}
        </div>

        <button class="arrow right">&#10095;</button>
      </div>

      <div class="slider-dots"></div>
    </div>
  `;

  container.appendChild(section);

  // 🔥 chama a MESMA função do index
setTimeout(() => {
  document.querySelectorAll(".slider").forEach(slider => {
    if (!slider.dataset.inicializado) {
      slider.dataset.inicializado = "true";

      const track = slider.querySelector(".slider-track");
      const left = slider.querySelector(".arrow.left");
      const right = slider.querySelector(".arrow.right");
      const dots = slider.parentElement.querySelector(".slider-dots");

      if (!track) return;

      const cards = [...track.children];
      if (!cards.length) return;

      const cardWidth = cards[0].offsetWidth + 16;
      const visible =
        window.innerWidth >= 1024 ? Math.min(4, cards.length) : 1;

      const pages = Math.ceil(cards.length / visible);
      let page = 0;

      if (dots) {
        dots.innerHTML = "";

        for (let i = 0; i < pages; i++) {
          const dot = document.createElement("span");
          if (i === 0) dot.classList.add("active");
          dots.appendChild(dot);

          dot.onclick = () => {
            page = i;
            update();
          };
        }
      }

      function update() {
        track.scrollTo({
          left: page * cardWidth * visible,
          behavior: "smooth"
        });

        if (dots) {
          [...dots.children].forEach((d, i) =>
            d.classList.toggle("active", i === page)
          );
        }
      }

      left?.addEventListener("click", () => {
        page = Math.max(0, page - 1);
        update();
      });

      right?.addEventListener("click", () => {
        page = Math.min(pages - 1, page + 1);
        update();
      });

      if (window.innerWidth < 1024 && dots) {
        track.addEventListener("scroll", () => {
          const scrollLeft = track.scrollLeft;
          const newPage = Math.round(
            scrollLeft / (cardWidth * visible)
          );

          if (newPage !== page) {
            page = Math.min(Math.max(newPage, 0), pages - 1);

            [...dots.children].forEach((d, i) =>
              d.classList.toggle("active", i === page)
            );
          }
        });
      }

      update();
    }
  });
}, 100);

}





  
  // ============================
// CLIENTES
// ============================
if (produto.clientes?.mostrar) {

  const logos = produto.clientes.logos || [];

  const section = document.createElement("section");
  section.className = "categoria-section";

  section.innerHTML = `
    <div class="container">
      <h2 style="text-align:center;">Google<span>⭐⭐⭐⭐⭐</span></h2>

      <div class="slider">
        <button class="arrow left">&#10094;</button>

        <div class="slider-track">
          ${logos.map(logo => `
            <div class="card">
              <img src="${logo}" style="height:200px; object-fit:contain;" />
            </div>
          `).join("")}
        </div>

        <button class="arrow right">&#10095;</button>
      </div>

      <div class="slider-dots"></div>
    </div>
  `;

  container.appendChild(section);
}

}



function abrirModalYoutube(id) {

  const modal = document.createElement("div");
  modal.className = "video-modal active";

  modal.innerHTML = `
    <div class="video-modal-content">
      <button class="video-modal-close">×</button>
      <div class="video-modal-frame">
        <iframe 
          src="https://www.youtube.com/embed/${id}?autoplay=1"
          allow="autoplay; encrypted-media"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".video-modal-close")
    .addEventListener("click", () => modal.remove());

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
  });
}










// ================================
// OFERTA RELÂMPAGO PROFISSIONAL
// ================================

// ================================
// OFERTA RELÂMPAGO COM TIMESTAMP REAL
// ================================

function iniciarOfertaRelampago(config, produtoId) {

  const storageKeyExpira = "ofertaExpira_" + produtoId;
  const storageKeyBloqueio = "ofertaBloqueio_" + produtoId;

  setTimeout(() => {

    const agora = Date.now();

    // 🔒 Verifica se está bloqueado
    const bloqueioSalvo = localStorage.getItem(storageKeyBloqueio);

    if (bloqueioSalvo) {
      const desbloqueiaEm = parseInt(bloqueioSalvo);

      if (agora < desbloqueiaEm) {
        return; // ainda bloqueado
      } else {
        // desbloqueou
        localStorage.removeItem(storageKeyBloqueio);
        localStorage.removeItem(storageKeyExpira);
      }
    }

    let expiraEm;
    const salvo = localStorage.getItem(storageKeyExpira);

    

    // 🔄 Se já existe timestamp salvo
    if (salvo && !isNaN(salvo)) {
      expiraEm = parseInt(salvo);
    } else {
      // 🆕 Cria novo timestamp
      expiraEm = Date.now() + (config.tempoMinutos * 60 * 1000);
      localStorage.setItem(storageKeyExpira, expiraEm);
    }

    const tempoRestanteMs = expiraEm - Date.now();

    // ⛔ Se já expirou antes de renderizar
    if (tempoRestanteMs <= 0) {
  aplicarBloqueio(config, produtoId);
  return;
}

    const banner = document.createElement("div");
    banner.className = "oferta-relampago-banner";

    banner.innerHTML = `
      <div class="oferta-conteudo">
        <strong>${config.titulo}</strong>

        <div style="font-size:14px;margin-top:4px;">
          ${config.subtitulo || ""}
        </div>

       ${config.mostrarPrecos ? `

<div class="oferta-precos">

  <div class="preco-linha-principal">

    <div class="preco-de">
      ${formatarPreco(config.valorDe)}
    </div>

    <div class="preco-por">
      <span class="texto-por">por</span>
      ${formatarPreco(config.valorPor)}
    </div>

  </div>

  <div class="preco-off">
    ${formatarPreco(config.valorDe - config.valorPor)} OFF
  </div>

</div>

` : ""}

${config.mostrarParcelamento ? `

<div class="preco-parcelamento" style="margin-top:8px;">
  ${config.parcelamento?.texto || ""}
</div>

` : ""}

        <div class="oferta-tempo">
          ⏱ Oferta expira em: <span id="contador-oferta"></span>
        </div>

        <a href="${config.link}" class="btn-oferta">
          ${config.textoBotao}
        </a>
      </div>
    `;

    document.body.appendChild(banner);
    ativarComportamentoMobileOferta();

    const contadorEl = document.getElementById("contador-oferta");

    const intervalo = setInterval(() => {

      const restante = expiraEm - Date.now();

      if (restante <= 0) {
        clearInterval(intervalo);
        banner.remove();
        aplicarBloqueio(config, produtoId);
        return;
      }

      const totalSegundos = Math.floor(restante / 1000);
      const minutos = Math.floor(totalSegundos / 60);
      const segundos = totalSegundos % 60;

      contadorEl.textContent =
        `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;

    }, 1000);

  }, config.delaySegundos * 1000);
}







function aplicarBloqueio(config, produtoId) {

  const dias = config.diasParaReexibir || 0;

  const storageKeyBloqueio = "ofertaBloqueio_" + produtoId;
  const storageKeyExpira = "ofertaExpira_" + produtoId;

  const agora = Date.now();

  const desbloqueiaEm = agora + (dias * 24 * 60 * 60 * 1000);

  localStorage.setItem(storageKeyBloqueio, desbloqueiaEm);
  localStorage.removeItem(storageKeyExpira);
}











// ================================
// COMPORTAMENTO MOBILE INTELIGENTE
// ================================

// ================================
// COMPORTAMENTO RESPONSIVO OFERTA
// ================================

function ativarComportamentoMobileOferta() {

  const banner = document.querySelector(".oferta-relampago-banner");
  if (!banner) return;

  let minimizado = false;

  function minimizar() {
    if (minimizado) return;
    banner.classList.add("oferta-minimizada");
    minimizado = true;
  }

  function expandir() {
    banner.classList.remove("oferta-minimizada");
    minimizado = false;
  }

  // 🔥 Desktop e Mobile
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      minimizar();
    } else {
      expandir();
    }
  });

  // Clique na bolinha para expandir
  banner.addEventListener("click", (e) => {
    if (minimizado) {
      e.stopPropagation();
      expandir();
    }
  });

}

















// ================================
// MODAL DE VÍDEO
// ================================

function abrirVideo(src) {
  const modal = document.createElement("div");
  modal.className = "produto-video-modal";

  modal.innerHTML = `
    <div class="produto-video-content">
      <button class="produto-video-close" aria-label="Fechar vídeo">✕</button>
      <video controls autoplay>
        <source src="${src}" type="video/mp4">
      </video>
    </div>
  `;

  document.body.appendChild(modal);

  const btnClose = modal.querySelector(".produto-video-close");

  // 🔹 FECHAR PELO X
  btnClose.addEventListener("click", (e) => {
    e.stopPropagation(); // 🔥 impede conflito
    modal.remove();
  });

  // 🔹 FECHAR AO CLICAR FORA
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}



// ================================
// CONTROLE DE QUANTIDADE
// ================================

let quantidadeAtual = 1;

function alterarQuantidade(valor) {

  if (produto.configuracoes?.mostrarPreco === false) {
    return;
  }

  quantidadeAtual += valor;

  if (quantidadeAtual < 1) {
    quantidadeAtual = 1;
  }

  const qtdEl = document.getElementById("quantidade");
  if (qtdEl) {
    qtdEl.textContent = quantidadeAtual;
  }
}


// ================================
// COMPRAR PRODUTO (WHATSAPP)
// ================================

function comprarProduto() {

if (produto.configuracoes?.mostrarPreco === false) {
  const mensagem =
    `Olá, quero falar com um consultor sobre o curso "${produto.nome}".`;

  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
  return;
}
  
  
  if (!produto) return;

  const valorUnitario = produto.preco;
  const quantidade = quantidadeAtual;
  const valorTotal = valorUnitario * quantidade;

  const basePath = window.location.pathname
  .split("/")
  .slice(0, -1)
  .join("/");

const linkProduto =
  `${window.location.origin}${basePath}/produto.html?id=${produto.id}`;


  const categoriaObj = categorias.find(
  c => c.id === produto.categoria
);

const nomeCategoria = categoriaObj
  ? categoriaObj.nome
  : produto.categoria;

  const mensagem =
    `Olá! Gostaria de reservar minhas vagas:%0A%0A` +
    `Produto: ${produto.nome}%0A` +
    `Categoria: ${nomeCategoria}%0A` +
    `Quantidade de vagas: ${quantidade} unidade(s)%0A` +
    `Valor unitário: ${formatarPreco(valorUnitario)}%0A` +
    `Valor total: ${formatarPreco(valorTotal)}%0A%0A` +
    `Link do produto:%0A${linkProduto}`;

  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`;
  window.open(url, "_blank");
}

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}


/* ============================================================
   MENU HAMBÚRGUER FLUTUANTE (MOBILE)
   ============================================================ */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav");
const menuOverlay = document.getElementById("menuOverlay");

menuToggle.addEventListener("click", () => {
  navMenu.classList.add("active");
});

menuOverlay.addEventListener("click", () => {
  navMenu.classList.remove("active");
  
});

/* ============================================================
   FECHAR MENU AO CLICAR EM UMA CATEGORIA (MOBILE)
   ============================================================ */

document.addEventListener("click", function (e) {
  if (e.target.closest(".nav a")) {
    navMenu.classList.remove("active");
    
  }
});

/* ============================================================
   FECHAR MENU AO CLICAR FORA (MENU HAMBÚRGUER)
   ============================================================ */

document.addEventListener("click", function (event) {
  const menu = document.querySelector(".nav");
  const botao = document.getElementById("menuToggle");

  const clicouNoMenu = menu.contains(event.target);
  const clicouNoBotao = botao.contains(event.target);

  if (!clicouNoMenu && !clicouNoBotao) {
    menu.classList.remove("active");
  }
});




/* ============================================================
   CONTRE DOS ACORDEONS DOS PRODUTOS
   ============================================================ */


function renderAccordion(itens) {

  return `
  <div class="accordion-premium">

    ${itens.map((item, i) => `
    
      <div class="accordion-item-premium">

        <button class="accordion-header-premium">
          <span>${item.titulo}</span>
          <span class="accordion-icon-premium"></span>
        </button>

        <div class="accordion-content-premium">
          <div class="accordion-inner">
            ${item.conteudo}
          </div>
        </div>

      </div>

    `).join("")}

  </div>
  `;
}
