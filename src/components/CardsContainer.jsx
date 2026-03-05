import { Suspense, useContext } from "react";
import Tickets from "./Tickets";
import TaskStatusCard from "./TaskStatusCard";
import TaskContext from "../context/TaskContext";
import ResolvedTask from "./ResolvedTask";

const CardsContainer = () => {
  const { inProgressTasks, resolvedTasks } = useContext(TaskContext);

  return (
    <div className="flex flex-col-reverse lg:flex-row px-5 py-8 justify-center items-start gap-2 opacity-85 w-full">
      {/* left */}
      <div className="w-full lg:w-9/12">
        <h3 className="text-xl font-bold mb-4">Customer Tickets</h3>

        {/* tickets */}
        <Suspense
          fallback={<h2 className="text-center">Tickets Loading...</h2>}
        >
          <Tickets />
        </Suspense>
      </div>
      {/* right */}
      <div className="w-full lg:w-3/12 pl-1">
        {/* task status */}
        <h3 className="text-xl font-bold mb-3">Task Status</h3>

        <div className="flex flex-col justify-center items-start gap-4">
          {inProgressTasks.length === 0 ? (
            <p>Select a ticket to add to task Status</p>
          ) : (
            inProgressTasks.map((inProgressTask) => (
              <TaskStatusCard
                key={inProgressTask.id}
                inProgressTask={inProgressTask}
              />
            ))
          )}
        </div>

        {/* Resolved Task */}
        <h3 className="text-xl font-bold  mb-2 mt-6">Resolved Task</h3>

        <div className="flex flex-col justify-center items-start gap-3">
          {resolvedTasks.length === 0 ? (
            <p>No resolved tasks yet.</p>
          ) : (
            resolvedTasks.map((resolvedTask) => (
              <ResolvedTask key={resolvedTask.id} resolvedTask={resolvedTask} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
