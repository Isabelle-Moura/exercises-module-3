import { ObjectId } from "mongodb"

export class DonationRepository{
    constructor(db){
        this.db = db
    }

    async createDonation(donation){
        try {
            const result = await this.db.insertOne(donation)
            return result
        } catch (error) {
            console.log("There was an error in createDonation at repository", error)
        }
    }

    async updateDonationStatus(id){
        try {
            const result = await this.db.updateOne({_id: new ObjectId(id)}, {isDonated: true})
            return result
        } catch (error) {
            console.log("There was an error in updateDonation at repository", error)
        }
    }

    async getAllDonations(){
        try {
            const result = await this.db.find().toArray()
            return result
        } catch (error) {
            console.log("There was an error in getAllDonations at repository", error)
        }
    }
    async getAllDonationsByCity(city){
        try {
            const result = await this.db.find({ city }).toArray()
            return result
        } catch (error) {
            console.log("There was an error in getAllDonationsByCity at repository", error)
        }
    }

    async getDonationById(id){
        try {
            const result = await this.db.find({_id: new ObjectId(id)})
            return result
        } catch (error) {
            console.log("There was an error in getDonationById at repository", error)
        }
    }

    async deleteDonation(id){
        try {
            const result = await this.db.deleteOne({_id: new ObjectId(id)})
            return result
        } catch (error) {
            console.log("There was an error in deleteDonation at repository", error)
        }
    }

}