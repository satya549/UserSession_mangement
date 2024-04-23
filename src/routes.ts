import { Express, Request, Response } from "express";
import { createuserHandler } from "./controller/user.controller";



function routes (app: Express){
    app.get("/helthcheck", (req: Request, res: Response) => res.sendStatus(200));


  app.post('/api/users', createuserHandler)
}

export default routes;