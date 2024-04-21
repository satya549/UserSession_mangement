import express  from "express";
import config from "config";
import connect from "./utils/connect";
import routes from "./routes";

const port = config.get<number>("port")

const app = express();

app.listen(port, async () => {
    console.log('app is running')

   await connect();

   routes(app);
   

});