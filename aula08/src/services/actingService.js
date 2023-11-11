const ActingRepository = require('../data/repository/actingRepository')
const Acting = require("../data/entities/Acting")

const database = []
const repository = new ActingRepository(database)

class ActingService {
  create(actorOrActress, role, movieId) {
    const acting = new Acting(actorOrActress, role, movieId)
    repository.create(acting)
    return acting
  }
  
  getActingByActorOrActress(role) {
    return repository.getActingByActorOrActress(role)
  }  

  updateActingById(id, acting) {
    return repository.updateActingById(id, acting)
  }

  deleteActingById(id) {
    return repository.deleteActingById(id)
  }
}

module.exports = ActingService