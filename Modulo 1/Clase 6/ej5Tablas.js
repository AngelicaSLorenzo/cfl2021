let readlineSync = require("readline-sync");
let numero1 = readlineSync.questionInt("Ingrese un numero a multiplicar:");
let numero2 = readlineSync.questionInt("Ingrese un numero hasta donde quiere multiplicar:");
let contador, multiplicacion;
for(contador =1; contador <= numero2; contador++){
    multiplicacion = numero1 * contador;
    console.log(numero1, "*", contador, "=", multiplicacion);
}


