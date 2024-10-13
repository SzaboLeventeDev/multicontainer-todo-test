import Task from '../db/models/Task';
import { ModelToTaskDto, TaskToModelDto } from '../dto/DTOs';
import type { Task as TaskType } from '../types/types';

const taskService = {
  async getTasks() {
    const tasks = await Task.findAll();

    return tasks.map((task) => ModelToTaskDto(task.get()));
  },
  async saveTask(task: TaskType): Promise<TaskType> {
    return task;
  },
  async addTask(task: TaskType): Promise<TaskType | undefined> {
    try {
      const convertedItem = TaskToModelDto(task);
      const newTask = await Task.create({ ...convertedItem });
      return ModelToTaskDto(newTask.get());
    } catch (error) {
      console.error('Database error: ', { error });
    }
  },
};

export default taskService;
