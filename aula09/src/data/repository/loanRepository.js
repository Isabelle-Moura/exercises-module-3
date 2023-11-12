class LoanRepository {
    constructor(database) {
        this.database = database
    }
    create(loan){
        this.database.push(loan)
    }
    getAll(){
        return this.database
    }
    getAllByClient(client){
        return this.database.filter(loan => loan.client === client)
    }
    getAllByBook(book){
        return this.database.filter(loan => loan.bookByItsId === book)
    }
    getById(id){
        return this.database.find(loan => loan.id === id)
    }
    updateLoanById(id, loan){
        const loanId = this.getById(id)
        if (loanId) {
            return ("Not possible find id.")
        }
        Object.assign(id, loan)
    }
    deleteLoanById(id){
        const loanId = this.getById(id)
        if (loanId) {
            this.database.splice(id, 1)
        }
        return ("Not possible find id.")
    }
}

module.exports = LoanRepository