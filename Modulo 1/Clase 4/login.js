let readlyneSync = require("readline-sync");
let usuario = readlyneSync.question("Indique su usuario: ");
let clave = readlyneSync.question("Indique su clave: ");
let usuarioValido = "Juan";
let claveValida = "claveJuan";

if(usuario == usuarioValido && clave == claveValida ){
    console.log("Bienvenido!");
}else{
    console.log("Su usuario o clave no son correctas, vuelva a intentarlo!");

}