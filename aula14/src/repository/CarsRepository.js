/* 
  - Criar
  - Atualizar se foi vendido ou não no sistema
  - Buscar o carro pela placa
  - Buscar todos os carros
  - Buscar carros já vendidos
  - Buscar carros não vendidos
*/

import { ObjectId } from "mongodb";

export default class CarsRepository {
   constructor(collection) {
      this.collection = collection;
   }

   async createCar(car) {
      try {
         return await this.collection.insertOne(car);
      } catch (error) {
         console.log(error);
      }
   }

   async updateCarStatus(car) {
      try {
         return await this.collection.updateOne({ plate: car.plate }, { $set: { isUsed: car.isUsed } });
      } catch (error) {
         console.log(error);
      }
   }

   async getCarByPlate(plate) {
      try {
         return await this.collection.findOne({ plate });
      } catch (error) {
         console.log(error);
      }
   }

   async getCars() {
      try {
         return await this.collection.find({}).toArray();
      } catch (error) {
         console.log(error);
      }
   }

   async getCarsSold() {
      try {
         return await this.collection.find({ isSold: true }).toArray();
      } catch (error) {
         console.log(error);
      }
   }
   async getCarsNotSold() {
      try {
         return await this.collection.find({ isSold: false }).toArray();
      } catch (error) {
         console.log(error);
      }
   }
}
