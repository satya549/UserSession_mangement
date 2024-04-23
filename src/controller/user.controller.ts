import { Request, Response } from "express"
import { createUser } from "../service/user.service"

export async function createuserHandler(req: Request, res: Response){
try {
    const user = await createUser(req.body);
    return user;
} catch (error) {
    console.log(error)
    // return res.status(409).send(error.message)
    return res.status(409).send((error as Error).message);

}
}