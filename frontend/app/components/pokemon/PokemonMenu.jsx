"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import PokemonSearchBar from "./PokemonSearchBar";
import { menus } from "@/app/_constants/menus";

const SideBarIcon = ({ text, route }) => {
  return (
    <Link href={route} scroll={false} passHref>
      <button className="w-full text-left bg-purple-500 text-gray-100 py-0.5 px-2 rounded hover:bg-purple-100">
        {text}
      </button>
    </Link>
  );
};

export default function PokemonMenu({ searchList }) {
  const router = useRouter();
  const onSubmit = (event) => {
    router.push(`/pokemon/${event.route}`);
  };

  return (
    <div>
      <div className={"flex flex-col tablet:hidden"}>
      </div>
      <div className="hidden tablet:flex flex-col ">
        <PokemonSearchBar
          setSelected={onSubmit}
          list={searchList}
          placeholder={"Search"}
        />
        <div className="font-mono space-y-2 m-2">
          <SideBarIcon route={"/pokemon"} text={"Pokemon Home"} />
          {menus.map((menuItem) => (
            <div
              key={menuItem.title}
              className="space-y-2 pb-2 border-b border-purple-100"
            >
              <div className="bg-gray-800 text-gray-100 py-1 px-2">
                {menuItem.title}
              </div>
              <div className={"flex flex-col space-y-1"}>
                {menuItem.list.map((page, index) => (
                  <SideBarIcon
                    key={index}
                    route={page.route}
                    text={page.title}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
