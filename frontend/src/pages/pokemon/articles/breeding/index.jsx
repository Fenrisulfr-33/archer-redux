import Breeding from "../../../../components/pokemon/mdxPages/breeding/breeding.mdx";
import PokemonLayout from "../../PokemonLayout";

export default function BreedingPage() {
  return (
    <PokemonLayout>
      <div className={`article-container`}>
        <Breeding />
      </div>
    </PokemonLayout>
  );
}
