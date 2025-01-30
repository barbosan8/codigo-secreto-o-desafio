
let amigo = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("por favor, adicione um nome");
        return;
    }

    amigo.push(nomeAmigo);

     actualizarlista();

     inputamigo.value = "";
     inputamigo.focus();


}

    function actualizarlista() {
        const listaAmigoU1 =document.getElementById("listaAmigo")
        listaAmigoU1.innerHTML = "";

        amigos.forEach(amigo => {
            const li =document.createElement("li");
            li.textcontent = amigo;
            listaAmigoU1.appendChild(li);
      });   
    }
 
    function sortearamigo() {
        if (amigos.length === 0) {
            alert("nao ar amigo para sortear. agregar nomes primeiros."); 
            return
        }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);

        const amigoSorteado = amigos[indiceAleatorio];

        const resultadoU1 = document.getElementById("resultado");
        resultadoU1.innerHTML = `<li>${amigoSorteado}</li>`;

    }

        document.addEventListener("DOMContentLoaded", () => {
            document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo);
            document.getElementById("btnSortear").addEventListener("click", sortearamigo);
         });
           
        
 
       //  <button id="btnSortear" class="button-draw" aria-label="Sortear amigo secreto">
     //<input type="text" id="amigo" class="input-name" placeholder="Digite um nome"></input>