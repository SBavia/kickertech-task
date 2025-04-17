import dotenv from "dotenv";
dotenv.config();

import express, { ErrorRequestHandler } from "express";
import cors from "cors";

import betRoutes from "./routes/betRoutes";

const port = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/bets", betRoutes);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error("🔥 Error handler caught:", err);

  const status = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const data = err.data || null;

  res.status(status).json({
    error: {
      message,
      data,
    },
  });
};
app.use(errorHandler);

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
