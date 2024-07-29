
let operando1 = 1;
let operando2 = 5;
let operador = '*'; 


let resultado;


if (operador == '+') {
    resultado = operando1 + operando2;
} else if (operador == '-') {
    resultado = operando1 - operando2;
} else if (operador == '*') {
    resultado = operando1 * operando2;
} else if (operador == '/') {
    if (operando2 !== 0) {
        resultado = operando1 / operando2;
    } else {
        resultado = 'Error: No se puede hacer la division de 0';
    }
} else {
    resultado = 'Operador no valido';
}


console.log("Resultado de " + operando1 + " " + operador + " " + operando2 + " es:", resultado);
