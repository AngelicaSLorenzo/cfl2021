let readlineSync = require("readline-sync");
let arreglo1 = new Array(6);
let arreglo2 = new Array(6);
let suma = new Array(6);
let i;
for(i =0; i <6; i++){
    arreglo1[i] = readlineSync.questionInt("Ingrese un numero para el arreglo 1: ");
}
for(i =0; i <6; i++){
    arreglo2[i] = readlineSync.questionInt("Ingrese un numero para el arreglo 2: ");
}
for(i =0; i <6; i++){
    suma[i] = arreglo1[i] + arreglo2[i];
    console.log("La suma de", arreglo1[i], "+", arreglo2[i], "es", suma[i]);
}
