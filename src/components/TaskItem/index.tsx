import { TaskPriority } from "../../interfaces/components/taskItem.interface"
import * as S from "./styles"

interface ITaskItemComponent {
  title: string;
  description: string;
  priority: TaskPriority;
  due_date: string;
  completion_date?: string;
}

function TaskItemComponent({title, description, priority, due_date, completion_date}: ITaskItemComponent) {
  return (
              <S.Container>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <S.PriorityBadge priority={priority}>
                  {priority}
                </S.PriorityBadge>
                <S.DeadlineContainer>
                  <p>Prazo: {due_date}</p>
                  <p>Concluída: {completion_date ?? "Não concluída"}</p>
                </S.DeadlineContainer>
              </S.Container>
  )
}

export default TaskItemComponent