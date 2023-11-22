const { ObjectId } = require("mongodb");

class CarRepository {
    constructor(collection) {
        this.collection = collection
    }

    async create(car) {
        return await this.collection.insertOne(car)
    }

    async getAll() {
        return await this.collection.find({}).toArray()
    }

    async findCarByModel(model) {
        return await this.collection.findOne({ model: { $regex: model, $options: 'i' } })
    }

    async findCarsOverYear2010(){
        return await this.collection.find({releasedAt: {$gte: 2010}}).toArray()
    }

    async findCarsOverCertainPrice(price){
        return await this.collection.find({price: {$gt: price}}).toArray()
    }

    async update(id, newCar) {
        return await this.collection.updateOne({ _id: new ObjectId(id) }, { $set: newCar })
    }

    async delete(id) {
        return await this.collection.deleteOne({ _id: new ObjectId(id) })
    }
}

module.exports = CarRepository