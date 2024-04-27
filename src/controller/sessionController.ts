import { createSession, updateSession } from "../service/session";
import { validatePassword } from "../service/user.service";
import { Request, Response } from "express";
import { findSessions } from "../service/session";


export async function createUserSessionHandler(req: Request, res: Response ) {

    const user = await validatePassword(req.body);

    if(!user) {
        return res.status(401).send("Invalid email or password");
    }

    const session = createSession(user._id, req.get("user-agent") || "")
}


export async function getUserSessionsHandler(req: Request, res: Response ) {
  const userId = res.locals.user._id;

  const sessions = await findSessions({ user: userId, valid: true});

  return res.send(sessions);
}



export async function deleteSessionsHandler(req: Request, res: Response ) {
    const sessionId = res.locals.user.session;

    await updateSession({ _id: sessionId}, {valid: false});

    return res.send({
        accessToken: null,
        refreshToken: null
    });
}
  