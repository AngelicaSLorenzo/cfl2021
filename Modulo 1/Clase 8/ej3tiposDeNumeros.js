let readlineSync = require("readline-sync");
let dimension = readlineSync.questionInt("Ingrese la dimension del arreglo: ");
let tiposDeNumeros = new Array(dimension);
let i;
let positivos =0;
let negativos =0;
let ceros=0;
for(i =0; i <dimension; i++){
    tiposDeNumeros[i] = readlineSync.questionInt("Ingrese un numero: ");   
    if(tiposDeNumeros[i] >0){
        positivos++;
    }else{
        if(tiposDeNumeros[i] <0){            //asi es como lo hice yo, en la esplicacion de clase se dijo que no seria
            negativos++;                     // tan reutilizable :/
        }else{
            if(tiposDeNumeros[i] ==0){
                ceros++;
            }
           
        }
    } 
}
//for(i =0; i <dimension; i++){ 
//    if(tiposDeNumeros[i] >0){
//        positivos++;
//    }else{
//        if(tiposDeNumeros[i] <0){               Lo comentado es otra forma de resolverlo separando en 2 for el problema
//            negativos++;                        Esta seria la forma correcta, por que seria reutilizable el codigo
//        }else{
//            if(tiposDeNumeros[i] ==0){
//                ceros++;
//            }
//           
//        }
//    } 
//}

console.log("Ingreso", positivos, "numeros positivos,", negativos, "numeros negativos y", ceros, "numeros ceros.");