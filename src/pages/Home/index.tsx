import React, { useCallback, useEffect, useState } from 'react';
import { 
  Container, 
  TaskList, 
  TaskItem, 
  PriorityBadge, 
  ListHeader,
  NewTaskButton,
  DeadlineContainer
} from './styles';
import { Task, TaskPriority } from '../../interfaces/task';
import { client } from '../../services/api_client';
import {endpoints} from '../../services/endpoints'


const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getPriority = {
      "CRITICAL": TaskPriority.CRITICAL,
      "HIGH": TaskPriority.HIGH,
      "MEDIUM": TaskPriority.MEDIUM,
      "LOW": TaskPriority.LOW,
      "NONE": TaskPriority.NONE,
  }

  const getTasksList = async (): Promise<Task[]> => {
    const { data } = await client.get<Task[]>(endpoints.GET_USER_TASKS_LIST);

    const formattedList = data.map<Task>((task) => {
      task.priority = getPriority[task.priority.toUpperCase()]

      return task
    })
    
console.log(formattedList)
    return formattedList
  }
useEffect(() => {
  const fetchTasks = async () => {
    try {
      const tasksList = await getTasksList();
      setTasks(tasksList);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  fetchTasks();
}, []);

  return (
    <Container>
      <ListHeader>
      <h1>Lista de Tarefas</h1>
      <NewTaskButton>+ Nova Tarefa</NewTaskButton>
      </ListHeader>
      <TaskList>
        {tasks.map(task => (
          <TaskItem key={task.id}>
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <PriorityBadge priority={task.priority}>
              {task.priority}
            </PriorityBadge>
            <DeadlineContainer>
              <p>Prazo: {task.due_date}</p>
              <p>Concluída: {task.completion_date ?? "Não concluída"}</p>
            </DeadlineContainer>
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

export default Tasks;