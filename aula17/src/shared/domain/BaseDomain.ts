export class BaseDomain {
    createdAt: Date
    deletedAt: null | Date
  
    constructor() {
      this.createdAt = new Date()
      this.deletedAt = null
    }
  }