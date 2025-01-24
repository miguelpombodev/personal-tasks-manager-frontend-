import { ICreateTask } from "../pages/home.interface";

export interface ICreateTaskResponse extends ICreateTask {
  id: string;
  completion_date: string | null;
}
