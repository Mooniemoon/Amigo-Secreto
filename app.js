let nombreAmigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;
    let amigo = nombreAmigo.trim();
    if (amigo != ""){
    nombreAmigos.push(amigo);
    limpiarCaja();
    actualizarListaAmigos();
 
    }else {
        alert("Por favor agrega un nombre valido.");
    }
}

function limpiarCaja(){
    document.getElementById("amigo").value = "";
}

function actualizarListaAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (i = 0; i < nombreAmigos.length; i++){
        lista.innerHTML += `<li>${nombreAmigos[i]}</li>`;
    }
}

function sortearAmigo(){
    if (nombreAmigos.length > 0){
        let sorteo = Math.floor(Math.random() * nombreAmigos.length);
        let sorteado = nombreAmigos[sorteo];
        document.getElementById("resultado").innerHTML = sorteado;
        nombreAmigos.splice(sorteo, 1);
        actualizarListaAmigos();
    }else {
        alert("No hay más amigos para sortear.");
    }
}

