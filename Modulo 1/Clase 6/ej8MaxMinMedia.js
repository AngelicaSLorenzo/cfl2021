let readlineSync = require("readline-sync");
let numIngresado = readlineSync.questionInt("Ingrese un numero: ");
let numMaximo =numIngresado, numMinimo =numIngresado, suma =0, promedio =0;

while(numIngresado !== 0){
    if(numIngresado > numMaximo){
        numMaximo = numIngresado;
    }else{
        if(numIngresado < numMinimo){
            numMinimo = numIngresado;
        }
    }
    promedio++;
    suma = suma+promedio;
    
    numIngresado = readlineSync.questionInt("Ingrese un numero: ");
}
console.log("El maximo es", numMaximo, "el minimo es:", numMinimo, "y la media es:", (suma/promedio));
// me quedo mal calculada la media :(