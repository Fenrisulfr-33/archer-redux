"use client";

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
    "w-1/4 flex flex-col rounded border border-gray-900 p-1 items-center text-purple-100 bg-gray-800";

  return (
    <div className="relative m-2 font-mono">
      <div
        className={
          "flex flex-row justify-stretch space-x-1 bg-gray-600 rounded border-2 p-1 border-purple-100"
        }
      >
        <button className="w-1/4">
          <Link href="/pokemon" passHref>
            <div className="flex flex-col rounded border border-gray-900 p-1 items-center text-purple-100 bg-gray-800">
              <AiTwotoneHome size="25" />
              <div className={tabBarTitle}>Pokemon</div>
            </div>
          </Link>
        </button>
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
        } flex flex-col absolute w-full bg-gray-700 items-center mt-1 p-4 rounded border border-purple-50 space-y-4`}
      >
        <button className="p-2 rounded hover:shadow-dark-selected bg-purple-50 border border-gray-900 text-gray-900 font-extrabold" onClick={() => setMenuOpen(false)} >{'[close]'}</button>
        {selectedMenu.map((menuItem) => (
          <button className="w-full p-2 rounded hover:shadow-selected bg-gray-900 border border-purple-50 text-purple-100" onClick={() => setMenuOpen(false)}>
            <Link href={menuItem.route} passHref className="not-italic">
              {menuItem.title}
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
}
