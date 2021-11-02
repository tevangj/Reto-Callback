function elCallback(callback){
    texto = "Pejelagarto";
    callback(texto);
}

function ordenSuperior(texto){
    console.log(texto.toUpperCase())
}

function ordenInferior(texto){
    console.log(texto.toLowerCase())
}

elCallback(ordenSuperior);
elCallback(ordenInferior);