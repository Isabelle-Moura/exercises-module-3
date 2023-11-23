import express from "express"

import { database } from "./database/configDB.js"
import OrderRepository from "./repository/OrderRepository.js"
import OrderService from "./service/OrderService.js"

const repository = new OrderRepository(database)
const service = new OrderService(repository)
const app = express()

// Middlewares = functions that process requests and responses
// POST, GET e PATCH

app.use(express.json())

app.post("/orders", async (request, response) => {
    // const { body } = request
    const order = await service.createOrder(request.body)
    response.status(200).json(order)
})

app.get("/orders", async (request, response) => {
    const orders = await service.findAllPendingOrders()
    response.status(200).json(orders)
})

app.patch("/orders/:id", async (request, response) => {
    const { id } = request.params
    const orderUpdated = await service.updateOrderStatus(id)
    response.status(200).json(orderUpdated)
})
// ---

app.listen(3000, () => {
    console.log("Server is running on port 3000! ❤🎉")
})