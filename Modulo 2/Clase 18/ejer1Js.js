`use strict`;

// EJERCICIO 1
// let contador =0;

// function sumar1() {
//     contador++;
//     document.querySelector('h1').innerHTML = contador;
// }

// function restar() {
//     contador--;
//     document.querySelector('h1').innerHTML = contador;
// }

// function sumar7() {
//     contador +=7;
//     document.querySelector('h1').innerHTML = contador;
// }

// Ejercicio 2: dados
// let cantidad = 10;
// let v1 = new Array(cantidad);
// let v2 = new Array(cantidad);
// let suma = new Array(cantidad);

// function aleatorio(min, max) {
//     return Math.floor(Math.random() * (max - min ) ) + min;
// }
// function cargarVector() { //aca cargo los arreglos con los numeros al azar
//     for(let i=0; i<cantidad; i++) {
//         v1[i]= aleatorio(1,6);
//         v2[i] = aleatorio(1,6);
//         console.log(v1[i], v2[i]);
//     }
// }
// function tirarDados() {
//     let imagen = document.querySelector('img');
//     console.log(imagen);
//     imagen.src = '../1Imgns/dados.jpg';
//     cargarVector();
//     for (let i = 0; i < cantidad; i++) {
//       document.getElementById('dados').innerHTML += `${v1[i]}${v2[i]} ','`;      
//     }
// }
// function sumarDados() {  // aca sume los dos arreglos 
//     for(let i =0; i<cantidad; i++) { 
//         suma[i] = v1[i] + v2[i];
//     }
// }
// function contar7() {  //debugger
//     sumarDados();
//     let contador = 0;
//     for(let i =0; i <cantidad; i++) {
//         if(suma[i] == 7){
//             contador++;
//         }
//     }
//     return contador; 
// }
// function mostrar7(){
//     let nodoParrafo =document.getElementById('contador')
//     nodoParrafo.innerHTML = 'El numero 7 salio:' + contar7() + 'veces';
// }

// Ejercicio3: compras
let contador = 0;

function comprarZapatilla() {
    contador += 5000;
}

function comprarRemera() {
    contador += 1500;
}

function comprarJeans() {
    contador += 2500;
}

function calcular() {
    document.querySelector('p').innerHTML = contador;
}