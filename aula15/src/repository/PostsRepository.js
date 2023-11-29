/* 
    - Criar post
    - Dar like ($inc:)
    - Encontrar posts pelo autor
    - Encontrar todos os posts
    - Deletar um post
*/

import { ObjectId } from "mongodb";

export class PostsRepository {
   constructor(collection) {
      this.collection = collection;
   }

   async createPost(post) {
      try {
         return await this.collection.insertOne(post);
      } catch (error) {
         console.log("There was an error in createPost at repository", error);
      }
   }

   async likeAnPost(content) {
      try {
         return await this.collection.updateOne({ content: content }, { $inc: { likes: 1 } });
      } catch (error) {
         console.log("There was an error in likeAnPost at repository", error);
      }
   }

   async findPostsByAuthor(author) {
      try {
         return await this.collection.find({ author }).toArray();
      } catch (error) {
         console.log("There was an error in findPostsByAuthor at repository", error);
      }
   }

   async getPosts() {
      try {
         return await this.collection.find({}).toArray();
      } catch (error) {
         console.log("There was an error in getPosts at repository",error);
      }
   }

   async deletePost(id) {
      try {
         return await this.collection.deleteOne({ _id: new ObjectId(id) });
      } catch (error) {
         console.log("There was an error in deletePost at repository", error);
      }
   }
}
