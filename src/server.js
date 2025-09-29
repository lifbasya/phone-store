import express from 'express';
import { testConnection } from './db.js';

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  testConnection();
});