import express from "express";
import { testConnection } from "./config/db.js";
import usersRouter from "./routes/usersRouter.js";
import productsRouter from "./routes/productsRoute.js";

const app = express();
app.use(express.json());

const PORT = 3000;

app.use(usersRouter);
app.use(productsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  testConnection();
});
