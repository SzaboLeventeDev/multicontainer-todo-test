import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

const env = process.env.NODE_ENV || 'development'; // TODO: itt honnan fogja tudni egy prod futtatásakor pl a NODE_ENV-et?

let envPath = '';

if (fs.existsSync(path.resolve(__dirname, `../.env.${env}.local`))) {
  envPath = path.resolve(__dirname, `../.env.${env}.local`);
} else if (fs.existsSync(path.resolve(__dirname, `../.env.${env}`))) {
  envPath = path.resolve(__dirname, `../.env.${env}`);
} else if (fs.existsSync(path.resolve(__dirname, '../.env'))) {
  envPath = path.resolve(__dirname, '../.env');
}

if (envPath) {
  console.info(`Loading environment variables from :${envPath}`);
  dotenv.config({ path: envPath });
}
// const result = dotenv.config({ path: envPath });
// if (result.error) {
//   //logger.error('Database error: ' - Date.now() - result.error);
//   console.error(`Database error: - ${Date.now()} - ${result.error}`);
// }

export const dbConfig = {
  // [env]: {
  username: process.env.POSTGRES_USER || 'user',
  password: process.env.POSTGRES_PASSWORD || 'password',
  database: process.env.POSTGRES_DB || 'database',
  host: process.env.DATABASE_HOST || 'localhost',
  dialect: 'postgres',
  // },
};
