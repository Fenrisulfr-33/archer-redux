'use client';

import ArticleContainer from "@/app/components/articles/ArticleContainer";
import LandingPage from "@/articles/landing-page.mdx";

export default function Home(){
  return (
    <div className="min-h-screen">
      <ArticleContainer>
        <LandingPage />
      </ArticleContainer>
    </div>
  );
};
