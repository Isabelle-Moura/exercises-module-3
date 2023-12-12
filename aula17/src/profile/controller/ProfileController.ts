import { ProfileService } from "../service/ProfileService";
import { Request, Response } from "express";

export class ProfileController {
   constructor(private service: ProfileService) {}

   async create(req: Request, res: Response) {
      try {
         const { body } = req;
         const result = await this.service.create(body);
         res.status(201).json(result);
      } catch (error: any) {
         console.error(error);
      }
   }

   async getAll(req: Request, res: Response) {
      try {
         const result = await this.service.getAllWithDeleteNull();
         res.status(200).json(result);
      } catch (error: any) {
         console.error(error);
      }
   }

   async update(req: Request, res: Response) {
      try {
         const { body } = req;
         const result = await this.service.updateStatus(body);
         res.status(200).json(result);
      } catch (error: any) {
         console.error(error);
      }
   }
   async delete(req: Request, res: Response) {
      try {
         const { body } = req;
         const result = await this.service.delete(body);
         res.status(200).json(result);
      } catch (error: any) {
         console.error(error);
      }
   }
}
