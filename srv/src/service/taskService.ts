import Task from '../db/models/Task';
import { ModelToTaskDto, TaskToModelDto } from '../dto/DTOs';
import { ToDoState, type Task as TaskType } from '../types/types';

const taskService = {
  async getTasks() {
    const tasks = await Task.findAll();

    return tasks.map((task) => ModelToTaskDto(task.get()));
  },

  async getTaskById(id: number): Promise<TaskType> {
    try {
      const selectedTask = await Task.findOne({
        where: {
          id,
        },
      });
      if (!selectedTask) throw new Error('Task not found');
      return ModelToTaskDto(selectedTask.get());
    } catch (error) {
      console.error('Database error: ', { error });
      throw error;
    }
  },
  async saveTaskStateChange(task: TaskType): Promise<TaskType> {
    switch (task.state) {
      case ToDoState.ToDo:
        task.state = ToDoState.InProgress;
        break;
      case ToDoState.InProgress:
        task.state = ToDoState.Done;
        break;
      case ToDoState.Done:
        // TODO
        break;
      default:
        break;
    }

    try {
      const convertedItem = TaskToModelDto(task);
      const [effectedCount] = await Task.update(
        { ...convertedItem },
        {
          where: {
            id: task.id,
          },
        }
      );

      if (effectedCount === 0) {
        throw new Error(`Updated row not found`);
      }

      return await this.getTaskById(task.id);
    } catch (error) {
      console.error('Database error: ', { error });
      throw error;
    }
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
