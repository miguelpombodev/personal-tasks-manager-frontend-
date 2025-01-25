import React from "react";
import { LoadingContainer, Spinner } from "./styles";
import Modal from "../Modal";

interface LoadingModalProps {
  isOpen: boolean;
  message?: string;
}

const LoadingModal: React.FC<LoadingModalProps> = ({
  isOpen,
  message = "Carregando...",
}) => {
  return (
    <Modal isOpen={isOpen} title="Processando" onClose={() => {}}>
      <LoadingContainer>
        <Spinner />
        <p>{message}</p>
      </LoadingContainer>
    </Modal>
  );
};

export default LoadingModal;
