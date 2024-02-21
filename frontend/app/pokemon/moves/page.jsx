// import MovesList from "@/components/pokemon/MovesList";
import MovesList from "./components/MovesList";

export default async function Moves() {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pokemon/moves`);
  const moves = await response.json();

  return <MovesList list={moves} />;
}
