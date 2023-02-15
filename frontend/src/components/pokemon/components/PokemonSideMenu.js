import Link from "next/link";
import Tabs from "./tabs/Tabs";
import { dataMenu, mechanicsMenu, scarletVioletMenu, swordShieldtMenu } from "./menus";

const NavBarIcon = ({ text, route }) => {
  return (
    <Link href={route} passHref>
      <button className={`button`}>{text}</button>
    </Link>
  );
};

export default function PokemonSideMenu() {
  return (
    <>
      <div className={"laptop:hidden"}>
        <Tabs />
      </div>
      <div className="hidden laptop:flex flex-col space-y-2 p-2 text-left text-sm border border-red-200">
        <NavBarIcon route={"/pokemon"} text={"Home"} />
        <div className={`label`}>Data</div>
        <div className={"pl-4  flex flex-col space-y-1"}>
          {dataMenu.map((page, index) => (
            <NavBarIcon key={index} route={page.route} text={page.title} />
          ))}
        </div>
        <div className={`label`}>Mechanics</div>
        <div className={"pl-4 flex flex-col space-y-1"}>
          {mechanicsMenu.map((page, index) => (
            <NavBarIcon key={index} route={page.route} text={page.title} />
          ))}
        </div>
        <div className={`label`}>Games</div>
        <div className={`pl-4`}>
          <div className={`label`}>Scarlet & Violet</div>
        </div>
        <div className={"pl-8 flex flex-col space-y-1"}>
          {scarletVioletMenu.map((page, index) => (
            <NavBarIcon key={index} route={page.route} text={page.title} />
          ))}
        </div>
        <div className={`pl-4`}>
          <div className={`label`}>Sword & Shield</div>
        </div>
        <div className={"pl-8  flex flex-col space-y-1"}>
          {swordShieldtMenu.map((page, index) => (
            <NavBarIcon key={index} route={page.route} text={page.title} />
          ))}
        </div>
      </div>
    </>
  );
}
