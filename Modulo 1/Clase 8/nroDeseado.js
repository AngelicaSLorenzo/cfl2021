let readlineSync = require("readline-sync");
let num = new Array(5);

for(i=0; i<5; i++){
    num[i] = readlineSync.questionInt("Ingrese un numero: ");    
}
console.log(num[3]);
//console.log(num); si lo hago asi me aparecen los numero en consola concatenados ej: 1,2,3,4,5

//let readlineSync = require("readline-sync");
//let nroDeseadoArreglo = new Array(5);
//let nro, indice;
//for(indice=0; indice<5; indice++){
//    nro = readlineSync.questionInt("Indique el numero que desea incorporar en la posicion " +indice+": ");
//    nroDeseadoArreglo[indice] = nro;
//}
//for(indice=0; indice<5; indice++){
//    console.log("El numero deseado en la posicion", indice, "es:", nroDeseadoArreglo[indice]);
//}

//De la linea 10 a la 19 es otra forma de solucionar el ejercicio planteado.