export enum ToDoState {
  'ToDo' = 0,
  'InProgress' = 1,
  'Done' = 2,
  'Deleted' = 3,
}

export type Task = {
  id: string;
  name: string;
  state: ToDoState;
};
