/* Desenvolva aqui a rotina */
document.getElementById("btn_calcular").setAttribute("onclick", "somar123()");
document.getElementById("valor_base").setAttribute("onmouseout", "somar123()");
document.getElementById("valor_transporte").setAttribute("onmouseout", "somar123()");
document.getElementById("valor_alimentacao").setAttribute("onmouseout", "somar123()");
document.getElementById("valor_automovel").setAttribute("onmouseout", "somar123()");
document.getElementById("faltas").setAttribute("onmouseout", "somar123()");

function somar123() {
  const valorBase = parseInt(document.getElementById("valor_base").value);
  const ajudaTransporte = parseInt(document.getElementById("valor_transporte").value);
  const ajudaAlimentacao = parseInt(document.getElementById("valor_alimentacao").value);
  const somaReceitas = valorBase + ajudaTransporte + ajudaAlimentacao;
  const receitaTotal = document.getElementById("valor_receita").setAttribute("value", somaReceitas);

  const descontoAutomovel = parseInt(document.getElementById("valor_automovel").value);
  const faltas = parseInt(document.getElementById("faltas").value);
  const somaDescontos = descontoAutomovel + faltas;
  const descontosTotal = document.getElementById("valor_descontos").setAttribute("value", somaDescontos);

  const total = somaReceitas - somaDescontos;
  const valorTotal = document.getElementById("valor_total").setAttribute("value", total);
}
