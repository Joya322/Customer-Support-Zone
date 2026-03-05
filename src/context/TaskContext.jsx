import { createContext, useEffect, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  useEffect(() => {
    const loadTickets = async () => {
      try {
        const res = await fetch("/tickets.json");
        const data = await res.json();
        setTickets(data);
      } catch (error) {
        console.log("Failed to load tickets: ", error);
      }
    };
    loadTickets();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tickets,
        setTickets,
        inProgressTasks,
        setInProgressTasks,
        resolvedTasks,
        setResolvedTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
