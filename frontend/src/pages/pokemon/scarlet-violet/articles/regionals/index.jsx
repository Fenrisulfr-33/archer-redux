import Regionals from "@/articles/pokemon/scarlet-violet/master-division.mdx";
import ArticleContainer from "@/components/articles/ArticleContainer";
import PokemonLayout from '@/components/layouts/PokemonLayout';

export default function TypeChartPage() {
  return (
    <PokemonLayout>
      <ArticleContainer>
        <Regionals />
      </ArticleContainer>
    </PokemonLayout>
  );
}
