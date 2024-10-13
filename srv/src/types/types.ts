export enum ToDoState {
  'ToDo' = 0,
  'InProgress' = 1,
  'Done' = 2,
  'Deleted' = 3,
}

export type Task = {
  id: number;
  name: string;
  state: ToDoState;
};

export type TaskDbRecord = {
  id: string;
  name: string;
  state: ToDoState;
  createdAt: string;
  updatedAt: string;
  [key: string]: string | number | boolean | Date;
};

export type Config = {
  port: number;
  /** for CORS configuration */
  clientPort: number;
};

export type DbConfig = {
  [env in 'development' | 'test' | 'production']: {
    database: string;
    username: string;
    password: string;
    host: string;
    dialect: 'postgres' | 'mysql' | 'mongo';
  };
};

export type Environment = 'development' | 'test' | 'production';
