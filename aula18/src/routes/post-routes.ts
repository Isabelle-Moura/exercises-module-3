import { Router } from "express";
import { PostFactory } from "../factory/PostFactory";

const controller = PostFactory.makePost(); // instanciando o controller
const postRoute = Router();

postRoute.post("/posts", controller.create.bind(controller)); // Rota POST

postRoute.get("/posts", controller.findAll.bind(controller)); // Rota GET

export { postRoute };
