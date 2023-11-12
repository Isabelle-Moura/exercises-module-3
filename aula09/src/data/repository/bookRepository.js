class BookRepository {
    constructor(database) {
        this.database = database
    }
    create(book){
        this.database.push(book)
    }
    getAll(){
        return this.database
    }
    getByTitle(title){
        return this.database.find(book => book.title === title)
    }

    updateBookById(id, book){
        const bookId = this.database.find(book => book.id === id)
        if (bookId) {
            Object.assign(id, book)
        }
        return ("Not possible find id.")
    }
    deleteBookById(id){
        const bookId = this.database.find(book => book.id === id)
        if (bookId) {
            this.database.splice(id, 1)
        }
        return ("Not possible find id.")
    }
}

module.exports = BookRepository