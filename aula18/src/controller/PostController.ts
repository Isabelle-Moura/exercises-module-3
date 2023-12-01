import { PostService } from "../service/PostService";
import { Request, Response } from "express";

export class PostController {
   constructor(private service: PostService) {}

   async create(req: Request, res: Response) {
      try {
         const { body } = req;
         const result = await this.service.create(body);
         res.status(201).json(result);
      } catch (error: any) {
         console.error(error);
         res.status(400).json(error);
      }
   }

   async findAll(req: Request, res: Response) {
      try {
         const result = await this.service.findAll();
         res.status(200).json(result);
      } catch (error: any) {
         console.error(error);
         res.status(400).json(error);
      }
   }
}
