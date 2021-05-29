let readlineSync = require("readline-sync");//declaro read para usarlo despues
let equipo = readlineSync.questionInt("Ingrese cuantos chicos hay en el equipo: ");//pido que el usuario ingrese la cantidad de chicos que hay en el equipo
let edades = new Array(equipo);//armo un array de edades y le paso por parametro la cantidad de chicos

cargarArreglo(edades,equipo);
console.log(edades,equipo); 
console.log("El promedio de las esdades es: ", calcularPromedio(edades,equipo));

function aleatorio(min, max) {//esta funcion la voy a usar para cargar las edades de forma aleatoria
    return Math.floor(Math.random() * (max - min ) ) + min;
}

function cargarArreglo(edades,equipo){//esta funcion la uso para cargar el arreglo de edades
    let i;
    for(i=0; i<equipo; i++){
        edades[i]= aleatorio(3,8);//aca le asigno a el array edades en indice los numeros que me da la funciom aleatorio
        //edades[i] = readlineSync.questionInt("Ingrese las edades de los chicos: "); --- esto lo hago si quiero cargar las edades por teclado
    }
}

function calcularPromedio(edades,equipo){
    let i;
    let suma=0;
    let promedio=0;
    for(i=0; i<equipo; i++){
        suma = suma + edades[i];
    }
    promedio=suma/edades.length;
    return promedio;
}

