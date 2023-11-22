const Car = require('../domain/Car');

class CarService{
    constructor(repository){
        this.repository = repository
    }

    async create(model, releasedAt, brand, price, status){
        const newCar = new Car(model, releasedAt, brand, price, status)
        await this.repository.create(newCar)
    }

    async getAll(){
        return await this.repository.getAll()
    }

    async findCarByModel(model){
        return await this.repository.findCarByModel(model)
    }

    async findCarsOverYear2010(){
        return await this.repository.findCarsOverYear2010()
    }

    async findCarsOverCertainPrice(price){
        return await this.repository.findCarsOverCertainPrice(price)
    }

    async update(id, newCar){
        await this.repository.update(id, newCar)
    }

    async delete(id){
        await this.repository.delete(id)
    }
}

module.exports = CarService