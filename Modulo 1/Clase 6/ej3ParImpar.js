let readlineSync = require("readline-sync");
let numero = readlineSync.questionInt("Ingrese un numero: ");
while(numero ==0){
    console.log("Numero invalido!");
    numero = readlineSync.questionInt("Ingrese un numero mayor que 0: ");
}
if(numero %2 == 0){
    console.log("El numero", numero, "es par.");
}else{
    console.log("El numero", numero, "es impar.");
}