import PokemonLayout from "@/components/pokemon/PokemonLayout";
import MovesList from "@/components/pokemon/MovesList";

export default function Moves({ moves }) {
  return (
    <PokemonLayout>
      <MovesList list={moves} />
    </PokemonLayout>
  );
}

export const getServerSideProps = async (context) => {
  const query = context.query;
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/pokemon/moves`
  );
  const moves = await response.json();
  return { props: { moves, query } };
};
