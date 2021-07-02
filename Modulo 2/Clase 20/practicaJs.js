"use estrict"
 
//EJERCICIO 1
// let boton = document.getElementById("btn");
// boton.addEventListener("click", validar);

// function validar() {
//     let num1 = document.getElementById("numero1").value;
//     let num2 = document.getElementById("numero2").value;
   
//     if((num1 <0 && num2 >=0) || (num1 >=0 && num2 <0)) {
//          alert('Mensaje de alerta');
//     }else{
//          console.log(`Los numeros no cumplieron la condicion`)
//     }
// }

//----------------------------------------------------------------------------------------------
//EJERCICIO 2
// let boton = document.getElementById("btn");
// boton.addEventListener("click", mostrar);
// let num = document.getElementById("numero");

// let resultado = "0"

// function mostrar() {
//     for(let i =1; i <=100; i++){
//         resultado = resultado +" "+ i;
//     }
//     document.querySelector("p").innerHTML = resultado;
// }

//---------------------------------------------------------------------------------------------------------

//EJERCICIO 3
// let btn =document.querySelector("#boton");
// btn.addEventListener("click", cambiarEstilo) ;
// let div = document.querySelector(".div-aleatorio");

// function cambiarEstilo(){
//     div.style.backroundColor = `rgb(${aleatorio(0,255)}, ${aleatorio(0,255)}, ${aleatorio(0,255)})`;
//     div.style.width = `aleatorio${10, 500}px,`

// }

// function aleatorio(min, max) {
//     return Math.floor(Math.random() * (max - min ) ) + min;
// }

//-----------------------------------------------------------------------------------------------------------------
//EJERCICIO 4
let comprobar = document.querySelector("#valido");
let btn = document.querySelector("#boton");
btn.addEventListener("click", saludo);

console.log(comprobar);

function saludo() {
    if(comprobar.checked){
        saludo_en_h1.innerHTML = "Hola h1";
    }else{
        saludo_en_h2.innerHTML = "Hola h2";
    }
}