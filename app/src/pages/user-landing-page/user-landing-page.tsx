import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CreateTaskModal from "./task-modal";
import TaskList from "./task-list";
import CompletedTaskList from "./completed-task-list";
import TaskModal from "./task-modal";
import { useTaskStore } from "src/store/task-store/useTaskStore";

const Container = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: auto;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #1a1a1a;
`;

const SectionTitle = styled.h2`
  margin-top: 2rem;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
`;

const TaskColumn = styled.div`
  flex: 1;
  background-color: #FEF9F2; // ffffff
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const AddButton = styled.button`
  background: linear-gradient(135deg, #73b874, #5faa5d);
  color: white;
  padding: 10px 20px;
  height: 50%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;
  font-size: 16px;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 4px 10px rgba(115, 184, 116, 0.4);
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
      <SectionContainer>
        <TaskColumn>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <SectionTitle>Aktivni zadaci</SectionTitle>
            <AddButton onClick={() => setShowCreateModal(true)}>
              + Novi zadatak
            </AddButton>
          </div>
          <TaskList />
        </TaskColumn>
        <TaskColumn style={{backgroundColor:"#e3f2fd"}}>
          <SectionTitle>✓ Završeni zadaci</SectionTitle>
          <CompletedTaskList />
        </TaskColumn>
      </SectionContainer>

      {showCreateModal && (
        <TaskModal onClose={() => setShowCreateModal(false)} />
      )}
    </Container>
  );
};

export default TaskPage;