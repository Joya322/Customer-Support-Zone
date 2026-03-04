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
  return (
    <div className="relative p-5 shadow-md  bg-white rounded-lg flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h4 className="font-bold">{title}</h4>
        <span className="inline-flex items-center rounded-2xl bg-green-300 px-2 py-1 text-xs font-bold text-green-900">
          <span className="bg-green-900 p-1 rounded-full mr-1"></span>
          {status}
        </span>
      </div>
      <p>{description}</p>
      <div className="flex justify-between items-center mt-auto">
        <div>
          <span className="mr-2">#{ticketId}</span>{" "}
          <span
            className={`font-bold ${priority === "High" ? "text-red-500" : priority === "Medium" ? "text-warning" : "text-green-500"}`}
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
