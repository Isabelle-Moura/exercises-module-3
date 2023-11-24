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
  - [] Atualizar se foi vendido ou não no sistema PATCH
  - [] Buscar o carro pela placa GET
  - [] Buscar todos os carros GET
  - [] Buscar carros já vendidos GET
  - [] Buscar carros não vendidos GET
*/

app.post('/cars', async (request, response) => {
    const { body } = request.body

    const car = await service.createCar(body)

    response.status(200).json(car)
})


app.listen(8080, () => console.log('Server is running on port 8080! ❤ 🎉'))