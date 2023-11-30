/* 
    -  criar um profile, passando: fullname, title, bio, currentOccupation, education, certifications
    -  buscar todos os perfis(Com o campo deletedAt nulo)
    -  atualizar o status
    -  cancelar uma conta preenchendo o campo deletedAt
*/

import { Profile } from "../model/Profile";

export class ProfileRepository {
   constructor(private collection: any) {}

   async create(profile: Profile) {
      return await this.collection.insertOne(profile);
   }

   async getAllWithDeleteNull() {
      return await this.collection.find({ deletedAt: null }).toArray();
   }

   async updateStatus(profile: Profile) {
      return await this.collection.updateOne({ _id: profile._id }, { $set: { status: profile.status } });
   }

   async delete(profile: Profile) {
      return await this.collection.updateOne({ _id: profile._id }, { $set: { deletedAt: new Date() } });
   }
}
