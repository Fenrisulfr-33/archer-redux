import Link from "next/link";
import Tabs from "../tabs/Tabs";
import { dataMenu, mechanicsMenu, genNineMenu, genEightMenu, genTwoMenu, genOneMenu } from "./menus";

const NavBarIcon = ({ text, route }) => {
  return (
    <Link href={route} passHref>
      <button className={`button`}>{text}</button>
    </Link>
  );
};

export default function PokemonSideMenu() {
  const menu = [
    { title: 'Data', list: dataMenu },
    { title: 'Mechanics', list: mechanicsMenu },
    { title: 'Gen. 9', list: genNineMenu },
    { title: 'Gen. 8', list: genEightMenu },
    { title: 'Gen. 2', list: genTwoMenu },
    { title: 'Gen. 1', list: genOneMenu },
  ]
  return (
    <>
      <div className={"laptop:hidden"}>
        <Tabs />
      </div>
      <div className="hidden laptop:flex flex-col space-y-2 p-2 text-left text-sm border bg-gray-700 m-2 rounded-xl border-purp-400">
        <NavBarIcon route={"/pokemon"} text={"Home"} />
        {menu.map((menuItem) => (
          <>
            <div className={`label`}>{menuItem.title}</div>
            <div className={"pl-4  flex flex-col space-y-1"}>
              {menuItem.list.map((page, index) => (
                <NavBarIcon key={index} route={page.route} text={page.title} />
              ))}
            </div>
          </>
        ))}
      </div>
    </>
  );
}
