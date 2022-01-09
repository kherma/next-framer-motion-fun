import React from "react";
import Head from "next/head";
import { pagesMetaData } from "../utils/pagesMetaData";

const Layout = ({ children, pageTitle }) => {
  return (
    <div>
      <Head>
        <title>{pagesMetaData[pageTitle].title}</title>
        <meta
          name="description"
          content={pagesMetaData[pageTitle].description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
