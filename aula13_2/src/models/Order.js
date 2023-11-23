import { Base } from './Base'

export default class Order extends Base{
    constructor(props){
        super()
        this.productName = props.product.name
        this.clientAddress = props.client.address
        this.clientName = props.client.name
        this.wasDelivered = false
    }
}