import "dotenv/config";
import { connectToDatabase } from "./config/connection";
import { app } from "./server";
import { env } from "./config/env";

connectToDatabase();

app.listen(env.PORT, () => console.log("💖 Server is running, finally!"));
