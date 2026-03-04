import React from "react";

const ResolvedTask = ({ resolvedTask }) => {
  const { title } = resolvedTask;

  return (
    <div className="bg-blue-100 shadow-md rounded-lg p-5 w-full">
      <h1 className="font-bold">{title}</h1>
    </div>
  );
};

export default ResolvedTask;
