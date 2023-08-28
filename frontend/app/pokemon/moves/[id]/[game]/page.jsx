import { useRouter } from "next/navigation";
import MovePage from "@/components/pokemon/MovePage";

export default function MoveInd({ move, game }) {
  const router = useRouter();
  return <MovePage key={router.asPath} move={move} game={game} />;
}

export const getServerSideProps = async (context) => {
  const { id, game } = context.query;
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/pokemon/moves/${id}/${game}`
  );
  const move = await response.json();
  return { props: { move, game } };
};
