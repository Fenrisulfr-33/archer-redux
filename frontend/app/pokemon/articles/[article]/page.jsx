"use client";

import dynamic from "next/dynamic";
import ArticleContainer from "@/components/articles/ArticleContainer";

export default function Article({ params }) {
  const Content = dynamic(
    () => import(`@/articles/pokemon/${params.article}.mdx`),
    {}
  );

  return (
    <ArticleContainer>
      {Content ? <Content /> : <div>Not found</div>}
    </ArticleContainer>
  );
}
