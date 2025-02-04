import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LoginImageContainer = styled.div`
  width: 50vh;
  height: 100vh;
  flex-grow: 1;
  padding: 10px;
`;

export const LoginImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

export const LoginContainer = styled.div`
  width: 50vh;
  height: 100vh;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 40px;
`;

export const LoginContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;

  h2 {
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.5rem;
  }
`;

export const CreateAccountLink = styled(Link)`
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  gap: 60px;

  & > form {
    width: 100%;
  }
`;
