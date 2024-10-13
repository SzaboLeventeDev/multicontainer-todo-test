import express from 'express';
import api from './routes';
import { db } from './db/connection';

const app = express();
const port = 3000;

app.use(api);

const startServer = async () => {
  try {
    await db.authenticate();
    console.log('DB connection stabilized successfully.');

    app.listen(port, () => {
      console.log(`Server connection is successful on PORT: ${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database', { error });
  }
};

startServer();