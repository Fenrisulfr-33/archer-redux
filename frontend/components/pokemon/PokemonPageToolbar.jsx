import Link from "next/link";
import { SiPokemon } from "react-icons/si";

export default function PokemonPageToolbar({ id, goBackRoute }) {
  return (
    <div
      id="toolbar"
      className="col-span-1 tablet:col-span-2 flex flex-row items-center justify-between"
    >
      {id - 1 > 0 ? (
        <Link href={`/pokemon/national/${Math.floor(id - 1)}`} passHref>
          <button className={"bg-gray-800 p-2 rounded"}>{`< ${id - 1}`}</button>
        </Link>
      ) : (
        <SiPokemon size="50" />
      )}
      <Link href={goBackRoute} passHref>
        <div className="flex justify-center">
          <button className={"button flex"}>Go Back</button>
        </div>
      </Link>
      {id + 1 <= 1010 ? (
        <Link href={`/pokemon/national/${Math.floor(id + 1)}`} passHref>
          <button className={"bg-gray-800 p-2 rounded"}>{`${id + 1} >`}</button>
        </Link>
      ) : (
        <SiPokemon size="50" />
      )}
    </div>
  );
}
