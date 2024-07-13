
let numeroArticulos = 20; 
let precioPorArticulo = 65; 
let precioTotal = numeroArticulos * precioPorArticulo;
let descuento = 0;

switch (true) {
    case (numeroArticulos >= 6 && numeroArticulos <= 10):
        descuento = 0.05; 
        break;
    case (numeroArticulos >= 11 && numeroArticulos <= 20):
        descuento = 0.10; 
        break;
    case (numeroArticulos > 20):
        descuento = 0.15; 
        break;
    default:
        descuento = 0; 
        break;
}


let descuentoAplicado = precioTotal * descuento;
let precioFinal = precioTotal - descuentoAplicado;


console.log('Número de artículos comprados: ' + numeroArticulos);
console.log('Precio por artículo: $' + precioPorArticulo);
console.log('Precio total sin descuento: $' + precioTotal);
console.log('Descuento aplicado: $' + descuentoAplicado + ' (' + (descuento * 100) + '%)');
console.log('Precio final después del descuento: $' + precioFinal);
