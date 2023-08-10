import AbilityPage from "../../../components/pokemon/abilities/AbilityPage";
import PokemonLayout from "../PokemonLayout";

export default function Ability({ ability }) {

  return (
    <PokemonLayout>
      <AbilityPage ability={ability} />
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
