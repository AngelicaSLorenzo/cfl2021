let readlineSync = require("readline-sync");
let dimension = readlineSync.questionInt("Ingrese la dimension de los arreglos: ");
let v1 = new Array(dimension);
let v2 = new Array(dimension);
let v3 = new Array(dimension);
let vSuma = new Array(dimension);

cargarVector(v1,dimension);
cargarVector(v2,dimension);
cargarVector(v3,dimension);

sumaVector(v1,v2,v3,vSuma,dimension);
console.log("Valores de v1:");
mostrarVector(v1,dimension);
console.log("Valores de v2:");
mostrarVector(v2,dimension);
console.log("Valores de v3:");
mostrarVector(v3,dimension);

console.log("Valores de vSuma:");
mostrarVector(vSuma,dimension);

function Azar(tope){
    return Math.floor(Math.random()*tope);
}

function cargarVector(v,dimension){
    let indice;
    for(indice=0; indice<dimension; indice++){
        v[indice]= Azar(100);
    }
}

function mostrarVector(v,dimension){
    let indice;
    for(indice=0; indice<dimension; indice++){
        console.log(v[indice]);
    }
}

function sumaVector(v1,v2,v3,vSuma,dimension){
    let indice;
    for (indice=0; indice<dimension; indice++) {
        vSuma[indice]= v1[indice] + v2[indice] + v3[indice];
    }
}