import Link from "next/link";
import Tabs from "../tabs/Tabs";
import { dataMenu, mechanicsMenu, genNineMenu, genEightMenu, genTwoMenu, genOneMenu } from "./menus";

const menus = [
  { title: 'Data', list: dataMenu },
  { title: 'Mechanics', list: mechanicsMenu },
  { title: 'Gen. 9', list: genNineMenu },
  { title: 'Gen. 8', list: genEightMenu },
  { title: 'Gen. 2', list: genTwoMenu },
  { title: 'Gen. 1', list: genOneMenu },
]

const SideBarIcon = ({ text, route }) => {
  return (
    <Link href={route} passHref>
      <button className="bg-purple-500 text-gray-100 py-0.5 px-3 rounded transition ease-in-out hover:translate-x-4 hover:bg-purple-100 hover:font-bold duration-300">{text}</button>
    </Link>
  );
};

export default function PokemonSideMenu() {

  return (
    <>
      <div className={"laptop:hidden"}>
        <Tabs />
      </div>
      <div className="hidden laptop:flex flex-col font-mono space-y-2 p-2 text-left text-lg border bg-gray-700 m-2 rounded-xl border-purple-400">
        <SideBarIcon route={"/pokemon"} text={"Pokemon Home"} />
        {menus.map((menuItem) => (
          <div className=" space-y-2 pb-2 border-b border-purple-100">
            <div className="bg-gray-900 text-gray-100 font-bold py-1 px-2 rounded w-fit">{menuItem.title}</div>
            <div className={"pl-4  flex flex-col space-y-1"}>
              {menuItem.list.map((page, index) => (
                <SideBarIcon key={index} route={page.route} text={page.title} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
