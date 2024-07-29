
let numeroArticulos = 20; 
let precioPorArticulo = 65; 
let precioTotal = numeroArticulos * precioPorArticulo;
let descuento = 0;

if (numeroArticulos >= 6 && numeroArticulos <= 10) {
    descuento = 0.05; 
} else if (numeroArticulos >= 11 && numeroArticulos <= 20) {
    descuento = 0.10; 
} else if (numeroArticulos > 20) {
    descuento = 0.15; 
} else {
    descuento = 0; 
}


let descuentoAplicado = precioTotal * descuento;
let precioFinal = precioTotal - descuentoAplicado;


console.log('Numero de articulos comprados: ' + numeroArticulos );
console.log('Precio por articulo: $' + precioPorArticulo );
console.log('Precio total sin descuento: $' + precioTotal);
console.log('Descuento aplicado: $' + descuentoAplicado + ' (' + (descuento * 100) + '%)');
console.log('Precio final despues del descuento: $' + precioFinal);
