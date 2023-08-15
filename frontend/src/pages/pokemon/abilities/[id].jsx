import AbilitiesPage from "@/components/pokemon/AbilitiesPage";
import PokemonLayout from "../../../layout/PokemonLayout";

export default function Ability({ ability }) {

  return (
    <PokemonLayout>
      <AbilitiesPage ability={ability} />
    </PokemonLayout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;
  const id = context.query.id;
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/pokemon/abilities/${id}`
  );
  const ability = await response.json();
  return { props: { ability, query } };
};
