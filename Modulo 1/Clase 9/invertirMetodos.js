let readlineSync = require("readline-sync");

let cantidad = readlineSync.questionInt("Ingrese la cantidad de numeros: ");
let v = new Array(cantidad);

console.log("Cargando v..");
cargarVector(v,cantidad);

console.log("Mostrando invertido..");
mostrarVectorInvertido(v,cantidad);

console.log("Invirtiendo los valores del vector..");
invertirVector(v,cantidad);

console.log("Mostrando vector..");
mostrarVector(v,cantidad);

function cargarVector(v,cantidad){
    let indice;
    for(indice=0; indice<cantidad; indice++){
        v[indice]= readlineSync.questionInt("Ingrese el valor en "  +indice+ ":");
    }
}

function mostrarVector(v,cantidad){
    let indice;
    for(indice=0; indice<cantidad; indice++){
        console.log(v[indice]);
    }
}

function mostrarVectorInvertido(v,cantidad){
    let indice;                                         //esta funcion muestra el arreglo de atras hacia adelante
    for(indice=cantidad-1; indice>=0; indice--){
        console.log(v[indice]);
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