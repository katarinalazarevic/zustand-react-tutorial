import React, { useState, useEffect } from "react";
import { Title } from "src/contents/login-page/login-page.styled";
import { useTaskStore } from 'src/store/task-store/useTaskStore';
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
`;

const Input = styled.input`
  width: 94%;
  padding: 10px;
  margin-bottom: 1rem;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 95%;
  padding: 10px;
  margin-bottom: 1rem;
  font-size: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const CancelButton = styled.button`
  background-color: #ccc;
  padding: 8px 16px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #b8b7b7;
  }
`;

const SaveButton = styled.button`
  background-color: var(--login-button);
  color: white;
  padding: 8px 16px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #5b9d58;
  }
`;

interface Props {
  onClose: () => void;
}

const TaskModal: React.FC<Props> = ({ onClose }) => {
  const {
    addTask,
    updateTask,
    selectedTask,
    setSelectedTask,
  } = useTaskStore();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description || "");
    }
  }, [selectedTask]);

  const handleSave = async () => {
    if (!title.trim()) return;

    if (selectedTask) {
      await updateTask(selectedTask.id, { title, description });
      setSelectedTask(null);
    } else {
      await addTask({ title, description, completed: false });
    }

    setTitle("");
    setDescription("");
    onClose();
  };

  const handleCancel = () => {
    setSelectedTask(null);
    onClose();
  };

  return (
    <ModalOverlay>
      <Modal>
        <Title style={{fontSize:"24px", margin:"0px"}}>{selectedTask ? "Izmeni zadatak" : "Novi zadatak"}</Title>
        <Input
          placeholder="Naslov"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          placeholder="Opis"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <ButtonGroup>
          <CancelButton onClick={handleCancel}>Otkaži</CancelButton>
          <SaveButton onClick={handleSave}>
            {selectedTask ? "Izmeni" : "Sačuvaj"}
          </SaveButton>
        </ButtonGroup>
      </Modal>
    </ModalOverlay>
  );
};

export default TaskModal;