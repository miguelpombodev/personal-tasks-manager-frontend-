export interface ICreateTask {
  title: string;
  description: string;
  priority: number;
  due_date: string;
}

export interface ITasksPriorities {
  id: string;
  name: string;
}
