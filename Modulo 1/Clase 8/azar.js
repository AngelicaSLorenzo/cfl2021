let arregloCompletar = new Array(10);
let i;
for(i =0; i <10; i++){
    arregloCompletar[i] = cargarNroAzar(100);
}
for(i =0; i <10; i++){
    console.log("El numero en la posicion", i, "es:", arregloCompletar[i]);
}
function cargarNroAzar(tope){
    return Math.floor(Math.random()*tope);//el tope seria el 100, y lo hago asi para que me de un nro entre 0 y 99
}
//el math random me tira un num entre 0 y 1 con decimales, entonces multiplico por la cantidad que quiero obtener 
//para que me lo convierta a entero.