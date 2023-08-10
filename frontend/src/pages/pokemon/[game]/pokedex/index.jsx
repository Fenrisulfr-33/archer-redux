import PokemonLayout from "../../PokemonLayout";
import List from "../../../../components/pokemon/pokedex/List";
import { createSearchQuery } from "../../../../helperFunctions/helperFunctions";

export default function PokedexPage({ pokedex, game }){

  return (
    <PokemonLayout>
        <List
          list={pokedex}
          pushRoute={game}
          dexNumber={game}
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


