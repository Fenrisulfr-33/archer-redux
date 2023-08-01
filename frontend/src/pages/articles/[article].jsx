import Link from "next/link";
import dynamic from "next/dynamic";

const ArticlesLink = () => (
  <div className={`p-2 text-center`}>
    <Link href={`/articles`} passHref>
      <button className={`button`}>{`< Articles`}</button>
    </Link>
  </div>
);

export default function ArticlePage({ query }) {
  const Content = dynamic(() => import(`../../articles/mainArticles/${query.article}.mdx`));

  return (
    <div className={`flex flex-col`}>
      <ArticlesLink />
      <div className={`article-container`}><Content /></div>
      <ArticlesLink />
    </div>
  );
}

ArticlePage.getInitialProps = async ({ query }) => {
  return { query }
}