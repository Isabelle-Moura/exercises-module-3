import { DonationRepository } from "../repository/DonationRepository.js";
import { DonationService } from "../service/DonationService.js";
import { DonationController } from "../controller/DonationController.js";

export class MakeDonation {
    static build(database) {
        const repository = new DonationRepository(database)
        const service = new DonationService(repository)
        const controller = new DonationController(service)
        return controller
    }
}