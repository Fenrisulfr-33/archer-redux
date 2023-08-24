import dynamic from "next/dynamic";
import PokemonLayout from '@/components/layouts/PokemonLayout';
export default function Article({query}) {
  const Content = dynamic(() => import(`../../../../articles/pokemon/${query.article}.mdx`), {});

  return (
    <PokemonLayout>
      <div className={`article-container`}>
        <Content />
      </div>
    </PokemonLayout>
  );
}

Article.getInitialProps = async ({ query }) => {
  return { query }
}