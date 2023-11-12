const { randomUUID } = require('crypto')

class Book {
    constructor(title, author, year, category) {
        this.id = randomUUID()
        this.title = title
        this.author = author
        this.year = year
        this.category = category
    }
}

module.exports = Book