import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import { toast } from "react-toastify";

const Ticket = ({ ticket }) => {
  const { inProgressTasks, setInProgressTasks } = useContext(TaskContext);

  const {
    title,
    description,
    customer,
    priority,
    status,
    createdAt,
    ticketId,
  } = ticket;

  const handleInProgressTasks = () => {
    if (inProgressTasks.find((t) => t.id === ticket.id)) {
      toast.warning("This task is already in Progress!");
      return;
    }
    toast.success("Task in Progress!");
    setInProgressTasks([...inProgressTasks, ticket]);
  };

  return (
    <div
      onClick={handleInProgressTasks}
      className="relative p-5 shadow-md  bg-white rounded-lg flex flex-col gap-2"
    >
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-lg">{title}</h4>
        <span
          className={`inline-flex items-center rounded-2xl  px-2 py-1 text-xs font-bold ${status === "In-Progress" ? "text-yellow-500 bg-yellow-200" : "text-green-500 bg-green-200"}`}
        >
          <span
            className={`p-1 rounded-full mr-1 ${status === "In-Progress" ? "bg-yellow-500" : "bg-green-500"}`}
          ></span>
          {status}
        </span>
      </div>

      <p>{description}</p>

      <div className="flex justify-between gap-3 items-center mt-auto">
        <div className="flex flex-col lg:flex-row gap-1 items-center">
          <span className="text-xs">#{ticketId}</span>
          <span
            className={`text-xs ${priority === "HIGH PRIORITY" ? "text-red-500" : priority === "MEDIUM PRIORITY" ? "text-warning" : "text-green-500"}`}
          >
            {priority}
          </span>
        </div>
        <div className="flex flex-col lg:flex-row gap-1 items-center">
          <span className="text-sm">{customer}</span>
          <span>
            <i className="fa-regular fa-calendar mr-1 text-xs"></i>
            <span className="text-xs">{createdAt.slice(0, 10)}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
