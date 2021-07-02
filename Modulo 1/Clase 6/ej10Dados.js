let readlineSync = require("readline-sync");
let cantDados = readlineSync.questionInt("ingrese la cantidad de dados: ");
let probabilidad =1;
let probable =1/6;
let contador;
for(contador =1; contador <=cantDados; contador++){
    probabilidad = probabilidad*probable;
}
console.log("La probabilidad es:", probabilidad);
