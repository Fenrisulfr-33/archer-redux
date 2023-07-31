import Link from "next/link";
import Tabs from "./tabs/Tabs";
import { dataMenu, genOneMenu, genTwoMenu, mechanicsMenu, scarletVioletMenu, swordShieldtMenu } from "./menus";

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
    { title: 'Scarlet & Violet', list: scarletVioletMenu },
    { title: 'Sword & Shield', list: swordShieldtMenu },
    { title: 'Gen Two', list: genTwoMenu },
    { title: 'Gen One', list: genOneMenu },
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
