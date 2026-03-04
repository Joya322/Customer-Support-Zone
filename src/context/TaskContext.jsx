import { createContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  return (
    <TaskContext.Provider
      value={{ inProgressTasks, setInProgressTasks, resolvedTasks, setResolvedTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
