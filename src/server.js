import express from "express";
import { testConnection } from "./config/db.js";
import usersRouter from "./routes/usersRouter.js";

const app = express();
app.use(express.json());

const PORT = 3000;

app.use(usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  testConnection();
});
