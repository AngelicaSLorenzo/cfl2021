/* Consigna:
Diseñar un algoritmo que muestre por pantalla la tabla de multiplicación del número almacenado en la variable “num1”, hasta el número almacenado en la variable “num2”. 
Es importante que el resultado de cada multiplicación se vaya concatenando en la cadena de caracteres (string) resultado.
Ejemplo: “num1” con valor 9 y “num2” con valor 4. 
Se debe visualizar: 
"9 x 1 = 9", "9 x 2 = 18", "9 x 3 = 27" y "9 x 4 = 36".  Y el valor final de la variable resultado será: “9,18,27,36,”.   */

// Código inicial

let num1;
let num2;
let resultado = "";

num1 = 8; 
num2 = 16;



// Código implementación
// Comenza tu implementación en este editor
let i;

for(i =1; i<=num2; i++){
     resultado = resultado + num1 * i + ",";
   
}
console.log(resultado);

/* Reporte de Tests:
Test 1: pasado correctamente
Test 2: pasado correctamente
Test 3: pasado correctamente
Test 4: pasado correctamente
*/