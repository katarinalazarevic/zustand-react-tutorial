import React from "react";
import useTaskStore from "src/store/task-store/useTaskStore";
import TaskCard from "./task-card";
import styled from "styled-components";

export const EmptyMessage = styled.div`
  text-align: center;
  margin-top: 2rem;
  color: #777;
  font-style: italic;
`;

const TaskList: React.FC = () => {
  const { tasks } = useTaskStore();
  const activeTasks = tasks.filter((t) => !t.completed);

  return (
    <>
      {activeTasks.length === 0 ? (
        <EmptyMessage>Nema aktivnih zadataka</EmptyMessage>
      ) : (
        activeTasks.map((task) => <TaskCard key={task.id} task={task} />)
      )}
    </>
  );
};

export default TaskList;