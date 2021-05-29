let readlineSync = require("readline-sync");

let cantidad = readlineSync.questionInt("Ingrese la cantidad de numaros: ");
let v1 = new Array(cantidad);
let v2 = new Array(cantidad);

console.log("Cargando v1..");
cargarVector(v1,cantidad);
console.log("Cargando v2...");
cargarVector(v2,cantidad);

productoEscalar(v1,v2,cantidad);
console.log("La suma del producto a escalar es :", productoEscalar(v1,v2,cantidad));

function cargarVector(v,cantidad){
    let indice;
    for(indice=0; indice<cantidad; indice++){
        v[indice]= readlineSync.questionInt("Ingrese el valor en "  +indice+  ": ");
    }
}
function productoEscalar(v1,v2,cantidad){
    let indice;
    let escalar=0;
    for(indice=0; indice<cantidad; indice++){
        escalar = escalar + (v1[indice]*v2[indice]);        
    }
    return escalar;
}
 
