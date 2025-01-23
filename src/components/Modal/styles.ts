import styled from "styled-components";
import { darken } from "polished";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium};
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};

  h2 {
    margin: 0;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ModalContent = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  flex-grow: 1;
  overflow-y: auto;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.medium};
  border-top: 1px solid ${({ theme }) => theme.colors.background};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => darken(0.2, theme.colors.gray)};
  }
`;
