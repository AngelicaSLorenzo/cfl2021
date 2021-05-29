let readlineSync = require("readline-sync");
let dimension = readlineSync.questionInt("Ingrese la dimencion del arreglo: ");
let numeros = new Array(dimension);
for(i =0; i <dimension; i++){
    numeros[i] = readlineSync.questionInt("Ingrese un numero: ");
}
for(i =dimension-1; i >=0; i--){
    console.log(numeros[i]);
}