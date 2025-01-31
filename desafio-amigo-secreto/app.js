let amigos = [];

function adicionarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nomeAmigo = inputAmigo.value.trim();

  if (nomeAmigo === "") {
    alert("Por favor, adicione um nome");
    return;
  }

  amigos.push(nomeAmigo);
  atualizarLista();
  limparCampo(); 
  inputAmigo.focus();
}

function limparCampo() {
  const inputAmigo = document.getElementById('amigo'); 
  inputAmigo.value = ''; 
}

function atualizarLista() {
  const listaDeAmigos = document.getElementById("listaAmigo");
  listaDeAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaDeAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Não há amigos para sortear. Adicione nomes primeiro.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnAdicionar").addEventListener("click", adicionarAmigo);
  document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});