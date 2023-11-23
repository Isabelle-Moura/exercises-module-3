// Criar.
// Achar todos os pedidos que não foram entregues ainda.
// Atualizar o status do pedido pelo ID.

import { ObjectId } from 'mongodb'

export default class OrderRepository {
    constructor(collection) {
        this.collection = collection
    }

    createOrder(order){
        return this.collection.insertOne(order)
    }

    findAllPendingOrders(){
        return this.collection.find().toArray()
    }

    updateOrderStatus(id){
        this.collection.updateOne( { _id: new ObjectId(id) }, {$set: { wasDelivered: true } } )
    }
}