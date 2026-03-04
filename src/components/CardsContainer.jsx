import { Suspense } from "react";
import Tickets from "./Tickets";

const fetchTickets = async() => {
    const res = await fetch('./tickets.json');

    return res.json();
}

const CardsContainer = () => {
    const ticketsPromise = fetchTickets();

  return (
    <div className="flex flex-col-reverse lg:flex-row px-5 py-8 justify-center items-start gap-5 opacity-85">
      {/* left */}
      <div className="lg:w-2/3">
        <h3 className="text-xl font-bold mb-4">Customer Tickets</h3>

        {/* tickets */}
        <Suspense fallback={<h2 className="text-center">Tickets Loading...</h2>}>
          <Tickets ticketsPromise={ticketsPromise} />
        </Suspense>
      </div>
      {/* right */}
      <div className="lg:w-1/3 border ">
        {/* task status */}
        <h3 className="text-xl font-bold mb-1">Task Status</h3>
        <p>Select a ticket to add to task Status</p>

        {/* Resolved Task */}
        <h3 className="text-xl font-bold  mb-1 mt-5">Resolved Task</h3>
        <p>No resolved tasks yet.</p>
      </div>
    </div>
  );
};

export default CardsContainer;
