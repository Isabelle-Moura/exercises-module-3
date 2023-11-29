export class DonationService {
    constructor(repository){
        this.repository = repository
    }

    async createDonation(donation){
        try {
            const result = await this.repository.createDonation(donation)
            return result
        } catch (error) {
            console.log("There was an error in createDonation at service", error)
        }
    }

    async updateDonationStatus(donation){
        try {
            const result = await this.repository.updateDonationStatus(donation)
            return result
        } catch (error) {
            console.log("There was an error in updateDonation at service", error)
        }
    }

    async getAllDonations(){
        try {
            const result = await this.repository.getAllDonations()
            return result
        } catch (error) {
            console.log("There was an error in getAllDonations at service", error)
        }
    }

    async getAllDonationsByCity(city){
        try {
            const result = await this.repository.getAllDonationsByCity(city)
            return result
        } catch (error) {
            console.log("There was an error in getAllDonationsByCity at service", error)
        }
    }

    async getDonationById(id){
        try {
            const result = await this.repository.getDonationById(id)
            return result
        } catch (error) {
            console.log("There was an error in getDonationById at service", error)
        }
    }

    async deleteDonation(id){
        try {
            const result = await this.repository.deleteDonation(id)
            return result
        } catch (error) {
            console.log("There was an error in deleteDonation at service", error)
        }
    }
}