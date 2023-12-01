import { Post, PostProps } from "../model/Post";
import { PostRepository } from "../repository/PostRepository";

export class PostService {
   constructor(private repository: PostRepository) {}

   async create(data: PostProps) {
      try {
         const newPost = new Post(data);
         return await this.repository.create(newPost);
      } catch (error: any) {
         throw new Error(error);
      }
   }

   async findAll() {
      try {
         return await this.repository.findAll();
      } catch (error: any) {
         throw new Error(error);
      }
   }
}
