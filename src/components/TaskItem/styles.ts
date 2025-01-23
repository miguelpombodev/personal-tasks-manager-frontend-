import styled from "styled-components";
import { TaskPriority } from "../../interfaces/task";

export const Container = styled.div`
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
