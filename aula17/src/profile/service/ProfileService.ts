/* 
    -  criar um profile, passando: fullname, title, bio, currentOccupation, education, certifications
    -  buscar todos os perfis(Com o campo deletedAt nulo)
    -  atualizar o status
    -  cancelar uma conta preenchendo o campo deletedAt
*/

import { Profile } from "../model/Profile";
import { ProfileRepository } from "../repository/ProfileRepository";

export class ProfileService {
   constructor(private repository: ProfileRepository) {}

   async create(profile: Profile) {
      return await this.repository.create(profile);
   }

   async getAllWithDeleteNull() {
      return await this.repository.getAllWithDeleteNull();
   }

   async updateStatus(profile: Profile) {
      return await this.repository.updateStatus(profile);
   }

   async delete(profile: Profile) {
      return await this.repository.delete(profile);
   }
}
