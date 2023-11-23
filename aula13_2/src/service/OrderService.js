export default class OrderService {
    constructor(repository) {
        this.repository = repository
    }

    createOrder(order) {
        return this.repository.createOrder(order)
    }

    findAllPendingOrders() {
        return this.repository.findAllPendingOrders()
    }

    updateOrderStatus(id) {
        return this.repository.updateOrderStatus(id)
    }
}