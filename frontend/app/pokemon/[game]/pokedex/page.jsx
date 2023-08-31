import PokedexList from "@/components/pokemon/PokedexList";
import { createSearchQuery } from "@/helperFunctions/createSearchQuery";

const getPokedex = async (game) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pokemon/${game}/pokedex`);
  const pokedex = await response.json();
  return pokedex;
}

export default async function Page({ params }){
  const pokedex = await getPokedex(params.game);

  return (
        <PokedexList
          list={pokedex}
          pushRoute={params.game}
          national={false}
          game={params.game}
          searchRoute={`/pokemon/${params.game}/pokedex`}
        />
  );
};