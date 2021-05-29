/* Consigna:
Escriba un programa que dados los valores de las variables “num1” y “num2”, visualice la suma de todos los números que están entre ellos. 
Recordar que el mensaje a visualizar se debe almacenar en la variable "resultado".
Ejemplo: Sí “num1” es 2, y “num2” es 7, el resultado visualizado debe ser la suma de 2+3+4+5+6+7 = 27.    */

// Código inicial

let num1;
let num2;
let resultado = 0;

num1 = 14; 
num2 = 5;



// Código implementación
// Comenza tu implementación en este editor
let suma =0;
let inicial, aux;

if(num1 > num2){
    aux = num1;
    num1 = num2;
    num2 = aux;
}
inicial = num1;
while(inicial <= num2){
    suma = suma + inicial;
    resultado = suma;
    inicial++;
}
console.log(resultado);

/* Reporte de Tests:
Test 1 - Resultado: 27: pasado correctamente
Test 2 - Resultado: 14: pasado correctamente
Test 3 - Resultado: 95: pasado correctamente
Test 4 - Resultado: 1: pasado correctamente
*/