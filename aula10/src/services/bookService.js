const Book = require("../models/Books")

class BookService {
    constructor (repository) {
        this.repository = repository
    }

    async create (title, description, releasedAt, author, category) {
        const newBook = new Book(title, description, releasedAt, author, category)
        await this.repository.create(newBook)
    }

    async findAll () {
         return this.repository.findAll()
    }

    async findAllByAuthor (author) {
        return this.repository.findAllByAuthor(author)
    }
    
    async update (id, book) {
        const bookFounded = await this.repository.findById(id)
        if (!bookFounded) {
            throw new Error('Book not found')
        }
        await this.repository.update(id, book)
    }
    
    async delete (id) {
        const bookFounded = await this.repository.findById(id)
        if (!bookFounded) {
            throw new Error('Book not found')
        }
        await this.repository.delete(id)
    }
}

module.exports = BookService