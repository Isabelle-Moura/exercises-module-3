const Base = require("./Base");

class Book extends Base {
  constructor(title, description, releasedAt, author, category) {
    super()
    this.title = title
    this.description = description
    this.releasedAt = releasedAt
    this.author = author
    this.category = category
  }
}

module.exports = Book