import { Express, Request, Response } from "express";
import { createuserHandler } from "./controller/user.controller";
import validate from "./middleware/validateResours";
import { createUserSchema } from "./schema/user.schema";
import { createSessionSchema } from "./schema/session.schema";
import {
  createUserSessionHandler,
  getUserSessionsHandler,
  deleteSessionsHandler,
} from "./controller/sessionController";
import requireUser from "./middleware/requireUser";

function routes(app: Express) {
  app.get("/helthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/api/users", validate(createUserSchema), createuserHandler);

  app.post("/api/session",validate(createSessionSchema),createUserSessionHandler);

  app.get("/api/session", requireUser, getUserSessionsHandler);

  app.delete("/api/session", requireUser, deleteSessionsHandler);
}

export default routes;
