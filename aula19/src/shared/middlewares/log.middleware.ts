import { NextFunction, Request, Response } from "express";

export function logMiddleware(req: Request, res: Response, next: NextFunction) {
   console.log("Method: ", req.method);
   console.log("Url: ", req.url);
   console.log("Headers: ", req.headers);
   console.log("Body: ", req.body);
   console.log("Params: ", req.params);
   console.log("Query: ", req.query);

   next();
}
