let contador;
function calcularAreaTriangulo(base,altura){
    return (base*altura)/2;
}
for(contador=1; contador<=7; contador++){
    console.log("El area es =", calcularAreaTriangulo(contador, contador*2));
}
