import styled from "styled-components";
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

export const EmptyTaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EmptyTaskListText = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`;

export const EmptyTaskListImage = styled.img`
  width: 250px;
  height: 300px;
`;

export const HomeModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;
