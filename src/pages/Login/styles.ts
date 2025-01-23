import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LoginBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;

  h2 {
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
