class CalculateAverage {
    static calculateAverage(n1, n2) {
        const sumNumbers = n1 + n2
        return sumNumbers / 2        
    }

    static verifyApproval(average) {
        return average >= 7 ? 'Aprovado' : 'Reprovado';
    }
}

module.exports = { CalculateAverage }