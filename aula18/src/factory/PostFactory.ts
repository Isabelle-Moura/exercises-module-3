import { PostRepository } from "../repository/PostRepository";
import { ConfigDatabase } from "../database/ConfigDatabase";
import { PostService } from "../service/PostService";
import { PostController } from "../controller/PostController";

const database = ConfigDatabase.initialize();

export class PostFactory {
   static makePost() {
      const repository = new PostRepository(database.collection);
      const service = new PostService(repository);
      const controller = new PostController(service);
      return controller;
   }
}
