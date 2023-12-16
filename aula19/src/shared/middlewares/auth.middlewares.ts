import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { env } from "../../config/env";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
   const authorization = req.headers["authorization"]; // Estamos pegando o token do headers na requisição.

   if (!authorization) {
      return res.status(401).json({
         error: true,
         message: "Unathorized. Try again.",
         status: 401,
      });
   }

   const token = authorization.replace("Bearer ", ""); // Separarando o token

   try {
      verify(token, env.JWT_SECRET_KEY);
   } catch (error: any) {
      return res.status(401).json({
         error: true,
         message: "Unauthorized",
         status: 401,
      });
   }

   next();
}
