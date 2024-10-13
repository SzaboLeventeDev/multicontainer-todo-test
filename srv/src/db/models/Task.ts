import { DataTypes } from 'sequelize';
import { db } from '../connection';

const Task = db.define('task', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  state: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isIn: [[0, 1, 2, 3]],
    },
  },
});

export default Task;
