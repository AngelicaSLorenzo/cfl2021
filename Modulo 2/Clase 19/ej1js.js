"use strict"
//  EJERCICIO 1 Y 2
// let btns = document.querySelectorAll(".btn");

// for(let i=0; i <btns.length; i++){
//     btns[i].addEventListener("click", function(e){
//         let el = this.nextElementSibling;
//         el.classList.toggle("ver");
//     });
    
// }

// ------------------------------------------------------------------------------------------

// EJERCICIO 3
let miBoton = document.querySelector("button");
let miInput = document.querySelector("input");
let miDiv = document.querySelector("div");

miBoton.addEventListener("click", agregarTarea);

function agregarTarea() {
    let tareaNueva = document.createElement("p");
    tareaNueva.innerHTML = miInput.value;
    
    miDiv.appendChild(tareaNueva);
}


