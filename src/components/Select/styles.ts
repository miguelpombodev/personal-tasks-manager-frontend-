import styled from "styled-components";

export const Container = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  cursor: pointer;
`;
