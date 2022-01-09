import React from "react";
import Head from "next/head";
import { pagesMetaData } from "../../utils/config";
import Header from "./Header";

const Layout = ({ children, pageTitle }) => {
  return (
    <div className="p-8 w-screen h-screen bg-gray-200">
      <Head>
        <title>{pagesMetaData[pageTitle].title}</title>
        <meta
          name="description"
          content={pagesMetaData[pageTitle].description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
