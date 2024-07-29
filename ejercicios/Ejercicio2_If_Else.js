let numero = 7; 
let dia;

if (numero == 1) {
    dia = 'Lunes';
} else if (numero == 2) {
    dia = 'Martes';
} else if (numero == 3) {
    dia = 'Miercoles';
} else if (numero == 4) {
    dia = 'Jueves';
} else if (numero == 5) {
    dia = 'Viernes';
} else if (numero == 6) {
    dia = 'Sabado';
} else if (numero == 7) {
    dia = 'Domingo';
} else {
    console.log("Numero invalido: " + numero);
    dia = 'Numero invalido';
}

console.log('El dia correspondiente al numero ' + numero + ' es: ' + dia);
