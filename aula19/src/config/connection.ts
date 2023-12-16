import mongoose from "mongoose";
import { env } from "./env";

async function connectToDatabase() {
   try {
      mongoose.connection.on("open", () => console.log("✨✅ You was connected to database."));
      mongoose.connection.on("close", () => console.log("💥❌ Database has cancelled it's connection."));
   } catch (error) {
      mongoose.connection.on("error", () => console.log("😓 There was an error connecting to database: ", error));
   }
   await mongoose.connect(env.DATABASE_URL);
}

async function disconnectToDatabase() {
   await mongoose.disconnect();
   return console.log({ message: "You was disconnected from database." });
}

export { connectToDatabase };
