import { NavBarIcon } from "../Menu/NavBarIcon";
import MenuDropDown from "../Menu/MenuDropDown";
import { SiHomeadvisor } from "react-icons/si";
import { MdArticle, MdCatchingPokemon } from "react-icons/md";

export default function NavBar(){
  return (
    <>
      <div className="p-2 phone:p-5 tablet:hidden ">
        <MenuDropDown />
      </div>
      <div className="hidden tablet:flex items-center justify-end space-x-4 pr-5">
        <NavBarIcon
          icon={<SiHomeadvisor size="28" />}
          text={"Home"}
          route={"/"}
        />
        <NavBarIcon
          icon={<MdArticle size="28" />}
          text={"Articles"}
          route={"/articles"}
        />
        <NavBarIcon
          icon={<MdCatchingPokemon size="28" />}
          text={"Pokemon"}
          route={"/pokemon"}
        />
      </div>
    </>
  );
};