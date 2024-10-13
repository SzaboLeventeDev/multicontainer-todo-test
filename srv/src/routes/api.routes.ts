import express, { Request, Response } from 'express';
import cors from 'cors';
import taskController from '../controller/TaskController';

const router = express.Router();
router.use(cors());
router.use(express.json());

router.get('/', (req: Request, res: Response) => {
  res.send({ data: 'hello world' });
});

router.get('/tasks', taskController.getTasks);
router.post('/new-task', taskController.saveTask);

export default router;
