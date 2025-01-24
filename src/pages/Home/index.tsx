import React, { useEffect, useState } from "react";
import { Container, TaskList, ListHeader, HomeModalFooter } from "./styles";
import {
  ICreateTask,
  ITasksPriorities,
} from "../../interfaces/pages/home.interface";
import {
  Task,
  TaskPriority,
} from "../../interfaces/components/taskItem.interface";
import { client } from "../../services/api_client";
import { endpoints } from "../../services/endpoints";
import Modal from "../../components/Modal";
import ButtonComponent from "../../components/Button";
import TaskItem from "../../components/TaskItem";
import { useForm } from "react-hook-form";
import InputComponent from "../../components/Input";
import SelectComponent from "../../components/Select";
import { stringfiedDateFormat } from "../../utils/date.utils";
import { ICreateTaskResponse } from "../../interfaces/responses/createTask.interface";

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksPriorities, setTasksPriorities] = useState<ITasksPriorities[]>(
    [],
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTaskModalOpen, setTaskIsModalOpen] = useState(false);
  const { register, handleSubmit } = useForm<ICreateTask>();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleOpenTaskModal = () => setTaskIsModalOpen(true);
  const handleCloseTaskModal = () => setTaskIsModalOpen(false);

  const getPriority = {
    CRITICAL: TaskPriority.CRITICAL,
    HIGH: TaskPriority.HIGH,
    MEDIUM: TaskPriority.MEDIUM,
    LOW: TaskPriority.LOW,
    NONE: TaskPriority.NONE,
  };

  const getPriorityNumbered = {
    "1": TaskPriority.CRITICAL,
    "2": TaskPriority.HIGH,
    "3": TaskPriority.MEDIUM,
    "4": TaskPriority.LOW,
    "5": TaskPriority.NONE,
  };

  const getTasksList = async (): Promise<Task[]> => {
    const { data } = await client.get<Task[]>(endpoints.GET_USER_TASKS_LIST);

    const formattedList = data.map<Task>((task) => {
      task.priority = getPriority[task.priority.toUpperCase()];

      return task;
    });

    return formattedList;
  };

  const getTasksPrioritiesList = async (): Promise<ITasksPriorities[]> => {
    const { data } = await client.get<ITasksPriorities[]>(
      endpoints.GET_TASKS_PRIORITIES,
    );
    return data;
  };

  useEffect(() => {
    const fetchTasksAndTasksPriorities = async () => {
      try {
        const tasksList = await getTasksList();
        const tasksPrioritiesList = await getTasksPrioritiesList();

        setTasks(tasksList);
        setTasksPriorities(tasksPrioritiesList);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };

    fetchTasksAndTasksPriorities();
  }, [setTasks]);

  const handleCreateNewTask = async (newTask: ICreateTask) => {
    try {
      newTask.due_date = stringfiedDateFormat(newTask.due_date);

      const { data } = await client.post<ICreateTaskResponse>(
        endpoints.CREATE_NEW_USER_TASK,
        newTask,
      );

      const formattedTask: Task = {
        ...data,
        priority: getPriorityNumbered[data.priority.toString()],
      };

      setTasks((prevTasks) => [...prevTasks, formattedTask]);
      handleCloseModal();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Container>
      <ListHeader>
        <h1>Lista de Tarefas</h1>
        <ButtonComponent
          size="short"
          onClick={handleOpenModal}
          title="+ Nova Tarefa"
          color="primary"
        />
      </ListHeader>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem
            id={task.id}
            OnRemove={(id) =>
              setTasks((prevTasks) =>
                prevTasks.filter((task) => task.id !== id),
              )
            }
            onClick={handleOpenTaskModal}
            key={task.id}
            title={task.title}
            description={task.description}
            due_date={task.due_date}
            completion_date={task.completion_date}
            priority={task.priority}
          />
        ))}
      </TaskList>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Crie uma nova tarefa!"
      >
        <form onSubmit={handleSubmit(handleCreateNewTask)}>
          <InputComponent
            {...register("title", { required: true })}
            placeholder="Título da tarefa"
          />
          <InputComponent
            {...register("description", { required: true })}
            type="text"
            placeholder="Descrição da tarefa"
          />
          <SelectComponent
            {...register("priority", { required: true })}
            name="priority"
          >
            {tasksPriorities.map((priority) => (
              <option key={priority.id} value={priority.id}>
                {priority.name}
              </option>
            ))}
          </SelectComponent>
          <InputComponent
            {...register("due_date", { required: true })}
            type="date"
          />
          <HomeModalFooter>
            <ButtonComponent
              size="short"
              color="cancel"
              title="Cancelar"
              onClick={handleCloseModal}
            />
            <ButtonComponent
              size="short"
              color="secondary"
              title="Adicionar Tarefa"
              type="submit"
            />
          </HomeModalFooter>
        </form>
      </Modal>
      <Modal
        isOpen={isTaskModalOpen}
        onClose={handleCloseTaskModal}
        title="Crie uma nova tarefa!"
      >
        <p>task</p>
      </Modal>
    </Container>
  );
};

export default Tasks;
