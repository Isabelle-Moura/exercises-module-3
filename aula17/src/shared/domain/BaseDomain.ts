export class BaseDomain {
     _id?: null | string;
    createdAt?: Date
    deletedAt?: null | Date
  
    constructor() {
      this._id = null
      this.createdAt = new Date()
      this.deletedAt = null
    }
  }