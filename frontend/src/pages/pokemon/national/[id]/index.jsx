import { useRouter } from "next/router";
import PokemonPage from "@/components/pokemon/PokemonPage";
import PokemonLayout from "../../../../layout/PokemonLayout";

export default function NationalInd({ pokemon, query }) {
  const router = useRouter();

  return (
    <PokemonLayout>
      <PokemonPage
        key={router.asPath}
        pokemon={pokemon}
        query={query}
        goBackRoute={"/pokemon/national"}
      />
    </PokemonLayout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;
  const id = context.query.id;
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pokemon/national/${id}`);
  const pokemon = await response.json();
  return { props: { pokemon, query } };
};
