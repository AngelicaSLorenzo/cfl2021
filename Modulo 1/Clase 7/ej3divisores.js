let readlineSync = require("readline-sync");
let numero = readlineSync.questionInt("Ingrese un numero: ");
function esMultiplo(numero1, numero2){
    if(numero1 %numero2 ==0){
        resultado = true;
    }else{
        resultado = false;
    }
    return resultado;
}
function cantidadDeDivisores(numero){
    let cantidad =0;
    let divisor;
    for(divisor =0; divisor<= numero; divisor++){
        if(esMultiplo(numero1, numero2)){
            cantidad++;
        }
    }
}
console.log(cantidadDeDivisores(numero));
