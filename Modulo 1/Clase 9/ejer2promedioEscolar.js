let readlineSinc=require("readline-sync");
let n=readlineSinc.questionInt("Ingrese cantidad de alumnos: ");
let nombreAlumno=new Array(n);
let nota1=new Array(n);
let nota2=new Array(n);
let nota3=new Array(n);
let notaPromedio=new Array(n);
for(i=0;i<n;i++){
    nombreAlumno[i]=readlineSinc.question("Ingrese nombre del alumno: ");
    nota1[i]=readlineSinc.questionInt("Ingrese primer nota: ");
    nota2[i]=readlineSinc.questionInt("Ingrese segunda nota: ");
    nota3[i]=readlineSinc.questionInt("Ingrese tercer nota: ");
}
for(i=0;i<n;i++){
    notaPromedio[i]=((nota1[i]+nota2[i]+nota3[i])/3);
    console.log("el promedio del alumno",nombreAlumno[i],"es",notaPromedio[i]);
}