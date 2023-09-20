// import PokemonPage from "@/components/pokemon/PokemonPage";
import PokemonPage from "../components/PokemonPage";

const getPokemonByGame = async (id, game) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pokemon/national/${id}/${game}`);
  const nationalDex = await response.json();
  return nationalDex;
}

export default async function NationalIndByGame({ params }) {
  const pokemon = await getPokemonByGame(params.id, params.game)
  return (
      <PokemonPage
        pokemon={pokemon}
        goBackRoute={`/pokemon/${params.game}/pokedex`}
        game={params.game}
      />
  );
}