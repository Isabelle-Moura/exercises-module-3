export class Item {
    constructor(title, description, city, location, phoneNumber){
        this.title = title
        this.description = description
        this.city = city
        this.location = location
        this.phoneNumber = phoneNumber
        this.createdAt = new Date()
        this.isDonated = false
    }
}