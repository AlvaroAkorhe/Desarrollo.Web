
let precioTotal = 1000; 
let descuento = 0;


switch (true) {
    case (precioTotal >= 600 && precioTotal <= 999):
        descuento = 0.05; 
        break;
    case (precioTotal >= 1000 && precioTotal <= 1999):
        descuento = 0.10; 
        break;
    case (precioTotal >= 2000):
        descuento = 0.15; 
        break;
    default:
        descuento = 0; 
        break;
}

let descuentoAplicado = precioTotal * descuento;
let precioConDescuento = precioTotal - descuentoAplicado;


let iva = 0.16;
let montoIVA = precioConDescuento * iva;


let precioFinal = precioConDescuento + montoIVA;


console.log('Precio total antes del descuento: $' + precioTotal);
console.log('Descuento aplicado: $' + descuentoAplicado + ' (' + (descuento * 100) + '%)');
console.log('Precio despues del descuento: $' + precioConDescuento);
console.log('IVA aplicado (16%): $' + montoIVA);
console.log('Precio final despues del descuento y el IVA: $' + precioFinal);
