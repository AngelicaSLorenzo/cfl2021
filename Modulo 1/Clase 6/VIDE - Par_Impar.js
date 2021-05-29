Consigna:
//Realizar un algoritmo que dado el valor de la variable "entradaTeclado", visualice en pantalla si el mismo es "Par" o "Impar". 
//En caso de que el valor sea menor o igual a cero, se debe visualizar en pantalla: "El valor debe ser mayor que 0". 
//Recordar que el mensaje a visualizar se debe almacenar en la variable "resultado".

Declaración:
let entradaTeclado;
let resultado;

entradaTeclado = -100;

Implementación:
if(entradaTeclado < 0 || entradaTeclado ===0){
    resultado = "El valor debe ser mayor que 0";
}else{
    if(entradaTeclado %2 ===0){
        resultado = "Par";
    }else{
        resultado = "Impar";
    }
}
console.log(resultado);

//Reporte de Tests:
//Número Par: 2: pasado correctamente
//Número Impar: 3: pasado correctamente
//Número Inválido: 0: pasado correctamente
//Número Par: 100: pasado correctamente
//Número Inválido: -100: pasado correctamente
