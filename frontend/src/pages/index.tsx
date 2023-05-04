import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/mdxPages/homePage.mdx";
import MDXWrapper from "../components/MDXWrapper";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Archer Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MDXWrapper>
        <HomePage />
      </MDXWrapper>
    </div>
  );
};

export default IndexPage;
