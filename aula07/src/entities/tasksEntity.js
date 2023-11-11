class Task {
    constructor(title, description, priority) {
        this.id = new Date().getTime()
        this.createdAt = new Date()
        this.concluedAt = null
        this.title = title
        this.description = description
        this.priority = priority
    }
}

module.exports = Task