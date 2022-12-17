const Calculator = require("./calculator");

const cal = new Calculator(1, 2);

describe("basic operation", () => {
  test("add operation", () => {
    expect(cal.add(1, 2)).toBe(3);
  });
});
describe("basic operation", () => {
  test("Subtract operation", () => {
    expect(cal.subtract(1, 2)).toBe(-1);
  });
});
describe("basic operation", () => {
  test("Multiply operation", () => {
    expect(cal.multiply(1, 2)).toBe(2);
  });
});
describe("basic operation", () => {
  test("divide operation", () => {
    expect(cal.divide(1, 2)).toBe(0.5);
  });
});
