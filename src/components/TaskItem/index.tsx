import { ITaskItemComponent } from "../../interfaces/components/taskItem.interface";
import { FaTrashAlt } from "react-icons/fa";
import * as S from "./styles";
import { client } from "../../services/api_client";
import { endpoints } from "../../services/endpoints";

function TaskItemComponent({
  id,
  title,
  description,
  priority,
  due_date,
  completion_date,
  onClick,
  OnRemove,
}: ITaskItemComponent) {
  const handleRemoveItem = async () => {
    try {
      await client.delete(`${endpoints.REMOVE_USER_TASK}/${id}`);
      OnRemove(id);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  return (
    <S.Container>
      <div onClick={onClick} style={{ cursor: "pointer" }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <S.PriorityBadge priority={priority}>{priority}</S.PriorityBadge>
      </div>
      <S.DeadlineAndRemoveItemContainer>
        <S.DeadlineContainer>
          <p>Prazo: {due_date}</p>
          <p>Concluída: {completion_date ?? "Não concluída"}</p>
        </S.DeadlineContainer>
        <S.TrashContainer onClick={handleRemoveItem}>
          <FaTrashAlt />
        </S.TrashContainer>
      </S.DeadlineAndRemoveItemContainer>
    </S.Container>
  );
}

export default TaskItemComponent;
