import React from 'react'
import styled from 'styled-components'
import TaskCard from './task-card'
import { EmptyMessage } from './task-list'
import { useTaskStore } from 'src/store/task-store/useTaskStore';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  padding: 10px;
  background-color: #d9ffd9;
  margin-bottom: 8px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: line-through;
`

const CompletedTaskList: React.FC = () => {
  const { tasks, toggleComplete } = useTaskStore()
  const completedTasks = tasks.filter((task) => task.completed)

  return (
    <List>
      {completedTasks.length === 0 ? (
        <EmptyMessage>Nema kompletiranih zadataka</EmptyMessage>
      ) : (
        completedTasks.map((task) => <TaskCard key={task.id} task={task} />)
      )}
    </List>
  );
}

export default CompletedTaskList