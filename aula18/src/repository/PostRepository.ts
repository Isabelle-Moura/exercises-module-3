import { Post } from "../model/Post";

export class PostRepository {
   constructor(private collection: any) {}

   async create(post: Post) {
      try {
         return await this.collection.insertOne(post);
      } catch (error: any) {
         throw new Error(error);
      }
   }

   async findAll() {
      try {
         return await this.collection.find({ deletedAt: null }).toArray();
      } catch (error: any) {
         throw new Error(error);
      }
   }
}
