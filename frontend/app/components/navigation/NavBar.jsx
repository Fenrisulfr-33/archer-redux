import { NavBarIcon } from "./NavBarIcon";
import { SiHomeadvisor } from "react-icons/si";
import { MdArticle, MdCatchingPokemon } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";

import PokemonDropdownMenu from "./PokemonDropdownMenu";

export default function NavBar() {
    return (
        <div>
            <div className="tablet:hidden">
                <PokemonDropdownMenu />
            </div>
            <div className="hidden tablet:flex items-center justify-end space-x-4 p-5">
                <NavBarIcon
                    icon={<SiHomeadvisor size="28" />}
                    text={"Home"}
                    route={"/"}
                />
                <NavBarIcon
                    icon={<MdCatchingPokemon size="28" />}
                    text={"Pokemon"}
                    route={"/pokemon"}
                />
                <NavBarIcon
                    icon={<MdArticle size="28" />}
                    text={"Articles"}
                    route={"/articles"}
                />
                <NavBarIcon
                    icon={<BsInfoCircleFill size="28" />}
                    text={"About"}
                    route={"/about"}
                />
            </div>
        </div>
    );
}
