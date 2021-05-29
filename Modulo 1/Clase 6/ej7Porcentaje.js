let readlineSync = require("readline-sync");
let numIngresado, positivos =1, suma, totalPositivos =0, total =0;
numIngresado = readlineSync.questionInt("Ingrese un numero: ");
while(numIngresado !==0){
    if(numIngresado >0){
       suma = positivos++;
    }
    numIngresado = readlineSync.questionInt("Ingrese un numero: ");
    total++;
}
totalPositivos = suma*100/total;
console.log(suma, "positivos,", totalPositivos,"% del total.")

