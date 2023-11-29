export default class CarsService {
   constructor(repository) {
      this.repository = repository;
   }

   async createCar(car) {
      try {
         return await this.repository.createCar(car);
      } catch (error) {
         console.log(error);
      }
   }

   updateCarStatus(car) {
      try {
         return this.repository.updateCarStatus(car);
      } catch (error) {
         console.log(error);
      }
   }

   getCarByPlate(plate) {
      try {
         return this.repository.getCarByPlate(plate);
      } catch (error) {
         console.log(error);
      }
   }

   getCars() {
      try {
         return this.repository.getCars();
      } catch (error) {
         console.log(error);
      }
   }

   getCarsSold() {
      try {
         return this.repository.getCarsSold();
      } catch (error) {
         console.log(error);
      }
   }

   getCarsNotSold() {
      try {
         return this.repository.getCarsNotSold();
      } catch (error) {
         console.log(error);
      }
   }
}
