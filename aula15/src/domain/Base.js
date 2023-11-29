export default class Base {
    constructor(){
        this.createdAt = new Date()
        this.updatedAt = null
        this.deletedAt = null
    }

    isBeingUpdated() {
        this.updatedAt = new Date()
    }

    isBeingDeleted() {
        this.deletedAt = new Date()
    }
}