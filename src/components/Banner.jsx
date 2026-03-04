// import { useContext } from "react";
// import { TaskContext } from "../context/TaskContext";

import { useContext } from "react";
import TaskContext from "../context/TaskContext";

const Banner = () => {
  const { inProgressTasks, resolvedTasks } = useContext(TaskContext);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 py-10 text-black w-full">
      {/* left card */}
      <div className="relative h-52  bg-linear-to-r from-purple-800 to-purple-400 flex justify-center items-center text-white gap-10 rounded-lg">
        <img src="./vector1.png" alt="" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
          <p className="text-xl">In-Progress</p>
          <h3 className="text-4xl">{inProgressTasks.length}</h3>
        </div>
        <img className="transform scale-x-[-1]" src="./vector1.png" alt="" />
      </div>

      {/* right card */}
      <div className="relative h-52 bg-linear-to-r from-green-400 to-emerald-800 flex justify-center items-center text-white gap-10 rounded-lg">
        <img src="./vector1.png" alt="" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
          <p className="text-xl">Resolved</p>
          <h3 className="text-4xl">{resolvedTasks.length}</h3>
        </div>
        <img className="transform scale-x-[-1]" src="./vector1.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
