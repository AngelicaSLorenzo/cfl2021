let readlineSync = require("readline-sync");
let vuelta_1 = readlineSync.questionInt("Ingrese el tiempo de la vuelta 1:");
let vuelta_2 = readlineSync.questionInt("Ingrese el tiempo de la vuelta 2:");
let vuelta_3 = readlineSync.questionInt("Ingrese el tiempo de la vuelta 3:");
let vuelta_4 = readlineSync.questionInt("Ingrese el tiempo de la vuelta 4:");
let tiempoTotal = vuelta_1+vuelta_2+vuelta_3+vuelta_4;
let promedio = tiempoTotal/4;
console.log("El tiempo total es:", tiempoTotal, "y el promedio de vuelta es:", promedio);
 