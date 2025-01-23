export enum TaskPriority {
  CRITICAL = "critical",
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
  NONE = "none",
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  due_date: string;
  completion_date?: string;
}
