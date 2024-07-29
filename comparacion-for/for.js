//FOR


//for
console.log("Ejemplo del for tradional")
/*for(inicializacion; condicion; actualizacion){
    Bucle
}
*/
for (let i = 0; i < 10; i++) {
    console.log(i);
    
}
let lista =[1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
    
}

//for... of

for (let valor of lista) {
    console.log(valor)
}

//forEach
lista.forEach(valor =>/*Arrow funtion*/{
    console.log(valor);
})


//for... in

