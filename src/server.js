import express from 'express';
import { testConnection } from './db.js';
import usersRouter from './routes/usersRouter.js';

const app = express();

const PORT = 3000;

app.use(usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  testConnection();
});