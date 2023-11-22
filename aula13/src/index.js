const CarRepository = require('./repository/CarRepository')
const CarService = require('./service/CarService')
const {database, client} = require('./database/configDB')

const repository = new CarRepository(database)
const service = new CarService(repository)

;(async () => {
    // Example usage
    await service.create('Model 1', 2010, 'Brand 1', 1000, 'available')
    const car = await service.findCarByModel('Model 1')
    console.log("New car created: ", car)

    const cars = await service.getAll()
    console.log("All cars: ", cars);
    
    await service.update( car._id, { status: 'rented' })
    console.log(`Car with id "${car._id}" was updated: `, cars)
    
    const carsAbove2010 = await service.findCarsOverYear2010()
    console.log("Looking for for cars with more than 2010", carsAbove2010);
    
    const carsAbove1000 = await service.findCarsOverCertainPrice(1000)
    console.log("Looking for for cars that costs more than 1000", carsAbove1000);
    
    // await service.delete(car._id);
    // console.log(`Car with id "${car._id}" was deleted: `, cars)

    console.log("After all functions: ", cars);
    await client.close()
})()