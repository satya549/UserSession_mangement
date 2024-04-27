import { Request, Response, NextFunction } from "express";
import { get } from "lodash";



const deserializeUser = ( req: Request, res: Response, next: NextFunction) => {
 
    const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "")

    if(!accessToken){
        return next()
    }
}

export default deserializeUser;