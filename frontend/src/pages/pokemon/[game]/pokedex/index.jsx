import PokedexList from "@/components/pokemon/PokedexList";
import { createSearchQuery } from "@/helperFunctions/createSearchQuery";
import PokemonLayout from "../../../../layout/PokemonLayout";

export default function PokedexPage({ pokedex, game }){
  return (
    <PokemonLayout>
        <PokedexList
          list={pokedex}
          pushRoute={game}
          national={false}
          game={game}
          searchRoute={`/pokemon/${game}/pokedex`}
        />
    </PokemonLayout>
  );
};

export const getServerSideProps = async (context) => {
  const query = context.query;
  const { game } = query;
  if (Object.keys(query).length > 0) {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/pokemon/${game}/pokedex/${createSearchQuery(
        query
      )}`
    );
    const pokedex = await response.json();
    return { props: { pokedex, game } };
  } else {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/pokemon/${game}/pokedex`
    );
    const pokedex = await response.json();
    return { props: { pokedex, game } };
  }
};


