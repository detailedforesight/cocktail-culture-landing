import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1>CocktailCulture</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />

            <FaInstagram className="icon" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li>Контакты</li>
            <li>Наши партнеры</li>
            <li>Карьера</li>
            <li>Новости</li>
            <li>Реклама</li>
          </ul>
          <ul className="text-right lg:flex">
            <li>Рейтинги</li>
            <li>Номинации</li>
            <li>Статьи</li>
            <li>Туры</li>
            <li>Обучение</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
