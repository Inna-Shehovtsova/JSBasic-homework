import { KToC } from "./functions1.js";

describe("Kelvin to Celcius", () => {
  it("to be function", () => {
    expect(KToC).toBeInstanceOf(Function);
  });
  it("0", () => {
    expect(KToC(0)).toBe(-273.15);
  });
  it("293.15", () => {
    expect(KToC(293.15)).toBe(20);
  });
  it("263.15", () => {
    expect(KToC(263.15)).toBe(-10);
  });
});
