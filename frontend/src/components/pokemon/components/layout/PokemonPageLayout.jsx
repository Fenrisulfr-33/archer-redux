import Loading from "../../../Loading";
import PokemonLayout from "./PokemonLayout";

export function PokemonPageLayout({ loading, content }) {
  return <PokemonLayout>{loading ? <Loading /> : content}</PokemonLayout>;
};