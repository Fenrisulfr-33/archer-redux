import MovePage from "@/components/pokemon/MovePage";
import PokemonLayout from "../../../layout/PokemonLayout";

export default function MoveInd({ move }) {
  return (
    <PokemonLayout>
      <MovePage move={move} />
    </PokemonLayout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;
  const id = context.query.id;
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/pokemon/moves/${id}`
  );
  const move = await response.json();
  return { props: { move, query } };
};
