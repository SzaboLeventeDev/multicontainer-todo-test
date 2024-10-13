import { Request, Response, NextFunction } from 'express';
import taskService from '../service/taskService';
import { ToDoState } from '../types/types';

const taskController = {
  async getTasks(_: Request, res: Response): Promise<void> {
    try {
      const tasks = await taskService.getTasks();
      res.status(200).json([...tasks]);
    } catch (error) {
      console.error(error);
    }
  },
  async saveTask(req: Request, res: Response, _: NextFunction): Promise<void> {
    try {
      const body = await req.body;
      if (!body) res.status(400).json({ message: 'Bad request!' });

      const { id, name, state } = body;

      if (!id || !name || state === null || state === undefined)
        res
          .status(400)
          .json({ message: 'Missing required fields! (id, name, state)' });

      if (!Object.values(ToDoState).includes(state))
        res.status(400).json({ message: 'Invalid task state!' });

      const savedTask = await taskService.saveTaskStateChange(body);
      res.status(201).json({ ...savedTask });
    } catch (error) {
      console.error(error);
    }
  },

  async addTask(req: Request, res: Response, _: NextFunction): Promise<void> {
    try {
      const body = await req.body;
      if (!body) res.status(400).json({ message: 'Bad request!' });

      const { name, state } = body;

      if (!name || state === null || state === undefined)
        res
          .status(400)
          .json({ message: 'Missing required fields! (name, state)' });

      if (!Object.values(ToDoState).includes(state))
        res.status(400).json({ message: 'Invalid task state!' });

      const savedTask = await taskService.addTask(body);
      res.status(201).json({ ...savedTask });
    } catch (error) {
      console.error(error);
    }
  },
};

export default taskController;
