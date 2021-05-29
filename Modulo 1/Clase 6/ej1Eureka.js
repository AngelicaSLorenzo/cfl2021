let readlineSync = require("readline-sync");
let clave = readlineSync.question("Ingrese la clave: ");
let contador=1;

while((clave !="eureka") && (contador <=2)){
    clave = readlineSync.question("Clave incorrecta vuelva a ingresar la clave: ");
    contador = contador +1;
    if(contador >=3 && clave != "eureka"){
        console.log("Agoto sus posibilidades intente mas tarde");
    }
}
