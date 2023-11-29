import { PostsRepository } from "../repository/PostsRepository.js";
import { PostsService } from "../service/PostsService.js";
import { PostsController } from "../controller/PostsController.js";

export class MakePosts {
    static build(database){
        const repository = new PostsRepository(database)
        const service = new PostsService(repository)
        const controller = new PostsController(service)
        return controller
    }
}