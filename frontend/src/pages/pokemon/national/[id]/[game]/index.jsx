import { useRouter } from "next/router";
import PokemonPage from "@/components/pokemon/PokemonPage";
import PokemonLayout from "../../../../../layout/PokemonLayout";

export default function NationalIndByGame({ pokemon, game }) {
  const router = useRouter();
  return (
    <PokemonLayout>
      <PokemonPage
        key={router.asPath}
        pokemon={pokemon}
        goBackRoute={`/pokemon/${game}/pokedex`}
        game={game}
      />
    </PokemonLayout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;
  const { id, game } = query;
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/pokemon/national/${id}/${game}`
  );
  const pokemon = await response.json();
  return { props: { pokemon, game } };
};
