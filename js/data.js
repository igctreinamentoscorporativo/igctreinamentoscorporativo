/* ============================================================
   CONFIGURAÇÕES GERAIS
   ============================================================ */

// Número fixo do WhatsApp da farmácia (formato internacional, sem +)
const WHATSAPP_NUMERO = "5541996272504";

/* ============================================================
   CATEGORIAS
   ============================================================ */

const categorias = [

   {
    id: "inicio",
    nome: "#",
    nomeMenu: "Início",
    mostrarNoMenu: true
  },
  {
    id: "pnl",
    nome: "Treinamentos em PNL",
    nomeMenu: " Formação em PNL",
    mostrarNoMenu: true,
    visivel: true
  },
  {
    id: "oratoria",
    nome: "Treinamentos em Oratória",
    nomeMenu: "Treinamento em Oratória",
    mostrarNoMenu: false,
    visivel: false 
  },
  {
    id: "workshopepalestas",
    nome: "Worshop e Palestra",
    nomeMenu: "Worshop e Palestra",
    mostrarNoMenu: false,
    visivel: false
  },

/* 🔽 BLOCO INSTITUCIONAL (ÂNCORA) */
  {
    id: "equipe-igc",
    nome: "Nossa Equipe",
    nomeMenu: "Nossa Equipe",
    mostrarNoMenu: true
  },

   /* 🔽 BLOCO INSTITUCIONAL (ÂNCORA) */
  {
    id: "historia-igc",
    nome: "Nossa História",
    nomeMenu: "Nossa História",
    mostrarNoMenu: true
  }

 
   
];

/* ============================================================
   PRODUTOS
   ============================================================ */

