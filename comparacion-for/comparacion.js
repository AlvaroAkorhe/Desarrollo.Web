//Igualdad
if(5==5){
console.log("5 es igual que 5");
}
if(5===5){
    console.log("5 es igual que 5")
    
}

let a=5;
console.log(typeof a);
let b="5";
console.log(typeof b);

if (a==b){
    console.log("Comparacion facil");
}
if (a===b) {
    console.log("Comparacion estricta");
}

//Distinto

let c=10;
console.log(typeof c);
let d="10";
console.log(typeof d);
//Distinto que basico
if (c != d) {
    console.log("Distintio DEBIL");
}
if (c !== d) {
    console.log("Distinto FUERTE");
    
}

//Mayor que y Menor que 

let max=10;
let min=5;

if (max>min) {
    console.log("Max es mayo que Min")
    
}
if (max >= min) {
    console.log("Max es mayor o igual que Min");
}
if (min < max ){
    console.log("Min es menor que Max");
}
if (min <= max ){
    console.log("Min es menor o igual que Max");
}