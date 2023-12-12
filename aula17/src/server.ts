import express from "express";
import { profileRoute } from "./routes";

const app = express();

app.use(express.json());
app.use(profileRoute);

app.listen(3000, () => console.log("Server is running on http://localhost:3000"));
