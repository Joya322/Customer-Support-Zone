import React from "react";
import Banner from "./Banner";
import CardsContainer from "./CardsContainer";

const Main = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto">
              <Banner />
              <CardsContainer/>
      </div>
    </div>
  );
};

export default Main;
