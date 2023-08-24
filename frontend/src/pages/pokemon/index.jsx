import HomePage from "@/articles/pokemon/home-page.mdx";
import ArticleContainer from '@/components/articles/ArticleContainer';
import PokemonLayout from '@/components/layouts/PokemonLayout';

export default function Pokemon() {
  return (
    <PokemonLayout>
      <ArticleContainer>
        <HomePage />
      </ArticleContainer>
    </PokemonLayout>
  );
}
