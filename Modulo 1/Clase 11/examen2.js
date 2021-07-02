let readlineSync =require("readline-sync");
let texto = readlineSync.question("Ingrese un texto: ");// pido que se ingrese un texto
let minuscula = texto.toLowerCase(); //lo paso a minuscula

let letra;  //defino la variable letra para mostrarla despues por consola
let cantidad; // defino cantidad como variable de almacenamiento
let indice;
for(indice=0; indice<minuscula.length; indice++){
    letra = minuscula[indice];//le asigno a la variable letra el valor de minuscula en [i]
    cantidad = contarOcurrencia(minuscula, minuscula.length, letra);//le asigno lo que me retorna metodo a la variable cantidad
    console.log("La letra", letra, "aparece", cantidad, "probabilidad", cantidad/minuscula.length);// muestro por consola
}

function contarOcurrencia(v, l, n){
    let ocurrencia =0; 
    let indice;       
    for(indice=0; indice<l; indice++){ // esta funcion la saque del ejercicio que sigue para contar las ocurrencias
        if(v[i]==n)
        ocurrencia++   
    }
   return ocurrencia;
}    //me cuenta tambien los espacios entre las letras pero no llegue a darme cuenta como hacerlo, aunque creo que habia una resolucion en clase