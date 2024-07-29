
//switch
let calificacion = 50;

let letra;
//switch(calificacion){
    switch (true) {
        case (calificacion >= 90 && calificacion <= 100):
            letra = 'A';
            break;
        case (calificacion >= 80 && calificacion <= 89):
            letra = 'B';
            break;
        case (calificacion >= 70 && calificacion <= 79):
            letra = 'C';
            break;
        case (calificacion >= 60 && calificacion <= 69):
            letra = 'D';
            break;
            case (calificacion >= 50 && calificacion <= 59):
            letra = 'F';
            break;
    default:
        console.log("Error: Calificacion invalida: " + calificacion)
        break;
    }
    console.log("Tu calificacion es: "+calificacion + " Tienes una: "+ letra);