document.addEventListener("DOMContentLoaded", carregarLeads);

function salvarLead() {

  const dados = {
    id: document.getElementById("leadId").value,
    nome: document.getElementById("nome").value.toUpperCase(),
    telefone: document.getElementById("telefone").value,
    cidade: document.getElementById("cidade").value.toUpperCase(),
    servico: document.getElementById("servico").value.toUpperCase(),
    status: document.getElementById("status").value,
    dataContato: document.getElementById("dataContato").value,
    horaContato: document.getElementById("horaContato").value,
    observacoes: document.getElementById("observacoes").value
  };

  const funcao = dados.id ? "editarLead" : "salvarLead";

  fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      funcao: funcao,
      dados: dados
    })
  })
  .then(res => res.json())
  .then(() => {
    alert("SALVO COM SUCESSO");
    novoLead();
    carregarLeads();
  });
}

function carregarLeads() {

  fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({ funcao: "buscarLeads" })
  })
  .then(res => res.json())
  .then(dados => {

    const filtro = document.getElementById("filtroNome").value.toUpperCase();

    let html = "<table>";

    dados.forEach(linha => {

      if (!linha[3].includes(filtro)) return;

      html += `
        <tr>
          <td>${linha[3]}</td>
          <td>${linha[4]}</td>
          <td>${linha[5]}</td>
          <td>${linha[7]}</td>
          <td>
            <button onclick="abrirWhats('${linha[4]}')">💬</button>
            <button onclick="editarLeadUI(${linha[0]})">✏️</button>
          </td>
        </tr>
      `;
    });

    html += "</table>";

    document.getElementById("tabelaLeads").innerHTML = html;
  });
}

function abrirWhats(numero) {
  const limpo = numero.replace(/\D/g, '');
  window.open(`https://wa.me/55${limpo}`, "_blank");
}

function editarLeadUI(id) {
  alert("Implementar carregamento do lead específico");
}

function novoLead() {
  document.getElementById("leadId").value = "";
  document.querySelectorAll(".card-form input, textarea").forEach(e => e.value = "");
}
