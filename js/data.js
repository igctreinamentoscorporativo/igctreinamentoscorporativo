/* ============================================================
   CONFIGURAÇÕES GERAIS
   ============================================================ */

// Número fixo do WhatsApp da farmácia (formato internacional, sem +)
const WHATSAPP_NUMERO = "5518991221171";

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
    nome: "Formação em PNL Presencial em Curitiba 10 a 12 de Abril | Certificação Internacional Vagas Limitadas",
    categoria: "pnl",
    preco: 997.00,
    imagem: "assets/img/PNLCURITIBA03.jpeg",
    videos: [
      "assets/videos/PNLIMERSAO.mp4"
    ],
    descricao: {
      resumo: `
   
      <p>✔️ Condição especial para essa turma, com parcelamento facilitado até 28/02.</p>
             
       `,
      
       oQueE: `
<div class="layout-pnl">

<div class="bloco azul-claro">

<h2>PARA QUEM É ESTE TREINAMENTO?</h2>
<br>
<strong>Este curso é para você que:</strong>
<br>
<ul class="lista">
<li>Quer dominar a sua mente para tomar decisões melhores</li>
<li>Precisa influenciar e persuadir pessoas com ética e clareza</li>
<li>Busca maior performance em carreira, relações e comunicação</li>
<li>Quer romper padrões limitantes que te impedem de evoluir</li>
<li>Deseja um certificado internacional reconhecido</li>
<li>Quer aplicar PNL no seu trabalho, na liderança ou nos relacionamentos pessoais</li>
</ul>

<strong>Não é apenas mais um curso — é uma mudança de identidade.</strong>
<br>
<br>


 <p>👉 Você já se sentiu preso, sem conseguir expressar tudo o que sabe?</p>
 <p>👉 Já viu oportunidades escaparem porque você não foi ouvido?</p>
 <p>👉 Já sentiu que a sua mente poderia produzir resultados muito maiores do que ela tem entregue?</p>
<br>
<p><strong>A Programação Neurolinguística (PNL) é a ciência que revela o “manual de instruções” da sua mente, ensinando:</strong></p>
<br>
<ul class="lista">
<li>Como você percebe o mundo</li>
<li>Como processa os seus pensamentos</li>
<li>Como influencia e negocia com as suas palavras</li>
</ul>
<br>
<p>E mais — <strong>como ajustar tudo isso para alcançar resultados reais na vida e no trabalho.</strong></p>

</div>



<div class="bloco azul-claro">
<h2>🧠 O que você vai aprender?</h2>

<ul class="lista">
<li>Como interpretar e ajustar a sua linguagem interna</li>
<li>Técnicas de comunicação eficaz e persuasiva</li>
<li>Como reconhecer e modificar padrões limitantes</li>
<li>Como construir confiança instantânea em si mesmo</li>
<li>Estratégias de influência sem manipulação</li>
<li>Ferramentas práticas para situações reais</li>
<li>Comportamento emocional estável sob pressão</li>
</ul>

<p><strong>É uma formação completa, aplicada e orientada à ação.</strong></p>

</div>


<div class="bloco azul-claro">
<h2>💡Benefícios</h2> 
<em>Imagine daqui a 30 dias:</em>
<br>
<br>
✨ Sua comunicação mais clara, precisa e assertiva
<br>
✨ Você entendendo as motivações de quem está à sua frente
<br>
✨ Liderar com impacto — não apenas autoridade
<br>
✨ Resolver conflitos com precisão e equilíbrio emocional
<br>
✨ Conseguir conexões que antes pareciam impossíveis
<br>
<br>


<b>Isso não é motivação passageira...</b>
<br>
<strong>É método aplicado com base em ciência comportamental.</strong>
<br>
</div>


<div class="bloco azul-claro">
<h2>🫶 Por que essa Formação é poderosa?</h2>

<ul class="lista">
<li>Três dias intensivos de imersão prática em PNL</li>
<li>Certificação Internacional com carga horária oficial de 20h</li> 
<li>Metodologia apoiada nas bases da PNL moderna</li>
<li>Conteúdo aplicável desde o primeiro módulo</li>
<li>Ferramentas práticas, não apenas teoria</li>
<li>Foco em mudança comportamental real</li>
<li>Resultados visíveis na sua vida e no seu entorno</li>
<li>Registro IGC-MEC no certificado</li>
<li>Validação online via QR Code</li>
<li>Atividades práticas individuais e em grupo com alto impacto transformacional</li>
</ul>

<p><strong>PNL não muda apenas o que você sabe.</strong>
<br>
<strong>PNL muda o que você faz.</strong></p>
<br>
</div>

<div class="bloco azul-claro">
<h2>📍 Como será a Formação?</h2>
<strong>Local:</strong> Curitiba-PR – Del Rey Hotel
<br>
<strong>Datas e formato:</strong> Sexta-feira – 10/04/2026 das 19h às 22h (online – grupo fechado)
<br>
Sábado – 11/04/2026 das 09h às 19h (presencial – imersivo)
<br>
Domingo – 12/04/2026 das 09h às 19h (presencial – imersivo)
<br><br>

<strong>Vagas limitadas para garantir profundidade e acompanhamento real.</strong>
<br>
Após o preenchimento das vagas, as inscrições serão encerradas.
<br>
</div>
</div>

      
      `,      

       
      composicao: `

<div class="layout-pnl">
<div class="bloco escuro">
<h2>👨‍🏫 Quem conduz a Formação?</h2>


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
 </div>  
 </div>
 
      `,
      
       comoUsar: `
<div class="layout-pnl">
<div class="bloco azul-claro">

<h2>Dúvidas❓</h2>

<strong>Será que eu vou conseguir acompanhar?</strong>
<br>
Sim.
<br>
A formação é estruturada para dar suporte passo a passo, para todos os níveis — iniciantes ou experientes.
<br>
<br>

<strong>Isso é apenas motivacional?</strong>
<br>
Não.
<br>
Motivação passa…
<br>
PNL é técnica + aplicação + transformação comportamental real.
<br>
<br>

<strong>Preciso de experiência anterior?</strong>
<br>
Não.
<br>
Você aprende tudo desde as bases até aplicações avançadas.
<br>
<br>

<strong>Isso traz resultados práticos?</strong>
<br>
Sim.
<br>
Todas as ferramentas podem ser usadas imediatamente no seu dia-a-dia — trabalho, carreira, relações e liderança.
<br>
</div>
</div>
      
      `,
      advertencias: `

 <div class="layout-pnl">
<div class="bloco escuro">
<h2>🚀 Todos os dias você toma decisões que moldam a sua vida.</h2>
<strong>A pergunta é:</strong>
<br><br>
👉 Você vai tomar decisões conscientes e estratégicas…
<br>
ou continuar reagindo sem controle?
<br>
<br>
A mudança começa aqui!
<br>
👉 <strong>Se você sente que está pronto para evoluir sua mente, sua comunicação e sua performance,
essa decisão começa aqui.</strong>
</div>
</div>


      `
    },


 configuracoes: {
  mostrarNome: true,
  mostrarPreco: false,
  mostrarResumo: true,
  cta: {
    mostrar: true,
    texto: "QUERO GARANTIR MINHA VAGA",
    link: "https://igctreinamentoscorporativo.com.br/sistema/inscricaopnlcuritiba-ads.html"
  }
},

