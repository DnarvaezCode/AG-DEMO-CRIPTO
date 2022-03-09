import { baseUrl } from "../../api/index.js";

describe("PRUEBA URL CRIPTO", () => {
  test("Las urls deben de ser iguales", () => {
    const urlCripto = "https://min-api.cryptocompare.com/data";
    expect(baseUrl).toBe(urlCripto);
  });
});
