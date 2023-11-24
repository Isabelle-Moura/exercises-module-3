/* 
  - Criar
  - Atualizar se foi vendido ou não no sistema
  - Buscar o carro pela placa
  - Buscar todos os carros
  - Buscar carros já vendidos
  - Buscar carros não vendidos
*/

import { ObjectId } from 'mongodb'

export default class CarsRepository {
    constructor(collection){
        this.collection = collection
    }

    createCar(car){
        return this.collection.insertOne(car)        
    }

   updateCarStatus(car){
        return this.collection.updateOne({plate: new ObjectId(car._id)}, {$set: {isSold: car.isSold}})                
    }
    
   getCarByPlate(plate){
        return this.collection.findOne({plate})
    }

   getCars(){
        return this.collection.find({}).toArray()
    }

   getCarsSold(){
        return this.collection.find({isSold: true}).toArray()
    }
   getCarsNotSold(){
        return this.collection.find({isSold: false}).toArray()
    }
}