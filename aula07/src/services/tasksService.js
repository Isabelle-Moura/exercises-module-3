//Responsabilidade: regra de negócio

class TasksService {
    constructor(repository){
        this.tasksRepository = repository
    }
    
    getTaskByTitle(title){
        return this.tasksRepository.find(taskTitle => taskTitle === title)
    }
    
    getTaskByUserId(userId){
        return this.tasksRepository.filter(task => task.userId === userId)
    }

    updateTaskById(id, task){
        const id = this.tasksRepository.find(task => task.id === id)
        if(id){
            Object.assign(id, task)
        }
        console.log("Not possible update this task. Try again later...")
    }

    setTaskAsConclued(id){
        const id = this.tasksRepository.find(task => task.id === id)
        if(id){
            id.concluedAt = new Date()
        }
    }

    deleteTaskById(id){
        const id = this.tasksRepository.find(task => task.id === id)
        if(id){
            this.tasksRepository.splice(id, 1)
        }
    }
}

module.exports = TasksService