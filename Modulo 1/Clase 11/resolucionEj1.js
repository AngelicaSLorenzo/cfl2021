let lector = require('readline-sync');

let texto = lector.question('Ingrese el texto a evaluar: ');     //leo el texto del usuario
let letras='abcdefghijklmnopqrstuvwxyz';            //en letras estan todas las letras que me interesan
let todasLasLetras=letras.length;              //todasLasLetras me dice cuantas letras debo evaluar
let ocurrencias = new Array(todasLasLetras);            //en ocurrencias voy a guardar la ocurrencia de cada una
let cuantasLetras = 0;                             //en cuantasLetras tengo la cantidad total de "letras"
​
function inicializar(ocurrencias) {
//pongo en 0 todos los contadores, uno por cada letra.
    let indice;
    for (indice = 0; indice < ocurrencias.length; indice++) {
        ocurrencias[indice]=0;        
    }
}
function cuantasVecesEsta(texto,largo,letra) { 
    let ocurrencia=0;              
    for(let i=0; i<largo; i++){      
        if (texto[i]==letra)  {      
            ocurrencia++  
        }
    }
    return ocurrencia;
}
function contarLetras(letras,texto,ocurrencias) {
//esta funcion cuenta las ocurrencias de cada letra del arreglo letras en el texto guardando la ocurrencia de cada una en el arreglo ocurrencias
    let indice;
    let textoLocal = texto.toLowerCase();  //unifico el texto a minusculas porque el arreglo de letras esta en minusculas
    let cantidadTotalLetras = 0;          //inicializo la cantidad total de letras
 
    for (indice = 0; indice < letras.length; indice++) {    //recorro letra por letra
        ocurrencias[indice]=cuantasVecesEsta(textoLocal,textoLocal.length,letras[indice]);//uso la funcion para contar cuantas veces esta cada letra en el texto
        cantidadTotalLetras+=ocurrencias[indice];//acumulo la ocurrencia de cada letra en el contador de letras totales
    }
    return cantidadTotalLetras;//retorno el total de letras
}
function listado(letras,ocurrencias,totalLetras) {//funcion que informa el resultado de la evaluacion
    let indice;
    console.log('En el texto ingresado hay',totalLetras);//primero el total de letras
    for (indice = 0; indice < letras.length; indice++) {
        if (ocurrencias[indice] != 0) {
            console.log('la letra',letras[indice],'aparece',ocurrencias[indice],'con una probabilidad de',ocurrencias[indice]/totalLetras);
            //luego cada letra con su cantidad y probabilidad
        }
    }
}
​
inicializar(ocurrencias);
cuantasLetras=contarLetras(letras,texto,ocurrencias);
listado(letras,ocurrencias,cuantasLetras);