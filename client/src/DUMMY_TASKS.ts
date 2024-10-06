import { ToDoState, type Task } from "./types";

export const DUMMY_TASKS: Task[] = [
  {
    id: '1_2024_10_06', name: 'Check docker docs',
    state: ToDoState.ToDo
  },
  {
    id: '2_2024_10_06', name: 'Check expressjs docs',
    state: ToDoState.InProgress
  },
  {
    id: '3_2024_10_06', name: 'Check vue docs',
    state: ToDoState.Deleted
  },
  {
    id: '1_2024_10_06', name: 'Generate postgres container',
    state: ToDoState.ToDo
  },
  {
    id: '1_2024_10_06', name: 'Create docker compose file',
    state: ToDoState.InProgress
  },
]