import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  display: flex;
  align-items: center;
`;

export const InputElement = styled.input`
  width: 90%;
  margin-left: 10px;
  outline: none;
  border: none;
`;
