import styled from "styled-components";
import { TaskPriority } from "../../interfaces/task";
import { darken } from "polished";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.large};
`;

export const ListHeader = styled.header`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const NewTaskButton = styled.button`
  border: none;
  padding: 10px 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.primary)};
  }
`;

export const TaskList = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.medium};
`;

export const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};

  h3 {
    font-weight: 500;
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 0.9rem;
  }
`;

interface PriorityBadgeProps {
  priority: TaskPriority;
}

export const PriorityBadge = styled.span<PriorityBadgeProps>`
  font-size: 0.9rem;
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme, priority }) => {
    switch (priority) {
      case TaskPriority.CRITICAL:
        return theme.colors.priorityCritical;
      case TaskPriority.HIGH:
        return theme.colors.priorityHigh;
      case TaskPriority.MEDIUM:
        return theme.colors.priorityMedium;
      case TaskPriority.LOW:
        return theme.colors.priorityLow;
      case TaskPriority.NONE:
        return theme.colors.priorityNone;
    }
  }};
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
`;

export const DeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
