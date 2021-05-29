let readlineSync = require(`readline-sync`);

let texto = readlineSync.question(`Ingrese el texto que desea convertir a camelCase: `);

while(texto != ``){
    console.log(convertirACamelCase(texto));
    texto = readlineSync.question(`Ingrese el texto que desea convertir a camelCase: `);
}

function convertirACamelCase(texto){
    let textoLocal = texto.toLowerCase().trim();
    let vbleCamelCase =``;
    let indice = 0;
    while(indice < textoLocal.length){
        if(textoLocal[indice] == ` `){
            vbleCamelCase += textoLocal[indice + 1].toUpperCase();
            indice += 2;
        }else{
            vbleCamelCase += textoLocal[indice];
            indice ++;
        }
    }
    return vbleCamelCase;
}