let readlineSync = require("readline-sync");
let base = readlineSync.questionInt("Ingrese la base: ");
let exponente = readlineSync.questionInt("Ingrese un exponente mayor o igual a 0: ");
//let resultadoDelCalculo = calcularPotencia(base, exponente); 
function calcularPotencia(base, exponente){
    let i, resultado =1;
    for(i =1; i <=exponente; i++){
        resultado = resultado*base;
    }
    return resultado;
}
console.log(calcularPotencia(base,exponente));
//console.log(resultadoDelCalculo);
//Los comentarios son para saber que tambien se puede hacer de esa manera en ves de console.log de la funcion.