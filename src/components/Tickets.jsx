import { useContext } from "react";
import Ticket from "./Ticket";
import TaskContext from "../context/TaskContext";

const Tickets = () => {
  const { tickets } = useContext(TaskContext);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default Tickets;
