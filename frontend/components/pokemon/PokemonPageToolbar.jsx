import { NavBarIcon } from "../navigation/NavBarIcon";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
import { SiPokemon } from "react-icons/si";

export default function PokemonPageToolbar({ id }) {
  return (
    <div
      id="toolbar"
      className="col-span-1 tablet:col-span-2 flex flex-row items-center justify-between"
    >
      {id - 1 > 0 ? (
        <NavBarIcon
          icon={<BsFillArrowLeftSquareFill size="20" />}
          text={id - 1}
          route={`/pokemon/national/${Math.floor(id - 1)}`}
        />
      ) : (
        <SiPokemon size="50" />
      )}
      {id + 1 <= 898 ? (
        <NavBarIcon
          icon={<BsFillArrowRightSquareFill size="20" />}
          text={id + 1}
          route={`/pokemon/national/${Math.floor(id + 1)}`}
        />
      ) : (
        <SiPokemon size="50" />
      )}
    </div>
  );
}
