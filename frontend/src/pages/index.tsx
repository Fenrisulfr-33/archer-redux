import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/mdxPages/homePage.mdx";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gengar's HM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`article-container`}>
        <HomePage />
      </div>
    </div>
  );
};

export default IndexPage;
