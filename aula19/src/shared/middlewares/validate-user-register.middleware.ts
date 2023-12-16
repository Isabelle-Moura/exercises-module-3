import { NextFunction, Request, Response } from "express";

export function validateUserRegisterMiddleware(req: Request, res: Response, next: NextFunction) {
   const { body } = req;

   if (body.fullname === undefined) {
      throw res.status(400).json({
         error: true,
         message: "Fullname is missing. Try again.",
      });
   }

   if (body.nickname === undefined) {
      throw res.status(400).json({
         error: true,
         message: "Nickname is missing. Try again.",
      });
   }

   if (body.email === undefined) {
      throw res.status(400).json({
         error: true,
         message: "E-mail is missing. Try again.",
      });
   }

   if (body.posts === undefined) {
      throw res.status(400).json({
         error: true,
         message: "This user's posts is missing. Try again.",
      });
   }
}
