import type { NextPage } from "next";
import Head from "next/head";
import ArticleContainer from "@/components/articles/ArticleContainer";
import LandingPage from "@/articles/landing-page.mdx";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gengar's HM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticleContainer>
        <LandingPage />
      </ArticleContainer>
    </div>
  );
};

export default IndexPage;
