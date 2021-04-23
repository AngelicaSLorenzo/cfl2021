let readlineSync = require("readline-sync");
let sueldo = readlineSync.questionInt("Ingrese su sueldo actual: ");
let aumento = 0;
if(0 < sueldo && sueldo <= 15000){
    aumento = sueldo*1.2;
    console.log("Tiene un aumento del 20%, va a cobrar: $",aumento);
}else{
    if(15001 < sueldo && sueldo <= 20000){
        aumento = sueldo*1.1;
        console.log("Tiene un aumento del 10%, va a cobrar: $",aumento);
    }else{
        if(20001 < sueldo && sueldo <= 25000){
            aumento = sueldo*1.05;
            console.log("Tiene un aumento del 5%, va a cobrar: $", aumento);
        }else{
            console.log("No tiene aumento, va a cobrar:", sueldo);
        }
    }
}