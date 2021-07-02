let readlineSinc = require("readline-sync");
let dimension = readlineSinc.questionInt("Indique la dimension del arreglo: ");
let sumaElementos = new Array(dimension);
let suma =0;
let i;
for(i=0; i<dimension; i++){
    sumaElementos[i]= readlineSinc.questionInt("ingrese un numero: ");
    suma+=sumaElementos[i];
}  

console.log("La suma de todos los elementos ingresados es", suma);