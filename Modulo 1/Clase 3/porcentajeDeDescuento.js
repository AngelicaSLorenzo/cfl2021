let readlineSync = require("readline-sync");
let precioProducto = readlineSync.questionInt("Ingrese el precio de producto:");
let porcentajeDescuento = readlineSync.questionInt("Ingrese el porcentaje que quiere descontar:");
let descuento = precioProducto*porcentajeDescuento/100;
let precioFinal = precioProducto-descuento;
console.log("El precio del producto con el descuento es:", precioFinal, "$");