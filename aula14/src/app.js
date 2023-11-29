import express from 'express'

import { database } from './database/configDB.js'
import CarsRepository from './repository/CarsRepository.js'
import CarsService from './service/CarsService.js'

const repository = new CarsRepository(database)
const service = new CarsService(repository)

const app = express()

app.use(express.json())

/* 
  - [x] Criar POST
  - [x] Atualizar se foi vendido ou não no sistema PATCH
  - [x] Buscar o carro pela placa GET
  - [x] Buscar todos os carros GET
  - [x] Buscar carros já vendidos GET
  - [x] Buscar carros não vendidos GET
*/

app.post('/cars', async (request, response) => {
    const { body } = request

    const car = await service.createCar(body)

    response.status(201).json(car)
})

app.patch('/cars/:plate', async (request, response) => {
    const { plate } = request.params
    const car = await service.updateCarStatus(plate)
    response.status(200).json(car)
})

app.get('/cars', async (request, response) => {
    const cars = await service.getCars()
    response.status(200).json(cars)
})

app.get('/cars/sold', async (request, response) => {
    const cars = await service.getCarsSold()
    response.status(200).json(cars)
})

app.get('/cars/not-sold', async (request, response) => {
    const cars = await service.getCarsNotSold()
    response.status(200).json(cars)
})

app.listen(8080, () => console.log('Server is running on port 8080! ❤ 🎉'))