import { Sequelize } from 'sequelize';
import { dbConfig } from './config/config';
import { Environment } from '../types/types';

const env: Environment = (process.env.NODE_ENV as Environment) ?? 'development';
export const db = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
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