depoimentos: {
  mostrar: true,
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
  mostrar: true,
  youtubeId: "FU66p66t4ag"
},

ofertaRelampago: {
  mostrar: true,
  delaySegundos: 3,
  tempoMinutos: 45,

  titulo: "🎉 Parabéns! Você ganhou um SUPER desconto!",
  subtitulo: "Somente agora! Oferta exclusiva para esta página.",

  valorDe: 1997,
  valorPor: 497,


// 🔥 NOVO BLOCO
  parcelamento: {
    mostrar: true,
    texto: "Apenas 12x de R$ 44,13"
  },
   

  textoBotao: "Garantir meu desconto agora",
  link: "https://www.igctreinamentoscorporativo.com.br/sistema/inscricaopnlcuritiba-ads",

  
},


     

destaque: true,
mostrarlancamento: false,
mostrarVideo: false,
textoParcelamento: ""
     
    },





   



   {
    id: "2",
    nome: "Curso de Oratória & Comunicação Avançada",
    categoria: "oratoria",
    preco: 798.00,
    imagem: "assets/img/oroatoriaavancada.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: `
   
       Treinamento em pnl busca...
       
       `,
      
       oQueE: `
      
      O treinamento tem como...
      
      `,      
      composicao: `
      
      Metodologia validada
      
      `,
      comoUsar: `
      
      Para quem é...
      
      `,
      advertencias: `
      
      muito bom

      `
    },


configuracoes: {
  mostrarNome: true,
  mostrarPreco: false,
  mostrarResumo: false
},
      
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: ""
    },
   
 


{
    id: "3",
    nome: "Workshop de Programação Neurolinguística (PNL) - Alta Performance",
    categoria: "workshopepalestas",
    preco: 90.00,
    imagem: "assets/img/workshoppnlaltaperformance.png",
    videos: [
      "assets/videos/5htp.mp4"
    ],
    descricao: {
      resumo: `
   
      <p>Desenvolva clareza mental, comunicação eficaz e domínio emocional por meio de técnicas práticas e aplicáveis da Programação Neurolinguística.</p>
             
       `,
      
       oQueE: `

      <h2>Sobre o Workshop</h2>
      <br>
      <p>
      O Whorkshop <strong>Programação Neurolinguística (PNL) – Alta Performance</strong>
      foi desenvolvido para pessoas que desejam compreender como a mente humana
      funciona e como pensamentos, linguagem e comportamento influenciam
      diretamente os resultados da vida pessoal e profissional.
    </p>

    <p>
      Ao longo da formação, o participante aprenderá técnicas consagradas
      da PNL para melhorar a comunicação interpessoal, criar conexões mais
      profundas, desenvolver inteligência emocional, reprogramar padrões
      mentais limitantes e estabelecer objetivos claros e alcançáveis.
    </p>

    <p>
      A proposta do Wokshop é unir <strong>conhecimento, prática e consciência</strong>,
      permitindo que cada aluno aplique imediatamente as ferramentas aprendidas
      em seu cotidiano, promovendo maior segurança, clareza, autonomia emocional
      e produtividade.
    </p>
      
      `,      
       
      composicao: `
      
     <h2>Conteúdo Programático</h2> 
     <br>

    <h4>Módulo 1 – Fundamentos da PNL</h4>
    
    <ul>
      <li>O que é Programação Neurolinguística: história, princípios e aplicações</li>
      <li>A relação entre pensamento, linguagem e comportamento</li>
      <li>Pressupostos da PNL e seus impactos na percepção da realidade</li>
      <li>O conceito: o mapa não é o território</li>
      <li>Os 4 pilares da PNL:
        <ul>
          <li>Rapport</li>
          <li>Acuidade sensorial</li>
          <li>Flexibilidade comportamental</li>
          <li>Formulação de objetivos</li>
        </ul>
      </li>
    </ul>
    <br>
    <h4>Módulo 2 – Aprimorando a Comunicação</h4>
    
    <ul>
      <li>Rapport: técnicas para criar conexão e sintonia rapidamente</li>
      <li>Sistemas representacionais: visual, auditivo e cinestésico</li>
      <li>Como identificar e utilizar o canal de comunicação preferencial</li>
      <li>Meta Modelagem:
        <ul>
          <li>Como fazer perguntas específicas e estratégicas</li>
          <li>Identificação de generalizações, omissões e distorções</li>
          <li>Clareza, objetividade e precisão na comunicação</li>
        </ul>
      </li>
      <li>O poder das palavras: impacto da linguagem verbal e não verbal</li>
    </ul>
    <br>

    <h4>Módulo 3 – Técnicas de Mudança e Reprogramação Mental</h4>
    
    <ul>
      <li>Círculo de Excelência:
        <ul>
          <li>Criação de gatilhos mentais positivos</li>
          <li>Acesso consciente a estados emocionais desejados</li>
        </ul>
      </li>
      <li>Níveis Neurológicos:
        <ul>
          <li>Mudança de significado e percepção</li>
          <li>Potencialização de recursos internos</li>
          <li>Transformação da visão sobre situações e desafios</li>
        </ul>
      </li>
      <li>Análise Transacional:
        <ul>
          <li>Autonomia emocional</li>
          <li>Responsabilidade sobre ações, sentimentos e decisões</li>
          <li>Identificação e substituição de padrões mentais improdutivos</li>
        </ul>
      </li>
    </ul>
     <br> 
      `,
      comoUsar: `
      
      <h2>Metodologia</h2>
      <br>
    <p>
      A metodologia do curso é <strong>prática, dinâmica e experiencial</strong>,
      focada no aprendizado real e aplicável.
    </p>
<br>
    <ul>
      <li>Exposição clara e objetiva dos conceitos</li>
      <li>Exercícios práticos individuais e em grupo</li>
      <li>Dinâmicas de vivência emocional e comportamental</li>
      <li>Exemplos reais do cotidiano pessoal e profissional</li>
      <li>Aplicação imediata das técnicas aprendidas</li>
    </ul>
<br>
    <p>
      O aluno não apenas aprende o conteúdo, mas desenvolve a capacidade
      de utilizá-lo conscientemente em diferentes contextos da vida.
    </p>
      <br>
      `,
      advertencias: `
      
      <h2>Conheça o Palestrante</h2>
      <br>
    <p>
      <strong>Dr. Paulo Takahashi</strong> atua há mais de duas décadas na área
      de desenvolvimento humano, comunicação e comportamento.
    </p>

    <p>
      Seu trabalho integra Programação Neurolinguística, psicologia aplicada
      e desenvolvimento pessoal, com uma abordagem ética, prática e
      orientada a resultados consistentes.
    </p>

    <p>
      Com uma didática clara e acessível, Dr. Paulo Takahashi conduz seus cursos e
      treinamentos criando um ambiente seguro, profissional e estimulante,
      favorecendo aprendizado profundo, reflexão e transformação real.
    </p>
<br>
<br>
      `
    },


configuracoes: {
  mostrarNome: true,
  mostrarPreco: false,
  mostrarResumo: false
},

   
    destaque: false,
    mostrarlancamento: false,
    mostrarVideo: false,
    textoParcelamento: ""
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

