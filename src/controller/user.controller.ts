import { Request, Response } from "express"
import { createUser } from "../service/user.service"
import { CreateUserInput } from "../schema/user.schema";

export async function createuserHandler(req: Request<{}, {}, CreateUserInput["body"]>, res: Response){
try {
    const user = await createUser(req.body);
    return res.send(user);
} catch (error) {
    console.log(error)
    // return res.status(409).send(error.message)
    return res.status(409).send((error as Error).message);

}
}