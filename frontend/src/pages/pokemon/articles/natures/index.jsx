import Natures from "../../../../components/pokemon/mdxPages/natures/natures.mdx";
import PokemonLayout from "../../PokemonLayout";

export default function NaturesPage() {
  return (
    <PokemonLayout>
      <div className={`article-container`}>
        <Natures />
      </div>
    </PokemonLayout>
  );
}
