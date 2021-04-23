let readlyneSync = require("readline-sync");
let primerNumero = readlyneSync.questionInt("Ingrese el primer numero: ");
let segundoNumero = readlyneSync.questionInt("Ingrese el segundo numero: ");
let tercerNumero = readlyneSync.questionInt("Ingrese el tercer numero: ");

if(primerNumero > segundoNumero && primerNumero > tercerNumero){
    console.log("El numero mayor es: ", primerNumero);
}else{
    if(segundoNumero > primerNumero && segundoNumero > tercerNumero){
        console.log("El numero mayor es: ", segundoNumero);
    }else{
        console.log("El numero mayor es: ", tercerNumero);
    }
}