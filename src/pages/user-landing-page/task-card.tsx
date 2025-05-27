// TaskCard.tsx
import React from "react";
import useTaskStore, { Task } from "src/store/task-store/useTaskStore";
import styled from "styled-components";

const Card = styled.div<{ $completed: boolean }>`
  display: flex;
  justify-content: space-between;
  background: ${({ $completed }) => ($completed ? "#d0f0c0" : "#f8f8f8")};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  opacity: ${({ $completed }) => ($completed ? 0.9 : 1)};
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const IconButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
`;

interface Props {
  task: Task;
}

const TaskCard: React.FC<Props> = ({ task }) => {
  const { toggleComplete, deleteTask, setSelectedTask, setShowCreateModal } =
    useTaskStore();

  const handleCardClick = () => {
    setSelectedTask(task);
    setShowCreateModal(true);
  };

  return (
    <Card onClick={handleCardClick} $completed={task.completed}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <strong>{task.title}</strong>
        <span style={{ paddingTop: "5px" }}>{task.description}</span>
      </div>
      <ButtonGroup onClick={(e) => e.stopPropagation()}>
        {!task.completed && (
          <IconButton onClick={() => toggleComplete(task.id)}>✅</IconButton>
        )}
        <IconButton onClick={() => deleteTask(task.id)}>🗑️</IconButton>
      </ButtonGroup>
    </Card>
  );
};

export default TaskCard;