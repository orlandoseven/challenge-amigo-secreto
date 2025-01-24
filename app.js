//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
  let input = document.getElementById("amigo").value;
  console.log(input);
  if (input.length !== 0) {
    listaAmigos.push(input);
  } else {
    alert("digite um nome valido");
  }
  mostrarListaAmigos(input, "listaAmigos");
  limparInput();
}

function mostrarListaAmigos(value, id) {
  const li = document.createElement("li");
  li.innerHTML = value;
  document.getElementById(id).appendChild(li);
}

function sortearAmigo() {
  const amigoSorteado = Math.floor(Math.random() * listaAmigos.length);
  const result = listaAmigos[amigoSorteado];

  const ul = document.getElementById("resultado");
  ul.innerHTML = `O meu amigo secreto é: ${result}`;
  removerListaAmigosTela();
}

function limparInput() {
  let input = document.querySelector("input");
  input.value = "";
}

function removerListaAmigosTela() {
  document.getElementById("listaAmigos").style.display = "none";
}
