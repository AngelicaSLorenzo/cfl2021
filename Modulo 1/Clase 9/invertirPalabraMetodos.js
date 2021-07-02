let readlineSync = require("readline-sync");

let palabra = readlineSync.question("Ingrese la palabra a invertir: ");
let cantidadLetras = palabra.length;

//console.log("Cargando vector"):                //aca no es necesario cargar el vector
//cargarVector(palabra,cantidadLetras);

console.log("Mostrando invertido: ");
mostrarVectorInvertido(palabra,cantidadLetras);

console.log("Invirtiendo los valores en el vector..");
invertirVector(palabra,cantidadLetras);

console.log("Mostrando vector..");
mostrarVector(palabra,cantidadLetras);

function mostrarVector(v,cantidad){
    let indice;
    for(indice=0; indice<cantidad; indice++){
        console.log(v[indice]," ");
    }
}

function mostrarVectorInvertido(v,cantidad){
    let indice;                                         //esta funcion muestra el arreglo de atras hacia adelante
    for(indice=cantidad-1; indice>=0; indice--){
        console.log(v[indice]," ");
    }
}

function invertirVector(v,cantidad){
    let indiceIzq =0;
    let indiceDer =cantidad-1;
    let aux;
    while(indiceIzq , indiceDer){                  
        aux =v[indiceIzq];                       //esta funcion inverte un arreglo usando un SUAP
        v[indiceIzq] = v[indiceDer];
        v[indiceDer] = aux;
        indiceIzq++;
        indiceDer--;
    }
}