import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../articles/homePage.mdx";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gengar's HM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-2 bg-gray-900">
        <div className={`article-container`}>
          <HomePage />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
