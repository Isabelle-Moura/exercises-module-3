//Responsabilidade: regra de negócio

class TasksService {
    constructor(repository){
        this.tasksRepository = repository
    }

}

module.exports = TasksService