import { Sequelize } from 'sequelize';
const dbConfig = require('./config/config.cjs');

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
