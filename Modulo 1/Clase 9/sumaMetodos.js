let readlineSync = require("readline-sync");

let v1 = new Array(6);
let v2 = new Array(6);
let vSuma = new Array(6);

console.log("Cargando v1...");
cargarVector(v1,6);
console.log("Cargando v2...");
cargarVector(v2,6);

sumaVector(v1,v2,vSuma,6);
console.log("Valores de v1:");
mostrarVector(v1,6);
console.log("Valores de v2:");
mostrarVector(v2,6);
console.log("Valores de vSuma:");
mostrarVector(vSuma,6);

function cargarVector(v,cantidad){
    let indice;
    for(indice=0; indice<cantidad; indice++){
        v[indice]= readlineSync.questionInt("Ingrese el valor en", indice, ":");
    }
}

function mostrarVector(v,cantidad){
    let indice;
    for(indice=0; indice<cantidad; indice++){
        console.log(v[indice]," ");
    }
}

function sumaVector(v1,v2,vSuma,cantidad){
    let indice;
    for (indice=0; indice<cantidad; indice++) {
        vSuma[indice]= v1[indice] + v2[indice];
        
    }
}