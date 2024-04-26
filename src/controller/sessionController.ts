import { createSession } from "../service/session";
import { validatePassword } from "../service/user.service";
import { Request, Response } from "express";


export async function createUserSessionHandler(req: Request, res: Response ) {

    const user = await validatePassword(req.body);

    if(!user) {
        return res.status(401).send("Invalid email or password");
    }

    const session = createSession(user._id, req.get("user-agent") || "")
}


export async function getUserSessionHandler(req: Request, res: Response ) {

}
