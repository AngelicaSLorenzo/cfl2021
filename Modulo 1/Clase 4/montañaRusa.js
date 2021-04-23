let readlyneSync = require("readline-sync");
let altura = readlyneSync.questionFloat("Bienvenido! indique su altura:");
let alturaPermitida = 1.30;
if(altura >= alturaPermitida){
    console.log("Puede pasar! :)");
}else{
    console.log("Lo siento! no tiene la altura suficiente para este juego :(");

}
