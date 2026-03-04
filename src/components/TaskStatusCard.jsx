import React, { useContext } from "react";
import TaskContext from "../context/TaskContext";

const TaskStatusCard = ({ inProgressTask }) => {
  const { setResolvedTasks, inProgressTasks, setInProgressTasks } =
    useContext(TaskContext);
  const { title } = inProgressTask;

  const handleResolvedTasks = () => {
    setInProgressTasks(inProgressTasks.filter((t) => t.id !== inProgressTask.id))
    
    setResolvedTasks((prev) => [...prev, inProgressTask]);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-5 w-full">
      <h1 className="font-bold text-lg">{title}</h1>
      <button
        onClick={handleResolvedTasks}
        className="mt-2 btn bg-green-500 text-white w-full"
      >
        Complete
      </button>
    </div>
  );
};

export default TaskStatusCard;
