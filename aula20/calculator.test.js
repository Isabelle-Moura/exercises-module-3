const { Calculator } = require("./calculator")

describe("Testing class Calculator", () => {
    it("should sum two numbers", () => {
        const result = Calculator.sum(1, 2);
        expect(result).toBe(3);
    })
    it("should subtract two numbers", () => {
        const result = Calculator.subtract(1, 2);
        expect(result).toBe(-1);
    })
    it("should multiply two numbers", () => {
        const result = Calculator.multiply(1, 2);
        expect(result).toBe(2);
    })
    it("should divide two numbers", () => {
        const result = Calculator.divide(1, 2);
        expect(result).toBe(0.5);
    })
})