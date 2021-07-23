const form = document.getElementById("formularioclientes");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("date").value;
  let telefone = document.getElementById("telefone").value;
  let endereco = document.getElementById("endereco").value;
  let data = {
    nome,
    email,
    date,
    telefone,
    endereco,
  };
  let convertData = JSON.stringify(data);

  localStorage.setItem("lead-cliente", convertData);

  let cadcli = document.getElementById("cadcli");

  let carregando = `<p>Aguarde um momento, carregendo...</p>`;

  let pronto = `<p>Prontinho, tudo certo com seu cadastro</p>`;

  cadcli.innerHTML = carregando;

  setTimeout(() => {
    cadcli.innerHTML = pronto;
  }, 1500);
});
