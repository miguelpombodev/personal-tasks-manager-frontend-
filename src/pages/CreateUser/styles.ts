import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const CreateUserImageContainer = styled.div`
  width: 50vh;
  height: 100vh;
  flex-grow: 1;
  padding: 10px;
`;

export const CreateUserImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

export const CreateUserContainer = styled.div`
  width: 50vh;
  height: 100vh;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 40px;
  gap: 60px;
`;

export const CreateUserContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 80%;

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

export const CreateUserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  gap: 20px;

  & > form {
    width: 100%;
  }
`;

export const CreateUserFullNameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const CreateUserAcceptTermsAndConditions = styled.span`
  margin-bottom: 16px;
  display: flex;
  gap: 8px;

  & > a {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export const CreateUserAcceptTermsAndConditionsCheckbox = styled.input``;

export const CreateUserDividerContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  margin: 20px 0;
  width: 100%;
`;

export const CreateUserLine = styled.span`
  flex: 1;
  height: 1px;
  background: ${({ theme }) => theme.colors.lightPrimary};
  margin: 0 10px;
`;

export const SocialButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 20px;
`;

export const SocialButton = styled.button<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: ${({ color }) => color};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }

  svg {
    font-size: 20px;
  }
`;
