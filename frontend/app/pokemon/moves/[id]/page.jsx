import MovePage from "@/components/pokemon/MovePage";

export default async function Page({ params }) {
  const move = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pokemon/moves/${params.id}`);
  const moveResponse = await move.json()

  return (
      <MovePage move={moveResponse} />
  );
}
