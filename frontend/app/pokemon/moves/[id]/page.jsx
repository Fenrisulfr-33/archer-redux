import MovePage from "@/components/pokemon/MovePage";

const getMove = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pokemon/moves/${id}`);
  const move = await response.json();
  return move;
}

export default async function Page({ params }) {
  const move = await getMove(params.id);

  return (
      <MovePage move={move} />
  );
}
