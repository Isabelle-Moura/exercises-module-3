/* 
    -  criar um item para doacao, passando: title, description, location, city e phoneNumber
    -  atualizar o campo isDonated para true
    -  buscar todos os itens por cidade
    -  buscar todos os itens
    -  buscar um item por id
    -  deletar um item
*/

import { Router } from 'express'
import { database } from '../database/configDB.js'
import { MakeDonation } from '../factory/MakeDonation.js'

const routes = Router()
const controller = MakeDonation.build(database)

routes.post("/donations", controller.createDonation.bind(controller))

routes.patch("/donations/:id", controller.updateDonationStatus.bind(controller))

routes.get("/donations", controller.getAllDonations.bind(controller))

routes.get("/donations/:city", controller.getAllDonationsByCity.bind(controller))

routes.get("/donations/:id", controller.getDonationById.bind(controller))

routes.delete("/donations/:id", controller.deleteDonation.bind(controller))

export { routes }
// http://localhost:3000/donations