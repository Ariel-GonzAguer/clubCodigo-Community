/**
 * Calcula el precio con descuento aplicado.
 *
 * @param {number} precio - El precio original del producto.
 * @param {number} descuento - El porcentaje de descuento a aplicar (entre 0 y 100).
 * @returns {string|undefined} El precio con descuento formateado a dos decimales, o undefined si el descuento es inválido.
 */
function calcularDescuento1(precio, descuento) {
  if (descuento < 0 || descuento > 100) {
    console.log("Descuento inválido");
    return; // retorna undefined
  }
  let descuentoPrecio = precio - (precio * descuento) / 100;
  // console.log("El precio con descuento es: " + descuentoPrecio);
  return descuentoPrecio.toFixed(2);
}

const precio1 = 100;
const descuento1 = 0;

let precioFinal = calcularDescuento1(precio1, descuento1);
console.log("Final precio1: $" + precioFinal);

/*
Aspectos a evaluar durante la revisón de código:
1. Funcionalidad
    Pregunta: ¿La función calcula correctamente el descuento?
    Sí, pero podrían probarse más casos límite, como un descuento de 0%, 100%, o valores negativos. ¿qué pasaría en esos casos? Retorna undefined, lo cual no es muy útil.

2. Legibilidad
    - La variable descuentoPrecio es clara, pero podría ser más específica, como precioConDescuentoAplicado (un poco largo) o precioFinal(más conciso).
    - En el ejemplo, console.log se usa para errores, pero es mejor manejar errores de forma más robusta, como con throw o devolviendo un objeto que indique error.

3. Mejora del código
    El valor devuelto se formatea con .toFixed(2) para obtener solo 2 decimales, pero esta función devuelve una cadena, lo que podría causar errores si se espera un número. ¿cómo podríamos convertirlo a un número manteniendo el uso de .toFixed()?

4. Manejo de errores
    USar console.log para mensajes de error no es lo más adecuado. Podemos lanzar un error o devolver un valor más explícito. Ejemplo:

    if (descuento < 0 || descuento > 100) {
        throw new Error("El descuento debe estar entre 0 y 100.");
    }

5. Pruebas
    ¿Qué sucede si el precio es negativo? ¿Y si no se pasa algún argumento? Agrega pruebas para estos casos.
*/

/**
 * Calcula el precio con descuento aplicado.
 *
 * @param {number} precio - El precio original del producto.
 * @param {number} descuento - El porcentaje de descuento a aplicar. Debe estar entre 0 y 100.
 * @returns {number} El precio con el descuento aplicado, redondeado a dos decimales.
 * @throws {Error} Si los argumentos no son números.
 * @throws {Error} Si el precio es negativo.
 * @throws {Error} Si el descuento no está entre 0 y 100.
 */
export function calcularDescuento(precio, descuento) {
  if (precio === undefined || descuento === undefined) {
    throw new Error("No se agregó precio o descuento.");
  }

  if (typeof precio !== "number" || typeof descuento !== "number") {
    throw new Error("Los argumentos deben ser números.");
  }

  if (precio < 0) {
    throw new Error("El precio no puede ser negativo.");
  }

  if (descuento < 0 || descuento > 100) {
    throw new Error("El descuento debe estar entre 0 y 100.");
  }


  const precioFinal = precio - (precio * descuento) / 100;
  return Number(precioFinal.toFixed(2));
}

try {
  const precio = 100;
  const descuento = 30;

  const finalprecio = calcularDescuento(precio, descuento);
  console.log(`Precio final: $${finalprecio}`);
} catch (error) {
  console.error(error.message);
}
