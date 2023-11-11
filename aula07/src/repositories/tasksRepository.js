//Responsabilidade: chamar o banco de dados

class TasksRepository {
    constructor(database){
        this.database = database
    }

    create(task){
        this.database.push(task)
        return task
    }
    getAll(){
        return this.database
    }
}

module.exports = TasksRepository