import { Base } from './Base'

export default class Cars extends Base{
    constructor(plate, brand, model, color, year) {
        super()
        this.plate = plate
        this.brand = brand
        this.model = model
        this.color = color
        this.year = year
        this.isUsed = false
        this.isSold = false
    }
}