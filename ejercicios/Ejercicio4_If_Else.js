
let precioTotal = 600; 
let descuento = 0;


if (precioTotal >= 600 && precioTotal <= 999) {
    descuento = 0.05; 
} else if (precioTotal >= 1000 && precioTotal <= 1999) {
    descuento = 0.10; 
} else if (precioTotal >= 2000) {
    descuento = 0.15; 
} else {
    descuento = 0; 
}


let descuentoAplicado = precioTotal * descuento;
let precioConDescuento = precioTotal - descuentoAplicado;


let iva = 0.16;
let montoIVA = precioConDescuento * iva;

let precioFinal = precioConDescuento + montoIVA;
console.log('Precio total antes del descuento: $' + precioTotal);
console.log('Descuento aplicado: $' + descuentoAplicado + ' (' + (descuento * 100) + '%)');
console.log('Precio después del descuento: $' + precioConDescuento);
console.log('IVA aplicado (16%): $' + montoIVA);
console.log('Precio final despues del descuento y el IVA: $' + precioFinal);
