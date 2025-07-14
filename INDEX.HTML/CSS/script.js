document.getElementById("media-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nota1 = Number(document.getElementById("nota1").value);
  const nota2 = Number(document.getElementById("nota2").value);
  const media = (nota1 + nota2) / 2;

  let situacao = '';
  let classe = '';

  if (media >= 7) {
    situacao = "Aprovado";
    classe = "aprovado";
  } else if (media >= 5) {
    situacao = "Recuperação";
    classe = "recuperacao";
  } else {
    situacao = "Reprovado";
    classe = "reprovado";
  }

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `Média: <strong>${media.toFixed(2)}</strong><br>Situação: <strong>${situacao}</strong>`;
  resultadoDiv.className = `resultado ${classe}`;
  resultadoDiv.style.display = "block";

  adicionarHistorico(media, situacao);
});

document.getElementById("btn-limpar").addEventListener("click", function () {
  document.getElementById("nota1").value = '';
  document.getElementById("nota2").value = '';
  document.getElementById("resultado").style.display = 'none';
});

function adicionarHistorico(media, situacao) {
  const lista = document.getElementById("lista-historico");
  const item = document.createElement("li");
  item.innerHTML = `Média: <strong>${media.toFixed(2)}</strong> - Situação: <strong>${situacao}</strong>`;
  lista.prepend(item); 
}
