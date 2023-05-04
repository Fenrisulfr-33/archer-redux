import Loading from "../../../Loading";
import PokemonLayout from "./PokemonLayout";

export function PokemonPage({ loading, content }) {
  return <PokemonLayout>{loading ? <Loading /> : content}</PokemonLayout>;
};