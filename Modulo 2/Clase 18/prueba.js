// function saludar(){
//     console.log("Hola")
// }

// "uses strict"
// let contador=0;
// function clickear (){
//     contador++;
//     alert ("Hiciste"+contador+" Clicks")
// }

// "use strict";
// console.log("Paso 1: declarando funciones");
// let contador = 0;
// function clickear() {
//   //incrementa el valor de contador
  
//   console.log("Paso 3: Valor anterior del contador:" +contador);
//   contador++; 
//   console.log("Paso 4: El contador ahora vale:" + contador);
//   alert("Hiciste " + contador + " clicks")
//   //es lo mismo que contador = contador + 1
  
// }
// console.log("Paso 2: continua ejecución");

// function ocultar() {
//   document.getElementById(`principal`).className = `hidden`;

// }

function ocultar(index) {
  console.log(document.querySelector(`img`));    //aca muestro por consola el elemento que quiero capturar
  
  document.querySelector(`img`).src = "../1Imgns/foto playa.jpg"   //aca cambio la imagen cuando sucede un evento
}
console.log(document.querySelector(`h1`))  //.innerHTML=`Nuevo`; 

// function ocultar(index) {
//   console.log(document.querySelector(`a`));    //aca muestro por consola el elemento que quiero capturar
  
//   document.querySelector(`a`).href = "aca pongo el link que quiero"   //aca cambio el link cuando sucede un evento
// }


// "use strict";
// function ActualizarSaludo() { 
//     //lee el nombre
//     let nodoInput =  document.getElementById("txtNombre");
//     let nombre = nodoInput.value;
//     // 
//     if(nombre.length > 5) {
//       document.getElementById(`alerta`).className = `alert`;
//     }
// }

