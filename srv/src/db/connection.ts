import { Sequelize } from 'sequelize';
//import dbConfig from './config/config';
const dbConfig = require('./config/config.cjs');
import { Environment } from '../types/types';

const env: Environment = (process.env.NODE_ENV as Environment) ?? 'development';
export const db = new Sequelize(
  dbConfig[env].database,
  dbConfig[env].username,
  dbConfig[env].password,
  {
    host: dbConfig[env].host,
    dialect: 'postgres',
    timezone: '+02:00',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },

    logging: console.log,
  }
);