const produtos = [
  {
    id: "1",
    nome: "Formação Practitioner em PNL – Curitiba",
    categoria: "pnl",
    preco: 1997.00,
    imagem: "assets/img/PNLCURITIBA03.jpeg",
    videos: [
      "assets/videos/PNLIMERSAO.mp4"
    ],
    descricao: {
      resumo: `
   
      <p>Aprenda técnicas de comunicação, influência e controle emocional usadas por líderes e negociadores de alto desempenho.</p>
             
       `,


accordion: [


{
      titulo: "🎓 O que está incluso na formação",
      conteudo: `
       
<p>✔ 20 horas de treinamento intensivo em PNL</p>
<p>✔ Certificação internacional Practitioner em PNL</p>
<p>✔ Material didático exclusivo</p>
<p>✔ Exercícios práticos supervisionados</p>
<p>✔ Técnicas aplicáveis em comunicação, liderança e negociação</p>
<p>✔ Networking com participantes da formação</p>
<p>✔ Acesso a metodologia aplicada há mais de 20 anos</p>

 
      `
    },


 
    {
      titulo: "🙋 Essa formação é para você se",
      conteudo: `
       
      
<p>🌟 quer melhorar comunicação</p>
<p>🌟 quer desenvolver inteligência emocional</p>
<p>🌟 quer aumentar resultados profissionais</p>
<p>🌟 quer romper padrões limitantes que te impedem de evoluir</p>
<p>🌟 quer aprender técnicas reais de influência</p>
<p>🌟 quer aplicar PNL no seu trabalho, na liderança ou nos relacionamentos pessoais</p>

     
      `
    },


   
    {
      titulo: "🧠 O que você vai aprender",
      conteudo: `
     
      
<p>✔️ Comunicação poderosa</p>
<p>✔️ Controle emocional</p>
<p>✔️ Alta performance</p>
<p>✔️ Como interpretar e ajustar a sua linguagem interna</p>
<p>✔️ Técnicas de comunicação eficaz e persuasiva</p>
<p>✔️ Como reconhecer e modificar padrões limitantes</p>
<p>✔️ Como construir confiança instantânea em si mesmo</p>
<p>✔️ Estratégias de influência sem manipulação</p>
<p>✔️ Ferramentas práticas para situações reais</p>
<p>✔️ Comportamento emocional estável sob pressão</p>

<br>
<p><strong>É uma formação completa, aplicada e orientada à ação.</strong></p>

   
      `
    },

    {
      titulo: "💡Benefícios futuros",
      conteudo: `
      
      
      
    <em>Imagine daqui a algumas semanas:</em>
<br>
<br>
✨ Você se comunicando com muito mais segurança
<br>
✨ Tomando decisões com clareza
<br>
✨ Influenciando pessoas de forma natural
<br>
✨ Conduzindo conversas difíceis com equilíbrio emocional
<br>
✨ Percebendo oportunidades que antes passavam despercebidas
<br>
<br>


<b>Isso não é motivação momentânea.</b>
<br>
<strong>É uma habilidade que você leva para toda a vida.</strong>
<br>  

     
      `
    },




  {
      titulo: "🙋Quem participa desta formação",
      conteudo: `
  

✔️ Profissionais de vendas
<br>
✔️ Líderes e gestores
<br>
✔️ Empreendedores
<br>
✔️ Profissionais da área de desenvolvimento humano
<br>
✔️ Pessoas que desejam evoluir comunicação e inteligência emocional
<br>
     
      `
    },  




{
      titulo: "🫶 Por que essa formação é poderosa",
      conteudo: `
      
 

<p>✔️ Três dias intensivos de imersão prática em PNL</p>
<p>✔️ Certificação Internacional com carga horária oficial de 20h</p> 
<p>✔️ Metodologia apoiada nas bases da PNL moderna</p>
<p>✔️ Conteúdo aplicável desde o primeiro módulo</p>
<p>✔️ Ferramentas práticas, não apenas teoria</p>
<p>✔️ Foco em mudança comportamental real</p>
<p>✔️ Resultados visíveis na sua vida e no seu entorno</p>
<p>✔️ Registro IGC-MEC no certificado</p>
<p>✔️ Validação online via QR Code</p>
<p>✔️ Atividades práticas individuais e em grupo com alto impacto transformacional</p>

<br>
<br>
<p><strong>PNL não muda apenas o que você sabe.</strong>
<br>
<strong>PNL muda o que você faz.</strong></p>
<br>  
     
     
      `
    },


   

{
      titulo: "📌 Onde vai aconter o treinamento",
      conteudo: `
     


<strong>📍 Local:</strong> Curitiba-PR – Del Rey Hotel
<br>
<strong>📅 Datas e formato:</strong> Sexta-feira – 10/04/2026 das 19h às 22h (online – grupo fechado)
<br>
Sábado – 11/04/2026 das 09h às 19h (presencial – imersivo)
<br>
Domingo – 12/04/2026 das 09h às 19h (presencial – imersivo)
<br><br>

<strong>Vagas limitadas para garantir profundidade e acompanhamento real.</strong>
<br>
Após o preenchimento das vagas, as inscrições serão encerradas.
<br>

     
      `
    },

   





{
      titulo: "👨 Quem conduz a formação",
      conteudo: `
     


<strong>Dr. Paulo Takahashi</strong> é perito em Programação Neurolinguística
com mais de 20 anos de experiência em desenvolvimento humano no Brasil, Japão e Paraguai.
<br>
Sua metodologia integra PNL, comportamento e comunicação estratégica,
com aplicação prática e foco em transformação real.
<br><br>
<strong>Você não aprende apenas teoria.</strong>
<strong>Você aprende com quem aplica há décadas.</strong>
<br>

<strong>As vagas são limitadas.</strong>
<br><br>
Se você deseja participar desta turma em Curitiba,
essa é a sua oportunidade.
<br>
<strong>Garanta sua inscrição agora.</strong>
<br>

     
      `
    },




{
      titulo: "💬 Dúvidas frequentes",
      conteudo: `
     


<strong>Será que eu vou conseguir acompanhar?</strong>
<br>
Sim.
<br>
👉 A formação é estruturada para dar suporte passo a passo, para todos os níveis — iniciantes ou experientes.
<br>
<br>

<strong>Isso é apenas motivacional?</strong>
<br>
Não.
<br>
👉 Motivação passa…
<br>
👉 PNL é técnica + aplicação + transformação comportamental real.
<br>
<br>

<strong>Preciso de experiência anterior?</strong>
<br>
Não.
<br>
👉 Você aprende tudo desde as bases até aplicações avançadas.
<br>
<br>

<strong>Isso traz resultados práticos?</strong>
<br>
Sim.
<br>
👉 Todas as ferramentas podem ser usadas imediatamente no seu dia-a-dia — trabalho, carreira, relações e liderança.
<br>


     
      `
    } 
 
  ],


          
       oQueE: `

      
      `,      

       
      composicao: `

 
      `,
      
       comoUsar: `

      
      `,
      advertencias: `


      `
    },


 configuracoes: {
  mostrarNome: true,
  mostrarPreco: true,
  mostrarResumo: true,
  cta: {
    mostrar: true,
    texto: "Comprar com desconto",
    link: "https://igctreinamentoscorporativo.com.br/sistema/pnlcuritiba/inscricaopelosite.html"
  }
},

depoimentos: {
  mostrar: true,
  autoplay: false, 
  videos: [
    "BEV6upQhPEA",
    "7uC4pstQS4Y",
    "Fu-WNt6muDc",
    "PQn3T-R6BmQ",
    "nyRvRtNetrA",
    "DZR50Zx1mGU"
     
  ]
},

clientes: {
  mostrar: true,
  logos: [
    "assets/img/depoimentos/2.jpg",
    "assets/img/depoimentos/3.jpg",
    "assets/img/depoimentos/4.jpg",
    "assets/img/depoimentos/5.jpg",
    "assets/img/depoimentos/6.jpg",
    "assets/img/depoimentos/7.jpg",
    "assets/img/depoimentos/8.jpg",
    "assets/img/depoimentos/9.jpg"
  ]
},

videoPrincipal: {
  mostrar: false,
  youtubeId: "FU66p66t4ag"
},

ofertaRelampago: {
  mostrar: true,
  delaySegundos: 3,
  tempoMinutos: 15,
  diasParaReexibir: 7, // depois de 7 dias pode aparecer de novo se 0 então sempre mostra 
  titulo: "🎉 PARABÉNS!<br>você desbloqueou<br>🔥 70% OFF + Bônus Grátis<br>📘 eBook Reprogramação de Performance Mental",         // "🎉 Parabéns! Oferta Única!<br>Seja um Practitioner em Programação Neurolinguística",
  subtitulo: "🚀<strong> Mais de 4.327 alunos já se certificaram</strong>",            //2º Lote. Exclusivo para esta página!
  mostrarPrecos: false,
  mostrarParcelamento: false,
  valorDe: 1997,
  valorPor: 697,
  
   // 🔥 NOVO BLOCO
  parcelamento: { 
  
     texto: "🔥Super Desconto + 💎Bônus Grátis"                    //Apenas 12x de R$ 61,89
  },
   
  textoBotao: "🎁 LIBERAR MEU DESCONTO DE 70%<br><span class='texto-botao-extra'>Leva menos de 17 segundos</span>",
  link: "https://www.igctreinamentoscorporativo.com.br/sistema/pnlcuritiba/receberbonus.html",           // "https://www.igctreinamentoscorporativo.com.br/sistema/pnlcuritiba/inscricao-ads-oferta-unica.html",

  
},


destaque: true,
mostrarlancamento: false,
mostrarVideo: false,
textoParcelamento: "<del><strong>1º Lote: esgotado</strong></del><br><strong>2º Lote:</strong> restam poucas vagas<br><strong>Pagamento facilitado</strong>"

// <strong>Ou Valor especial para:</strong><br><del><strong>1º Lote:</strong> R$ 497,00 até 28/02</del><br><strong>2º Lote:</strong> R$ 797,00 até 07/03<br><strong>3º Lote:</strong> R$ 997,00 até 14/03<br><strong>4º Lote:</strong> R$ 1197,00 até 28/03<br><strong>Pagamento facilitado</strong>"

     
    },






















  id: "2",
    nome: "Formação Practitioner em PNL – Maringá",
    categoria: "pnl",
    preco: 997.00,
    imagem: "assets/img/PNLMARINGA01.jpeg",
    videos: [
      "assets/videos/PNLIMERSAO.mp4"
    ],
    descricao: {
      resumo: `
   
      <p>Aprenda técnicas de comunicação, influência e controle emocional usadas por líderes e negociadores de alto desempenho.</p>
             
       `,


accordion: [


{
      titulo: "🎓 O que está incluso na formação",
      conteudo: `
       
<p>✔ 20 horas de treinamento intensivo em PNL</p>
<p>✔ Certificação internacional Practitioner em PNL</p>
<p>✔ Material didático exclusivo</p>
<p>✔ Exercícios práticos supervisionados</p>
<p>✔ Técnicas aplicáveis em comunicação, liderança e negociação</p>
<p>✔ Networking com participantes da formação</p>
<p>✔ Acesso a metodologia aplicada há mais de 20 anos</p>

 
      `
    },


 
    {
      titulo: "🙋 Essa formação é para você se",
      conteudo: `
       
      
<p>🌟 quer melhorar comunicação</p>
<p>🌟 quer desenvolver inteligência emocional</p>
<p>🌟 quer aumentar resultados profissionais</p>
<p>🌟 quer romper padrões limitantes que te impedem de evoluir</p>
<p>🌟 quer aprender técnicas reais de influência</p>
<p>🌟 quer aplicar PNL no seu trabalho, na liderança ou nos relacionamentos pessoais</p>

     
      `
    },


   
    {
      titulo: "🧠 O que você vai aprender",
      conteudo: `
     
      
<p>✔️ Comunicação poderosa</p>
<p>✔️ Controle emocional</p>
<p>✔️ Alta performance</p>
<p>✔️ Como interpretar e ajustar a sua linguagem interna</p>
<p>✔️ Técnicas de comunicação eficaz e persuasiva</p>
<p>✔️ Como reconhecer e modificar padrões limitantes</p>
<p>✔️ Como construir confiança instantânea em si mesmo</p>
<p>✔️ Estratégias de influência sem manipulação</p>
<p>✔️ Ferramentas práticas para situações reais</p>
<p>✔️ Comportamento emocional estável sob pressão</p>

<br>
<p><strong>É uma formação completa, aplicada e orientada à ação.</strong></p>

   
      `
    },

    {
      titulo: "💡Benefícios futuros",
      conteudo: `
      
      
      
    <em>Imagine daqui a algumas semanas:</em>
<br>
<br>
✨ Você se comunicando com muito mais segurança
<br>
✨ Tomando decisões com clareza
<br>
✨ Influenciando pessoas de forma natural
<br>
✨ Conduzindo conversas difíceis com equilíbrio emocional
<br>
✨ Percebendo oportunidades que antes passavam despercebidas
<br>
<br>


<b>Isso não é motivação momentânea.</b>
<br>
<strong>É uma habilidade que você leva para toda a vida.</strong>
<br>  

     
      `
    },




  {
      titulo: "🙋Quem participa desta formação",
      conteudo: `
  

✔️ Profissionais de vendas
<br>
✔️ Líderes e gestores
<br>
✔️ Empreendedores
<br>
✔️ Profissionais da área de desenvolvimento humano
<br>
✔️ Pessoas que desejam evoluir comunicação e inteligência emocional
<br>
     
      `
    },  




{
      titulo: "🫶 Por que essa formação é poderosa",
      conteudo: `
      
 

<p>✔️ Três dias intensivos de imersão prática em PNL</p>
<p>✔️ Certificação Internacional com carga horária oficial de 20h</p> 
<p>✔️ Metodologia apoiada nas bases da PNL moderna</p>
<p>✔️ Conteúdo aplicável desde o primeiro módulo</p>
<p>✔️ Ferramentas práticas, não apenas teoria</p>
<p>✔️ Foco em mudança comportamental real</p>
<p>✔️ Resultados visíveis na sua vida e no seu entorno</p>
<p>✔️ Registro IGC-MEC no certificado</p>
<p>✔️ Validação online via QR Code</p>
<p>✔️ Atividades práticas individuais e em grupo com alto impacto transformacional</p>

<br>
<br>
<p><strong>PNL não muda apenas o que você sabe.</strong>
<br>
<strong>PNL muda o que você faz.</strong></p>
<br>  
     
     
      `
    },


   

{
      titulo: "📌 Local do evento",
      conteudo: `
     


<strong>📍 Local:</strong> Maringá-PR – Golden Ingá Hotel
<br>
<strong>📅 Datas e formato:</strong> Sexta-feira – 15/05/2026 das 19h às 22h (online – grupo fechado)
<br>
Sábado – 16/05/2026 das 09h às 19h (presencial – imersivo)
<br>
Domingo – 17/05/2026 das 09h às 19h (presencial – imersivo)
<br><br>

<strong>Vagas limitadas para garantir profundidade e acompanhamento real.</strong>
<br>
Após o preenchimento das vagas, as inscrições serão encerradas.
<br>

     
      `
    },

   





{
      titulo: "👨 Quem conduz a formação",
      conteudo: `
     


<strong>Dr. Paulo Takahashi</strong> é perito em Programação Neurolinguística
com mais de 20 anos de experiência em desenvolvimento humano no Brasil, Japão e Paraguai.
<br>
Sua metodologia integra PNL, comportamento e comunicação estratégica,
com aplicação prática e foco em transformação real.
<br><br>
<strong>Você não aprende apenas teoria.</strong>
<strong>Você aprende com quem aplica há décadas.</strong>
<br>

<strong>As vagas são limitadas.</strong>
<br><br>
Se você deseja participar desta turma em Curitiba,
essa é a sua oportunidade.
<br>
<strong>Garanta sua inscrição agora.</strong>
<br>

     
      `
    },




{
      titulo: "💬 Dúvidas frequentes",
      conteudo: `
     


<strong>Será que eu vou conseguir acompanhar?</strong>
<br>
Sim.
<br>
👉 A formação é estruturada para dar suporte passo a passo, para todos os níveis — iniciantes ou experientes.
<br>
<br>

<strong>Isso é apenas motivacional?</strong>
<br>
Não.
<br>
👉 Motivação passa…
<br>
👉 PNL é técnica + aplicação + transformação comportamental real.
<br>
<br>

<strong>Preciso de experiência anterior?</strong>
<br>
Não.
<br>
👉 Você aprende tudo desde as bases até aplicações avançadas.
<br>
<br>

<strong>Isso traz resultados práticos?</strong>
<br>
Sim.
<br>
👉 Todas as ferramentas podem ser usadas imediatamente no seu dia-a-dia — trabalho, carreira, relações e liderança.
<br>


     
      `
    } 
 
  ],


          
       oQueE: `

      
      `,      

       
      composicao: `

 
      `,
      
       comoUsar: `

      
      `,
      advertencias: `


      `
    },


 configuracoes: {
  mostrarNome: true,
  mostrarPreco: true,
  mostrarResumo: true,
  cta: {
    mostrar: true,
    texto: "Comprar",
    link: "https://igctreinamentoscorporativo.com.br/sistema/pnlmaringa/inscricaopelosite.html"
  }
},

depoimentos: {
  mostrar: true,
  autoplay: false, 
  videos: [
    "BEV6upQhPEA",
    "7uC4pstQS4Y",
    "Fu-WNt6muDc",
    "PQn3T-R6BmQ",
    "nyRvRtNetrA",
    "DZR50Zx1mGU"
     
  ]
},

clientes: {
  mostrar: true,
  logos: [
    "assets/img/depoimentos/2.jpg",
    "assets/img/depoimentos/3.jpg",
    "assets/img/depoimentos/4.jpg",
    "assets/img/depoimentos/5.jpg",
    "assets/img/depoimentos/6.jpg",
    "assets/img/depoimentos/7.jpg",
    "assets/img/depoimentos/8.jpg",
    "assets/img/depoimentos/9.jpg"
  ]
},

videoPrincipal: {
  mostrar: false,
  youtubeId: "FU66p66t4ag"
},

ofertaRelampago: {
  mostrar: false,
  delaySegundos: 3,
  tempoMinutos: 15,
  diasParaReexibir: 7, // depois de 7 dias pode aparecer de novo se 0 então sempre mostra 
  titulo: "🎉 PARABÉNS!<br>você desbloqueou<br>🔥 70% OFF + Bônus Grátis<br>📘 eBook Reprogramação de Performance Mental",         // "🎉 Parabéns! Oferta Única!<br>Seja um Practitioner em Programação Neurolinguística",
  subtitulo: "🚀<strong> Mais de 4.327 alunos já se certificaram</strong>",            //2º Lote. Exclusivo para esta página!
  mostrarPrecos: false,
  mostrarParcelamento: false,
  valorDe: 1997,
  valorPor: 697,
  
   // 🔥 NOVO BLOCO
  parcelamento: { 
  
     texto: "🔥Super Desconto + 💎Bônus Grátis"                    //Apenas 12x de R$ 61,89
  },
   
  textoBotao: "🎁 LIBERAR MEU DESCONTO DE 70%<br><span class='texto-botao-extra'>Leva menos de 17 segundos</span>",
  link: "https://www.igctreinamentoscorporativo.com.br/sistema/pnlcuritiba/receberbonus.html",           // "https://www.igctreinamentoscorporativo.com.br/sistema/pnlcuritiba/inscricao-ads-oferta-unica.html",

  
},


destaque: true,
mostrarlancamento: false,
mostrarVideo: false,
textoParcelamento: "<strong>Vagas Limitadas</strong>"


//<del><strong>1º Lote: esgotado</strong></del><br><strong>2º Lote:</strong> restam poucas vagas<br><strong>Pagamento facilitado</strong>

// <strong>Ou Valor especial para:</strong><br><del><strong>1º Lote:</strong> R$ 497,00 até 28/02</del><br><strong>2º Lote:</strong> R$ 797,00 até 07/03<br><strong>3º Lote:</strong> R$ 997,00 até 14/03<br><strong>4º Lote:</strong> R$ 1197,00 até 28/03<br><strong>Pagamento facilitado</strong>"

     
    },




   
   

     
   
];


