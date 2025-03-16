let amigos = []

function adicionarAmigo(){
    document.getElementById("resultado").innerHTML = "";
    var nome = document.getElementById("amigo").value;

    if(nome == ""){
        alert("Por favor, insira um nome.");
    }
    else{
        amigos.push(nome);
        document.getElementById("amigo").value = "";
        listarNomes();
    }
}

function sortearAmigo(){
    if(amigos.length > 0){
        const indexAleatorio = Math.floor(Math.random() * amigos.length);
        const nomeSorteado = amigos[indexAleatorio];

        document.getElementById("listaAmigos").innerHTML = "";
        document.getElementById("resultado").innerHTML = "O amigo secreto sorteado é: " + nomeSorteado;
        amigos = [];

    }else{
        alert("Por favor, insira um nome antes de tentar sortear");
    }
}

function listarNomes(){
    var divLista = document.getElementById("listaAmigos");
    divLista.innerHTML = "";

    amigos.forEach(element => {
        let li = document.createElement("li");
        li.textContent = element;
        divLista.appendChild(li);
    });
}