/* Consigna:
Cree un algoritmo que genere y visualice una cadena de caracteres (string) con todos los números múltiplos de 2 o de 3 que hay entre 1 y 100. 
Es importante que la cadena final, sea almacenada en la variable resultado, que los números se encuentren separados por coma. Inclusive el último de ellos al final de la cadena. 
Tener en cuenta que hay números que son múltiplos de 2 y de 3 al mismo tiempo, en dichos casos almacenar el número solo una vez.   */

// Código inicial

let resultado = "";

/* Test Múltiplos */



// Código implementación
// Comenza tu implementación en este editor
let contador;

for(contador = 1; contador <= 100; contador++){
    if((contador %2 ===0) || (contador %3 ===0)){
        
        resultado = resultado + contador + ",";
    }
}
console.log(resultado);


/* Reporte de Tests:
Test 1: pasado correctamente
*/