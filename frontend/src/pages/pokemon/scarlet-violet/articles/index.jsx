import ArticlesList from "@/components/articles/ArticlesList";
import { scarletVioletList } from "@/articles/pokemon/scarlet-violet/scarletVioletList";
import PokemonLayout from "../../../../layout/PokemonLayout";

export default function Articles() {
  return (
    <PokemonLayout>
      <ArticlesList list={scarletVioletList} route={'/pokemon/scarlet-violet/articles/'} />
    </PokemonLayout>
  );
}
