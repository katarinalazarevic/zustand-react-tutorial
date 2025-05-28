import React, { useEffect, useState } from "react";
import useTaskStore from "src/store/task-store/useTaskStore";
import styled from "styled-components";
import CreateTaskModal from "./task-modal";
import TaskList from "./task-list";
import CompletedTaskList from "./completed-task-list";
import TaskModal from "./task-modal";

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

const AddButton = styled.button`
  background-color: #73b874;
  color: white;
  padding: 10px 20px;
  height: 50%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;
  font-size: 16px;
  &:hover {
    background-color: #69b165;
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "30px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            backgroundColor: "#FEF9F2",
            borderRadius: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              padding: "0rem 0.2rem",
            }}
          >
            <SectionTitle>✨Aktivni zadaci</SectionTitle>
            <AddButton onClick={() => setShowCreateModal(true)}>
              + Novi zadatak
            </AddButton>
          </div>
          <div style={{ padding: "0rem 0.2rem" }}>
            <TaskList />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            backgroundColor: "#FEF9F2",
            borderRadius: "1rem",
            padding: "0rem 0.2rem"
          }}
        >
          <SectionTitle>✓ Završeni zadaci</SectionTitle>
          <CompletedTaskList />
        </div>
      </div>
      {showCreateModal && (
        <TaskModal onClose={() => setShowCreateModal(false)} />
      )}
    </Container>
  );
};

export default TaskPage;