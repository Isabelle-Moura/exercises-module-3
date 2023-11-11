const { randomUUID } = require('crypto')

class Base {
  constructor() {
    this.id = randomUUID()
    this.createdAt = new Date();
    this.updatedAt = null;
  }

  whenIsUpdated() {
    this.updatedAt = new Date()
  }
}

module.exports = Base