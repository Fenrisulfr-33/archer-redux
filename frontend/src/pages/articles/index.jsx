import ArticleList from '@/components/articles/ArticlesList';
import { mainArticles } from '@/articles/main';

export default function Articles() {
  return <ArticleList list={mainArticles} />;
}
