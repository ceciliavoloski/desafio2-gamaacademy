const formprod = document.getElementById("formularioprodutos");

formprod.addEventListener("submit", (e) => {
  e.preventDefault();
  let nomeProduto = document.getElementById("nomeProduto").value;
  let codProduto = document.getElementById("codProduto").value;
  let qtidadeProduto = document.getElementById("qtidadeProduto").value;
  let data2 = {
    nomeProduto,
    codProduto,
    qtidadeProduto,
  };
  let convertData2 = JSON.stringify(data2);

  localStorage.setItem("lead-produtos", convertData2);
  console.log(convertData2);

  let cadprod = document.getElementById("cadprod");

  let carregando2 = `<p>Aguarde um momento, carregendo...</p>`;

  let pronto2 = `<p>Prontinho, tudo certo com seu cadastro</p>`;

  cadprod.innerHTML = carregando2;

  setTimeout(() => {
    cadprod.innerHTML = pronto2;
  }, 1500);
});
