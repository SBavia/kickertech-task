import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import betRoutes from "./routes/betRoutes";

const port = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/bets", betRoutes);

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
