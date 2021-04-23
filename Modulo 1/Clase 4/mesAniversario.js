let readlineSync = require("readline-sync");
let precio = readlineSync.questionFloat("Ingrese el precio del producto: ");
let cantidad = readlineSync.questionFloat("Indique la cantidad de productos que compro: ");
let mes = readlineSync.question("Indique el mes de la compra: ");
let precioTotal = precio*cantidad;
let descuento = (precioTotal*15)/100;
let precioFinal = precioTotal - descuento

if(mes == "Octubre" || mes == "octubre"){
    console.log("Por comprar en el mes aniversario tiene un descuento, debe abonar: ", precioFinal);
}else{
    console.log("No tiene descuento, debe abonar: ", precioTotal);
}