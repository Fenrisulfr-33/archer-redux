import dynamic from "next/dynamic";
import PokemonLayout from "@/components/pokemon/PokemonLayout";
import ArticleContainer from "@/components/articles/ArticleContainer";

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
