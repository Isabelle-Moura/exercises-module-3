const { CalculateAverage } = require("./calculateAverage")

describe("Testing class CalculateAverage", () => {
    it("It should calculate the average after the sum of two numbers.", () => {
        const result = CalculateAverage.calculateAverage(18, 26);
        expect(result).toBe(22);
    })
    it("It should verify if the average is approved or not.", () => {
        const result = CalculateAverage.verifyApproval(22);
        expect(result).toBe('Aprovado');
    })
})