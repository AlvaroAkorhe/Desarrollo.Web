let calificacion = 70; 
let letra;

if (calificacion >= 90 && calificacion <= 100) {
    letra = 'A';
} else if (calificacion >= 80 && calificacion <= 89) {
    letra = 'B';
} else if (calificacion >= 70 && calificacion <= 79) {
    letra = 'C';
} else if (calificacion >= 60 && calificacion <= 69) {
    letra = 'D';
} else if (calificacion >= 50 && calificacion <= 59) {
    letra = 'F';
} else {
    letra = 'Calificacion Reprobatoria, al igual que "F"';
}

console.log('Tu calificacion es: ' + calificacion + " " + letra);
