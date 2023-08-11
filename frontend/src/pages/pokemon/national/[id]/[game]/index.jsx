import PokemonPage from "../../../../../components/pokemon/pokemonPage/PokemonPage";
import PokemonLayout from "../../../PokemonLayout";

export default function NationalIndByGame({ pokemon, game }){
    return (
            <PokemonLayout>
              <PokemonPage
                pokemon={pokemon}
                goBackRoute={`/pokemon/${game}/pokedex`}
                game={game}
              />
          </PokemonLayout>
    )
}

export const getServerSideProps = async (context) => {
  const query = context.query;
  const { id, game } = query;
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pokemon/national/${id}/${game}`);
  const pokemon = await response.json();
  return { props: { pokemon, game } };
};
