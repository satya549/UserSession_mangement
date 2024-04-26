import { Express, Request, Response } from "express";
import { createuserHandler } from "./controller/user.controller";
import validate from "./middleware/validateResours";
import { createUserSchema } from "./schema/user.schema";
import { createSessionSchema } from "./schema/session.schema";
import { getUserSessionHandler } from "./controller/sessionController";



function routes (app: Express){
    app.get("/helthcheck", (req: Request, res: Response) => res.sendStatus(200));

    app.post('/api/users',validate(createUserSchema), createuserHandler);

    app.post('/api/session',validate(createSessionSchema));
    
    app.get('/api/session',getUserSessionHandler);

  }

export default routes;