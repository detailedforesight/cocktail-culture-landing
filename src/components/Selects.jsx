import React from "react";

import Barcelona from "../assets/barcelona.jpg";
import BuenosAires from "../assets/buenosaires.jpg";
import NewYork from "../assets/newyork.jpg";
import Mexico from "../assets/mexico.jpg";
import Singapore from "../assets/singapore.jpg";
import Milan from "../assets/milan.jpg";
import SelectsCard from "./SelectsCard";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard bg={Barcelona} text="Barcelona" />
      <SelectsCard bg={BuenosAires} text="Buenos Aires" />
      <SelectsCard bg={NewYork} text="New York" />
      <SelectsCard bg={Mexico} text="Mexico" />
      <SelectsCard bg={Singapore} text="Singapore" />
      <SelectsCard bg={Milan} text="Milan" />
    </div>
  );
};

export default Selects;
