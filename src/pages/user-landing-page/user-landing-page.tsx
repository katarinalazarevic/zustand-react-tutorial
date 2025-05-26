import React, { useEffect, useState } from "react";
import useTaskStore from "src/store/task-store/useTaskStore";
import styled from "styled-components";
import CreateTaskModal from "./task-modal";
import TaskList from "./task-list";
import CompletedTaskList from "./completed-task-list";
import TaskModal from "./task-modal";

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  margin-top: 2rem;
`;

const AddButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    background-color: #45a049;
  }
`;

const TaskPage: React.FC = () => {
  const { tasks, fetchTasks, showCreateModal, setShowCreateModal } =
    useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <Container>
      <Header>📋 Lista zadataka</Header>
      <AddButton onClick={() => setShowCreateModal(true)}>
        + Novi zadatak
      </AddButton>

      <SectionTitle>🔧 Aktivni zadaci</SectionTitle>
      <TaskList />

      <SectionTitle style={{ paddingTop: "3rem" }}>
        ✅ Završeni zadaci
      </SectionTitle>
      <CompletedTaskList />

      {showCreateModal && (
        <TaskModal onClose={() => setShowCreateModal(false)} />
      )}
    </Container>
  );
};

export default TaskPage;