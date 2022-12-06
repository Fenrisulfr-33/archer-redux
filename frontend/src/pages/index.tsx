import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "./HomePage.mdx";
import Article from "../components/Articles/Article";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Archer Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Article>
        <HomePage />
      </Article>
    </div>
  );
};

export default IndexPage;
