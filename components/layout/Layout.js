import React from "react";
import Head from "next/head";
import { pagesMetaData } from "../../utils/config";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, pageTitle }) => {
  return (
    <div className="p-4 w-screen h-screen bg-gray-200 xl:p-8">
      <Head>
        <title>{pagesMetaData[pageTitle].title}</title>
        <meta
          name="description"
          content={pagesMetaData[pageTitle].description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex gap-4 justify-between items-center xl:gap-8">
        <Header />
        <Footer />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
