import express, { Request, Response } from 'express';
import cors from 'cors';
import taskController from '../controller/TaskController';
import config from '../config';

const router = express.Router();
router.use(
  cors({
    origin: `http://localhost:${config.clientPort}`,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
  })
);

router.use(express.json());

router.get('/', (req: Request, res: Response) => {
  res.send({ data: 'hello world' });
});

router.get('/tasks', taskController.getTasks);
router.post('/new-task', taskController.addTask);
router.put('/update-task', taskController.saveTask);

export default router;
