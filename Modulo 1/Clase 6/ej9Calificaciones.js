let readlineSync = require("readline-sync");
let nombre = readlineSync.question("Ingrese el nombre del alumno: ");
let notaPractica, notaProblemas, notaTeorica, final;
while(nombre !=""){
    notaPractica = readlineSync.questionFloat("Ingrese la nota practica: ");
    notaProblemas = readlineSync.questionFloat("Ingrese la nota problemas: ");
    notaTeorica = readlineSync.questionFloat("Ingrese la nota teorica: ");
    if((notaPractica>=0 && notaPractica<=10) && (notaProblemas>=0 && notaProblemas<=10) && (notaTeorica>=0 && notaTeorica<+10)){
        final = notaPractica*0.1 + notaProblemas*0.5 + notaTeorica*0.4;
        console.log("La nota final del alumno", nombre, "es: ", final);
    }else{
        console.log("Error en la nota ingresada.");
    }
    nombre = readlineSync.question("Ingrese el nombre del alumno: ");

}