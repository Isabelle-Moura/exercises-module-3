const LoanRepository = require("../data/repository/loanRepository")
const Loan = require("../data/entities/Loan")

const database = []
const repository = new LoanRepository(database)

class LoanService {
    create(client, bookByItsId, loanDate, returnDate) {
        const loan = new Loan(client, bookByItsId, loanDate, returnDate)
        repository.create(loan)
        return loan
    }
    getAllByClient(client) {
        return repository.getAllByClient(client)
    }
    getAllByBook(book) {
        return repository.getAllByBook(book)
    }
    updateLoanById(id, loan) {
        return repository.updateLoanById(id, loan)
    }
    deleteLoanById(id) {
        return repository.deleteLoanById(id)
    }
}

module.exports = LoanService