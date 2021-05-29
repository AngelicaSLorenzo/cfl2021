Consigna:
Escribir un algoritmo que utilice la función provista getEntradaTeclado() para verificar si el valor retornado por la misma, es igual a la clave “eureka”. 
Solo se tienen tres intentos para acertar. En caso de acertar se debe visualizar el mensaje “Clave correcta” y en caso fallar se debe visualizar el mensaje “Ya no tiene más intentos”, 
Es importante que el mensaje visualizado se almacene al final en la variable resultado.

Declaración:
let entradaTeclado = [];
let indice = 0;
function getEntradaTeclado() {
 const retorno = entradaTeclado[indice];
 indice = indice + 1;
 return retorno;
}
let resultado;

entradaTeclado = ["euro", "eureka"];

Implementación:
let contador =1;
let clave;
while(contador <=3 && clave!== "eureka"){
    clave = getEntradaTeclado();
    contador = contador +1;

    if(clave === "eureka"){
        resultado = "Clave correcta";
    }else{
        resultado = "Ya no tiene más intentos";
    }
}
console.log(resultado);


Reporte de Tests:
Test 1: pasado correctamente
Test 2: pasado correctamente
Test 3: pasado correctamente
Test 4: pasado correctamente
