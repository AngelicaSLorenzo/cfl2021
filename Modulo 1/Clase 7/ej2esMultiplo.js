let readlineSync = require("readline-sync");
let numero1 = readlineSync.questionInt("Ingrese el primer numero: ");
let numero2 = readlineSync.questionInt("Ingrese el segundo numero: ");
let respuesta = esMultiplo(numero1, numero2);
function esMultiplo(numero1, numero2){
    if(numero1 %numero2 ==0){
        resultado = true;
    }else{
        resultado = false;
    }
    return resultado;
}
console.log(respuesta);


