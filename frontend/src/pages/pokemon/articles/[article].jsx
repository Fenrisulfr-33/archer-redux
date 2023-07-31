import { useState, useEffect, Suspense } from "react";
import { NextPageContext } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import PokemonLayout from "../PokemonLayout";



export default function Article({query}) {
  const Content = dynamic(() => import(`../../../components/pokemon/mdxPages/${query.article}.mdx`), {});


  return (
    <PokemonLayout>
      <Suspense>
      <div className={`article-container`}>
        <Content />
      </div>
      </Suspense>
    </PokemonLayout>
  );
}

Article.getInitialProps = async ({ query }) => {
  return { query }
}