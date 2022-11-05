import React from "react";

import Cocktail1 from "../assets/cocktail1.jpg";
import Cocktail2 from "../assets/cocktail2.png";
import Cocktail3 from "../assets/cocktail3.png";
import Cocktail4 from "../assets/cocktail4.jpg";
import Cocktail5 from "../assets/bestcocktails.jpg";

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-6 px-4 text-center">
      <h1 className="text-orange-700 ">Новые изысканные вкусы</h1>
      <p className="py-4">Лучшие коктейли 2022 по версии редакции</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 scale-100 hover:scale-95 duration-500"
          src={Cocktail5}
          alt="/"
        />
        <img
          className="w-full h-full object-cover scale-100 hover:scale-90 duration-500"
          src={Cocktail1}
          alt="/"
        />
        <img
          className="w-full h-full object-cover scale-100 hover:scale-90 duration-500"
          src={Cocktail3}
          alt="/"
        />
        <img
          className="w-full h-full object-cover scale-100 hover:scale-90 duration-500"
          src={Cocktail4}
          alt="/"
        />
        <img
          className="w-full h-full object-cover scale-100 hover:scale-90 duration-500"
          src={Cocktail2}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Destinations;
