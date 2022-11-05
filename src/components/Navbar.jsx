import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";

import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div>
        <h1
          onClick={handleNav}
          className={logo ? "hidden" : "block cursor-pointer"}
        >
          CocktailCulture
        </h1>
      </div>
      <ul className="hidden md:flex cursor-pointer font-semibold text-lg  mr-20 ">
        <li className="hover:underline">Рейтинги</li>
        <li className="hover:underline">Номинации</li>
        <li className="hover:underline">Статьи</li>
        <li className="hover:underline">Туры</li>
        <li className="hover:underline">Обучение</li>
      </ul>
      <div className="hidden md:flex mr-10">
        <BsPerson size={30} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full max-w-[800px] bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>CocktailCulture</h1>
          <li className="border-b">Рейтинги</li>
          <li className="border-b">Номинации</li>
          <li className="border-b">Статьи</li>
          <li className="border-b">Туры</li>
          <li className="border-b">Обучение</li>
          <div className="flex flex-col">
            <button className="my-6">Поиск</button>
            <button>Аккаунт</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
