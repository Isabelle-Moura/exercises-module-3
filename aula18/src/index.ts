import express from "express";
import { postRoute } from "./routes/post-routes";

const app = express();

app.use(express.json());
app.use(postRoute);

app.listen(3030, () => console.log("Server is running on http://localhost:3030"));
