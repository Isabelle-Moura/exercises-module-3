export default class CarsService {
    constructor(repository) {
        this.repository = repository
    }

    createCar(car) {
        return this.repository.createCar(car)
    }

    updateCarStatus(car) {
        return this.repository.updateCarStatus(car)
    }

    getCarByPlate(plate) {
        return this.repository.getCarByPlate(plate)
    }

    getCars() {
        return this.repository.getCars()
    }

    getCarsSold() {
        return this.repository.getCarsSold()
    }

    getCarsNotSold() {
        return this.repository.getCarsNotSold()
    }
}