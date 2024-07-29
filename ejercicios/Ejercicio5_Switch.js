
let operando1 = 10;
let operando2 = 5;
let operador = '*'; 


let resultado;


switch (operador) {
    case '+':
        resultado = operando1 + operando2;
        break;
    case '-':
        resultado = operando1 - operando2;
        break;
    case '*':
        resultado = operando1 * operando2;
        break;
    case '/':
        if (operando2 !== 0) {
            resultado = operando1 / operando2;
        } else {
            resultado = 'Error: No se puede hacer la division de 0';
        }
        break;
    default:
        resultado = 'Operador no valido';
        break;
}


console.log("Resultado de " + operando1 + " " + operador + " " + operando2 + " es:", resultado);

