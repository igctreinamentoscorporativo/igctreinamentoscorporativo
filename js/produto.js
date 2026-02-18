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
  document.getElementById("produto-descricao").innerHTML = `
    <section>

 
      
      <p>${produto.descricao.oQueE}</p>
    </section>

    <section>
      
      <p>${produto.descricao.composicao}</p>
    </section>

    <section>
      
      <p>${produto.descricao.comoUsar}</p>
    </section>

    <section>
      
      <p>${produto.descricao.advertencias}</p>
    </section>
  `;


// 🔽 AQUI VOCÊ CHAMA OS BLOCOS ASSISTIVOS
  renderBlocosAssistivos(produto);
  
  

// ================= CTA DINÂMICO =================
if (produto.configuracoes?.cta?.mostrar) {

  const ctaHTML = `
    <div class="cta-inscricao">
      <a href="${produto.configuracoes.cta.link}" class="btn-pre-inscricao">
        ${produto.configuracoes.cta.texto}
      </a>
    </div>
  `;

  document
    .getElementById("produto-topo")
    .insertAdjacentHTML("afterend", ctaHTML);
}
// ================= FIM CTA DINÂMICO =================

    
}





function renderBlocosAssistivos(produto) {

  const container = document.getElementById("produto-blocos");
  container.innerHTML = "";

  // ============================
  // DEPOIMENTOS
  // ============================
  if (produto.depoimentos?.mostrar) {

    const videos = produto.depoimentos.videos || [];

    const section = document.createElement("section");
    section.className = "produto-depoimentos";

    section.innerHTML = `
      <div class="institucional-header">
        <h2 class="institucional-title-center">
          O que dizem nossos alunos
        </h2>
      </div>

      <div class="depoimentos-slider">
        <div class="depoimentos-track"></div>
      </div>

      <div class="depoimentos-dots"></div>
    `;

    container.appendChild(section);

    initProdutoDepoimentos(videos);
  }





  
  // ============================
// CLIENTES
// ============================
if (produto.clientes?.mostrar) {

  const logos = produto.clientes.logos || [];

  const clientesSection = document.createElement("section");
  clientesSection.className = "produto-clientes";

  clientesSection.innerHTML = `
    <h2 class="ads-logos-title">
      Alguns de nossos clientes
    </h2>

    <div class="ads-wrapper">
      <div class="logos-track">
        ${logos.map(logo => `<img src="${logo}" />`).join("")}
      </div>
    </div>
  `;

  container.appendChild(clientesSection);
}










function initProdutoDepoimentos(videos) {

  const track = document.querySelector("#produto-blocos .depoimentos-track");
  const dots = document.querySelector("#produto-blocos .depoimentos-dots");

  if (!track || !dots) return;

  track.innerHTML = "";
  dots.innerHTML = "";

  videos.forEach(id => {

    const card = document.createElement("div");
    card.className = "depoimento-card";

    card.innerHTML = `
      <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg">
    `;

    card.onclick = () => {
      abrirModalYoutube(id);
    };

    track.appendChild(card);
  });

  const perPage = window.innerWidth >= 1024 ? 3 : 1;
  const pages = Math.ceil(videos.length / perPage);
  let page = 0;

  for (let i = 0; i < pages; i++) {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");

    dot.onclick = () => {
      page = i;
      update();
    };

    dots.appendChild(dot);
  }

  function update() {
    const cardWidth = track.children[0].offsetWidth + 24;

    track.style.transform =
      `translateX(-${page * cardWidth * perPage}px)`;

    [...dots.children].forEach((d, i) =>
      d.classList.toggle("active", i === page)
    );
  }

  update();
}





function abrirModalYoutube(id) {

  const modal = document.createElement("div");
  modal.className = "produto-video-modal";

  modal.innerHTML = `
    <div class="produto-video-content">
      <button class="produto-video-close">✕</button>
      <iframe 
        src="https://www.youtube.com/embed/${id}?autoplay=1"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".produto-video-close")
    .addEventListener("click", () => modal.remove());

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove();
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
