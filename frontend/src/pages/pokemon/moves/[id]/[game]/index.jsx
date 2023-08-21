import { useRouter } from "next/router";
import MovePage from "@/components/pokemon/MovePage";
import PokemonLayout from "../../../../../layout/PokemonLayout";

export default function MoveInd({ move, game }) {
    const router = useRouter();
  return (
    <PokemonLayout>
      <MovePage key={router.asPath}
      game={game}
      move={move} />
    </PokemonLayout>
  );
}

export const getServerSideProps = async (context) => {
  const { id, game } = context.query;
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/pokemon/moves/${id}/${game}`
  );
  const move = await response.json();
  return { props: { move, game } };
};
