import React, { useCallback, useEffect, useState } from 'react';
import { 
  Container, 
  TaskList, 
  TaskItem, 
  PriorityBadge, 
  ListHeader,
  NewTaskButton,
  DeadlineContainer,
  HomeModalFooter
} from './styles';
import { Task, TaskPriority } from '../../interfaces/task';
import { client } from '../../services/api_client';
import {endpoints} from '../../services/endpoints'
import Modal from '../../components/Modal';
import ButtonComponent from '../../components/Button';


const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
      <ButtonComponent onClick={handleOpenModal} title='+ Nova Tarefa' color='primary'/>
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
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        title="Crie uma nova tarefa!"
        footer={
          <HomeModalFooter>
            <ButtonComponent color='cancel' title='Cancelar' onClick={handleCloseModal} />
            <ButtonComponent color='secondary' title='Adicionar Tarefa'/>
          </HomeModalFooter>
        }
      >
        {/* Modal content goes here */}
        <p>Task creation form or details</p>
      </Modal>
    </Container>
  );
};

export default Tasks;