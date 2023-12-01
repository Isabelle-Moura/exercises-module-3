import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export class ConfigDatabase {
   static initialize() {
      const client = new MongoClient(process.env.DATABASE_URL as string);
      const collection = client.db("blog-db").collection("posts");
      return { client, collection };
   }
}
