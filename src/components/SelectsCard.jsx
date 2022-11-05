import React from "react";

const SelectsCard = (props) => {
  return (
    <div className="relative">
      <img className="w-full h-full object-cover" src={props.bg} alt="/" />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full  hover:bg-orange-300/30 hover:border-blue-400 cursor-pointer ">
        <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default SelectsCard;
