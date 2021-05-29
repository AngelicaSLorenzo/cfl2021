let readlineSync = require("readline-sync");
let cantidad = readlineSync.questionInt("Indique la cantidad de asientos de las filas: ");
let fila1 = new Array(cantidad);
let fila2 = new Array(cantidad);
let fila3 = new Array(cantidad);
let cantButacas=0;

console.log("Cargando ocupabilidad de los asientos de la fila 1...");
cargarFila(fila1,cantidad);
console.log("Cargando ocupabilidad de los asientos de la fila 2...");
cargarFila(fila2,cantidad);
console.log("Cargando ocupabilidad de los asientos de la fila 3...");
cargarFila(fila3,cantidad);


function cargarFila(v,cantidad){
    let i;
    for(i=0; i<cantidad; i++){
        v[i] = readlineSync.question("Inrese true si el asiento esta ocupado o false si esta vacio. ");
    }
}

