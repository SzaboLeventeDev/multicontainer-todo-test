import { Task, TaskDbRecord } from '../types/types';

export const ModelToTaskDto = (task: TaskDbRecord): Task => {
  return {
    id: task.id,
    name: task.name,
    state: task.state,
  };
};

export const TaskToModelDto = (task: Task): Omit<TaskDbRecord, 'id'> => {
  return {
    name: task.name,
    state: task.state,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
};
