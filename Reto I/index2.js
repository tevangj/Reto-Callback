function random(variable){
    console.log("la varible es de tipo: " +typeof(variable) + " y su contenido es " + variable);
}
function hacerCallBack(callback){
    let variable = 1000;
    callback(variable);
}

hacerCallBack(random);
