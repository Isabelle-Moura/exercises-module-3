import { ConfigDatabase } from "./database/configDB";
import { ProfileController } from "./profile/controller/ProfileController";
import { ProfileRepository } from "./profile/repository/ProfileRepository";
import { ProfileService } from "./profile/service/ProfileService";

const database = ConfigDatabase.initialize();

export class ProfileFactory {
   static makeProfile() {
      const repository = new ProfileRepository(database.collection);
      const service = new ProfileService(repository);
      const controller = new ProfileController(service);
      return controller;
   }
}
