import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    console.log(dbUri);
    const ab = await mongoose.connect(dbUri, {
      dbName: "session-authentication",
    });
    console.log("DB connected");
    ab.connection.createCollection("user-manage");
  } catch (error) {
    console.error("Could not connect to db");
    process.exit(1);
  }
}

export default connect;
