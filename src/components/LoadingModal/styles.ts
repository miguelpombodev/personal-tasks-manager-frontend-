import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.large};
  text-align: center;

  p {
    margin-top: ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${({ theme }) => theme.colors.primary};
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;
