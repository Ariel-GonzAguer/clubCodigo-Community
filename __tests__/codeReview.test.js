import { calcularDescuento } from "../codeReview.js";

describe("calcularDescuento", () => {
  test("debería lanzar un error si no se proporciona el precio o el descuento", () => {
    expect(() => calcularDescuento(undefined, 20)).toThrow("No se agregó precio o descuento.");
    expect(() => calcularDescuento(100, undefined)).toThrow("No se agregó precio o descuento.");
  });

  test("debería calcular el precio con descuento aplicado correctamente", () => {
    expect(calcularDescuento(100, 20)).toBe(80.0);
  });

  test("debería retornar el precio original si el descuento es 0%", () => {
    expect(calcularDescuento(100, 0)).toBe(100.0);
  });

  test("debería retornar 0 si el descuento es 100%", () => {
    expect(calcularDescuento(100, 100)).toBe(0.0);
  });

  test("debería lanzar un error si el precio es negativo", () => {
    expect(() => calcularDescuento(-100, 20)).toThrow(
      "El precio no puede ser negativo."
    );
  });

  test("debería lanzar un error si el descuento es negativo", () => {
    expect(() => calcularDescuento(100, -20)).toThrow(
      "El descuento debe estar entre 0 y 100."
    );
  });

  test("debería lanzar un error si el descuento es mayor a 100%", () => {
    expect(() => calcularDescuento(100, 120)).toThrow(
      "El descuento debe estar entre 0 y 100."
    );
  });

  test("debería lanzar un error si el precio no es un número", () => {
    expect(() => calcularDescuento("100", 20)).toThrow(
      "Los argumentos deben ser números."
    );
  });

  test("debería lanzar un error si el descuento no es un número", () => {
    expect(() => calcularDescuento(100, "20")).toThrow(
      "Los argumentos deben ser números."
    );
  });
});
