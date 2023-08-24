import AllAbilitiesList from "@/components/pokemon/AbilitiesList";
import PokemonLayout from '@/components/layouts/PokemonLayout';

export default function AbilitiesPage({ abilities, query }) {

  return (
    <PokemonLayout>
      <AllAbilitiesList list={abilities} />
    </PokemonLayout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/pokemon/abilities`
  );
  const abilities = await response.json();
  return { props: { abilities, query } };
};
