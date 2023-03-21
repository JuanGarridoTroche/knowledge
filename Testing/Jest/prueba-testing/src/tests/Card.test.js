import { titleCase } from "../components/Card";

// Con describe agrupamos todas nuestras pruebas. No es obligatorio
describe("Funciones dentro del componente Card.jsx", () => {
  describe("titleCase", () => {
    // Vamos a comprobar que la función titleCase devuelve un string
    test("debe retornar un string", () => {
      const result = titleCase("el valor que sea");
      // Espero que el tipo de result sea string
      expect(typeof result).toBe("string");
    });

    // La transformación del string debe ser correcta: hoLa mUNdo -> Hola Mundo
    test("comprobar que la función devuelve la frase con la primera letra de cada palabra devuelve mayúscula", () => {
      const result = titleCase("hOlA MUndO");
      expect(result).toBe("Hola Mundo");
    });

    // Si recibe un string vacío devuelve lo mismo
    test("Si recibe un string vacío devuelve lo mismo", () => {
      const result = titleCase("");
      expect(result).toBe("");
    });
  });
});
