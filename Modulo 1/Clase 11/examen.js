let readlineSync = require('readline-sync');
let elemento, arreglo, numero, ocurrencia; //declare las variables con nombres mas representativos y los cambie en cada llamado
elemento = readlineSync.questionInt("Ingrese longitud: ");
arreglo = new Array(elemento);
cargar(arreglo, elemento);
numero = readlineSync.questionInt("Ingrese numero: ");
ocurrencia = metodo( arreglo, elemento, numero);
console.log("El numero"+numero+"..."+ocurrencia);
mostrar(arreglo, elemento);

function cargar(v,l){
    for(let i=0; i<l; i++){
        v[i]=Math.floor(Math.random()*100); 
    }
}
function mostrar(v, l){
    let c="";
    for(let i=0; i<l; i++){  
        c+=v[i]+" ";
        console.log(c);
    }
}
function metodo(v, l, n){
    let oc =0;        //inicio la variable que suma la oc en 0
    for(let i=0; i<l; i++){
        if(v[i]==n){
        oc++ 
        }  
    }    
   return oc    //esta funcion no devuelve nada asi que le agrego un retur
}  
