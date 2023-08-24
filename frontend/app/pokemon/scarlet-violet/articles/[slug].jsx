import dynamic from "next/dynamic";
import ArticleContainer from "@/components/articles/ArticleContainer";
import PokemonLayout from '@/components/layouts/PokemonLayout';
export default function ArticlePage({ query }) {
  const Content = dynamic(() =>
    import(`@/articles/pokemon/scarlet-violet/${query.slug}.mdx`)
  );

  return (
    <PokemonLayout>
      <ArticleContainer>
        <Content />
      </ArticleContainer>
    </PokemonLayout>
  );
}

ArticlePage.getInitialProps = async ({ query }) => {
  return { query };
};
