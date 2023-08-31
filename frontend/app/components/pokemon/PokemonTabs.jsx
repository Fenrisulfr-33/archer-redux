'use client';

import { useState } from "react";
import Link from "next/link";
import {
  dataMenu,
  mechanicsMenu,
  allGamesMenu,
} from "../variables/PokemonMenus";
import { IoLogoGameControllerA } from "react-icons/io";
import { AiTwotoneHome, AiFillDatabase } from "react-icons/ai";
import { FaScrewdriver } from "react-icons/fa";

export default function PokemonTabs() {
  const [menuOpen, setMenuOpen] = useState(() => false);
  const [selectedMenu, setSelectedMenu] = useState(() => []);

  const handleMenuButton = (menu) => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setSelectedMenu(menu);
      setMenuOpen(true);
    }
  };

  const tabBarTitle = "text-sm";
  const tabBarButton =
    "flex flex-col rounded border border-gray-900 p-1 items-center text-purple-100 bg-gray-800";

  return (
    <div className="relative m-2 font-mono">
      <div
        className={
          "grid grid-flow-col justify-stretch space-x-1 bg-gray-600 rounded border-2 p-1 border-purple-100"
        }
      > 
      <Link href="/pokemon" passHref>
        <button
          className={tabBarButton}
        >
          <AiTwotoneHome size="25" />
          <div className={tabBarTitle}>Pokemon</div>
        </button>
        </Link>
        <button
          className={tabBarButton}
          onClick={() => handleMenuButton(dataMenu)}
        >
          <AiFillDatabase size="25" />
          <div className={tabBarTitle}>Data</div>
        </button>
        <button
          className={tabBarButton}
          onClick={() => handleMenuButton(mechanicsMenu)}
        >
          <FaScrewdriver size="25" />
          <div className={tabBarTitle}>Mechanics</div>
        </button>
        <button
          className={tabBarButton}
          onClick={() => handleMenuButton(allGamesMenu)}
        >
          <IoLogoGameControllerA size="25" />
          <div className={tabBarTitle}>Games</div>
        </button>
      </div>
      <div
        className={`${
          menuOpen ? "" : "hidden"
        } absolute w-full bg-gray-600 flex flex-col mt-1 rounded border border-purple-50`}
      >
        {selectedMenu.map((menuItem) => (
          <Link href={menuItem.route} passHref>
          <button
            className="m-1 p-2 rounded hover:bg-purple-200 hover:border-2 hover:border-gray-900 hover:text-gray-900 hover:font-bold hover:shadow-sm hover:shadow-purple-50 bg-gray-800 border border-gray-900 text-purple-100"
          >
            {menuItem.title}
          </button></Link>
        ))}
      </div>
    </div>
  );
}
