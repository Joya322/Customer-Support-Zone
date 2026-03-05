import  { use } from "react";
import Ticket from "./Ticket";

const Tickets = ({ ticketsPromise }) => {
  const tickets = use(ticketsPromise);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default Tickets;
