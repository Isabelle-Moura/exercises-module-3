// Import the 'dotenv' library to load environment variables from the .env file
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import { MongoClient } from "mongodb";

export class ConfigDatabase {
   static initialize() {
      const client = new MongoClient(process.env.DATABASE_URL as string);
      const collection = client.db("linkedisney").collection("profile");
      return { client, collection };
   }
}
