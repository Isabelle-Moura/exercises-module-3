class ActingRepository {
    constructor(database) {
      this.database = database
    }
  
    create(acting) {
      this.database.push(acting)
    }

    getActingByActorOrActress(role) {
        return this.database.find(acting => acting.role === role)
    }

    updateActingById(id, acting) {
        const actingId = this.database.find(acting => acting.id === id)
        if (actingId) {
            Object.assign(id, acting)
        }
        return ("Not possible find id.")
    }

    deleteActingById(id) {
        const actingId = this.database.find(acting => acting.id === id)
        if (actingId) {
            this.database.splice(id, 1)
        }
        return ("Not possible find id.")
    }
  }

  module.exports = ActingRepository