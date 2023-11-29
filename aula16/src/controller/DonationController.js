import { Donation } from "../entities/Donation.js"

export class DonationController{
    constructor(service){
        this.service = service
    }

    async createDonation(req, res){
        try {
            const { body } = req
            const newDonation = new Donation(body.title, body.description, body.city, body.location, body.phoneNumber)
            const result = await this.service.createDonation(newDonation)
            res.status(201).json(result)
        } catch (error) {
            console.log("There was an error in createDonation at controller", error)
        }
    }

    async updateDonationStatus(req, res){
        try {
            const { body } = req
            const result = await this.service.updateDonationStatus(body)
            res.status(200).json(result)
        } catch (error) {
            console.log("There was an error in updateDonation at controller", error)
        }
    }

    async getAllDonations(req, res){
        try {
            const result = await this.service.getAllDonations()
            res.status(200).json(result)
        } catch (error) {
            console.log("There was an error in getAllDonations at controller", error)
        }
    }

    async getAllDonationsByCity(req, res){
        try {
            const { city } = req.params
            const result = await this.service.getAllDonationsByCity(city)
            res.status(200).json(result)
        } catch (error) {
            console.log("There was an error in getAllDonationsByCity at controller", error)
        }
    }

    async getDonationById(req, res){
        try {
            const { id } = req.params
            const result = await this.service.getDonationById(id)
            res.status(200).json(result)
        } catch (error) {
            console.log("There was an error in getDonationById at controller", error)
        }
    }

    async deleteDonation(req, res){
        try {
            const { id } = req.params
            const result = await this.service.deleteDonation(id)
            res.status(200).json(result)
        } catch (error) {
            console.log("There was an error in deleteDonation at controller", error)
        }
    }

}