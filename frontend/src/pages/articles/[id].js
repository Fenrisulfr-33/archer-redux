import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { data } from "../../../data/articles";
import Link from "next/link";

const ArticlesLink = () => (
  <div className={`p-2 text-center`}>
    <Link href={`/articles`} passHref>
      <button className={`button`}>{`< Articles`}</button>
    </Link>
  </div>
);

export default function ArticlePage() {
  const { query, isReady } = useRouter();
  const [content, setContent] = useState();

  useEffect(() => {
    if (isReady) {
      const found = data.find((article) => {
        return article.id === Number(query.id);
      });
      setContent(found.body);
    }
  }, [query.id]);
  return (
    <div className={`flex flex-col`}>
      <ArticlesLink />
      <div className={`article-container`}>{content ? content : null}</div>
      <ArticlesLink />
    </div>
  );
}
