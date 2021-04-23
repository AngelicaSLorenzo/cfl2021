let readlineSync = require("readline-sync");
let numero = readlineSync.questionInt("Ingrese el numero a analizar: ");

if(numero == 0){
    console.log("El numero ingresado es 0");
}else{
    if(numero %2 == 0){
        console.log("El numero", numero, "es par");
    }else{
        console.log("El numero", numero,"es impar");
    }
}