/* ============================================================
   INTEGRANTES DA EQUIPE IGC
   ============================================================ */

const equipe = [
  {
    nome: "Dr. Paulo Takahashi",
    imagem: "assets/img/equipe/paulo.jpg",
    texto: "Dr. Paulo Takahashi, é Consultor Empresarial,  Master Trainer, Especialista em Alta-Performance. Atua há mais de 20 anos transformando e desenvolvendo a vida de pessoas, equipes e empresas. É um dos responsáveis pelo desenvolvimento da Programação Neurolinguística (PNL) no Brasil e Japão.",
    link: "https://paulotakahashi.com.br"
  },
  {
    nome: "Dr. William Brioli",
    imagem: "assets/img/equipe/william.jpg",
    texto: "Especialista em comunicação, oratória e treinamentos corporativos de alto impacto. Há 22 anos dedica sua carreira ao desenvolvimento humano — ajudando pessoas, casais, líderes e equipes corporativas a compreenderem suas emoções, fortalecerem seus vínculos e alcançarem alta performance com equilíbrio entre vida e trabalho.",
    link: "https://williambrioli.com.br"
  },

     
  {
    nome: " Prof. Francisco Arcanjo",
    imagem: "assets/img/equipe/francisco.jpg",
    texto: "Como treinador e palestrante, ajuda pessoas a desenvolverem uma comunicação eficaz em todos os âmbitos da vida, impulsionando o crescimento pessoal e profissional. É criador dos métodos COES e EVOLUI",
    link: "https://franciscoarcanjo.com.br/"
  }
];







window.produtos = produtos;

/* ============================================================
   OBSERVAÇÕES IMPORTANTES
   ============================================================ */

/*
- Para adicionar uma nova categoria:
  1) Crie um novo objeto em `categorias`
  2) Use o mesmo `id` no campo `categoria` do produto

- Para adicionar um novo produto:
  1) Copie um bloco dentro do array `produtos`
  2) Altere id, nome, categoria, preco, descricao e imagem

- Para exibir no banner de destaques:
  destaque: true

- As imagens devem estar na pasta /assets/img/
*/

