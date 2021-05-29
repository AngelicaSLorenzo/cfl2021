let readlineSync = require("readline-sync");
let arr1 = new Array(3);
let arr2 = new Array(3);
let arr3 = new Array(3);
let arr4 = new Array(3);
let resultado = new Array(3);

arr1=[1,2,3];
arr2=[4,5,6];
arr3=[2,1,2];
arr4=[1,2,1]; 

multiplicarArreglo(arr1,arr2,arr3,arr4,resultado);
console.log(resultado);

function multiplicarArreglo(arr1,arr2,arr3,arr4,resultado){
    let i;
    for(i=0; i<3; i++){
        resultado[i]= arr1[i]*arr2[i]*arr3[i]*arr4[i];
    }
}
