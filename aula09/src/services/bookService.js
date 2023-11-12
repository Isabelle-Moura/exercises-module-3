const BookRepository = require("../data/repository/bookRepository")
const Book = require("../data/entities/Book")

const database = []
const repository = new BookRepository(database)

class BookService {
    create(title, author, year, category) {
        const book = new Book(title, author, year, category)
        repository.create(book)
        return book
    }
    getByTitle(title) {
        return repository.getByTitle(title)
    }
    updateBookById(id, book) {
        return repository.updateBookById(id, book)
    }
    deleteBookById(id) {
        return repository.deleteBookById(id)
    }
}

module.exports = BookService