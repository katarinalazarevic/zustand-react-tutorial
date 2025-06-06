// TaskCard.tsx
import React from "react";
import {useTaskStore ,  Task } from "src/store/task-store/useTaskStore";
import styled from "styled-components";

const Card = styled.div<{ $completed: boolean }>`
  display: flex;
  justify-content: space-between;
  background: ${({ $completed }) => ($completed ? "#e3f2fd" : "#ffffff")};
  padding: 1rem;
  margin-bottom: 0.75rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
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
          <IconButton onClick={() => toggleComplete(task.id)}>✔️</IconButton>
        )}
        <IconButton onClick={() => deleteTask(task.id)}>🗙</IconButton>
      </ButtonGroup>
    </Card>
  );
};

export default TaskCard;