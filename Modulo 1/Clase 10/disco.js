let capacidad = 270;
let disco = new Array(capacidad);
let menores21 = 0;

completarDisco(disco,capacidad);
menores21 = contarMenores(disco,capacidad);
mostrarPersonas(disco,capacidad);
console.log("La cantidad de menores de 21 es: ", menores21);
console.log("la cantidad de mayores de 21 es: ",capacidad -menores21);
console.log("En total hay ", capacidad, "personas");

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min ) ) + min;
}
function completarDisco(disco,capacidad){
    let indice;
    for(indice=0; indice<capacidad; indice++){
        disco[indice]=aleatorio(18,41);
    }
}
function contarMenores(disco,capacidad){
    let indice;
    let menores=0;
    for(indice=0; indice<capacidad; indice++){
        if(disco[indice] < 21){
            menores++;
        }
    }
    return menores;
}
function mostrarPersonas(disco,capacidad){
    let indice;
    for(indice=0; indice<capacidad; indice++){
        console.log(disco[indice]);
    }
}

