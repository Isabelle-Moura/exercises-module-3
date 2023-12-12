import { Router } from "express";
import { ProfileFactory } from "./factory";

const controller = ProfileFactory.makeProfile();
const profileRoute = Router();

profileRoute.post("/profiles", controller.create.bind(controller));

profileRoute.get("/profiles", controller.getAll.bind(controller));

profileRoute.patch("/profiles", controller.update.bind(controller));

profileRoute.delete("/profiles", controller.delete.bind(controller));

export { profileRoute };
