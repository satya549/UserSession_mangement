import { Request, Response, NextFunction, query } from "express";
import { AnyZodObject} from "zod";


const validate = (Schema: AnyZodObject) => ( req: Request, res: Response, next: NextFunction) =>{

    try {
        Schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        })
    } catch (error) {
        return res.status(400).send(error)
    }
}

export default validate;