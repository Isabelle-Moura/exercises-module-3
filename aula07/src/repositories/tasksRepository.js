//Responsabilidade: chamar o banco de dados

class TasksRepository {
    constructor(database){
        this.database = database
    }

}

module.exports = TasksRepository