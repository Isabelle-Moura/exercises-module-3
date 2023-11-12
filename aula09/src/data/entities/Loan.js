class Loan {
    constructor(client, bookByItsId, loanDate, returnDate) {
        this.client = client
        this.bookByItsId = bookByItsId
        this.loanDate = loanDate
        this.returnDate = returnDate
    }
}

module.exports = Loan