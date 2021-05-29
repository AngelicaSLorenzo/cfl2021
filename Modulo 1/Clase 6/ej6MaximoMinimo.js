let readlineSync = require("readline-sync");
let numMaximo =0, numMinimo =0, numIngresado;
numIngresado = readlineSync.questionInt("Ingrese un numero: ");
while(numIngresado !== 0){
    if(numIngresado >= numMaximo){
        numMaximo = numIngresado;
    }else{
        if(numIngresado < numMinimo){
            numMinimo = numIngresado;
        }
    }
    numIngresado = readlineSync.questionInt("Ingrese un numero: ");
}
console.log("El numero maximo es", numMaximo, "y el numero minimo es:", numMinimo);