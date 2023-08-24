import "../styles/globals.css";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";
// import Layout from "../layout/Layout";
import Layout from "@/components/layouts/Layout";
import store from "../app/store";

import Router from "next/router";
import Loading from '@/components/loading/Loading';
import { useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });

  return (
    <Provider store={store}>
      <Layout>
        {loading && <Loading />}
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
