import React from "react";

const Ticket = ({ ticket }) => {
  const {
    title,
    description,
    customer,
    priority,
    status,
    createdAt,
    ticketId,
    } = ticket;

    const handleTask = () => {
        
    }
    

  return (
    <div onClick={handleTask} className="relative p-5 shadow-md  bg-white rounded-lg flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h4 className="font-bold">{title}</h4>
        <span
          className={`inline-flex items-center rounded-2xl  px-2 py-1 text-xs font-bold ${status === "In-Progress" ? "text-yellow-500 bg-yellow-200" : "text-green-500 bg-green-200"}`}
        >
          <span
            className={`p-1 rounded-full mr-1 ${status === "In-Progress" ? "bg-yellow-500"  : "bg-green-500"}`}
          ></span>
          {status}
        </span>
      </div>
      <p>{description}</p>
      <div className="flex justify-between items-center mt-auto">
        <div>
          <span className="mr-2">#{ticketId}</span>{" "}
          <span
            className={`text-sm font-medium ${priority === "HIGH PRIORITY" ? "text-red-500" : priority === "MEDIUM PRIORITY" ? "text-warning" : "text-green-500"}`}
          >
            {priority}
          </span>
        </div>
        <div>
          <span className="mr-2">{customer}</span>
          <span>
            <i className="fa-regular fa-calendar mr-1"></i>
            <span>{createdAt.slice(0, 10)}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
