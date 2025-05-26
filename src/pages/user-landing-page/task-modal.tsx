// TaskModal.tsx
import React, { useState, useEffect } from "react";
import useTaskStore from "src/store/task-store/useTaskStore";
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
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 1rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const CancelButton = styled.button`
  background-color: #ccc;
  padding: 8px 16px;
`;

const SaveButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
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
        <h3>{selectedTask ? "Izmeni zadatak" : "Novi zadatak"}</h3>
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