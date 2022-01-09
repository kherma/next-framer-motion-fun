import React, { useState } from "react";
import Head from "next/head";
import { pagesMetaData } from "../../utils/config";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "../feature/Modal";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children, pageTitle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const open = () => setIsModalOpen(true);
  const close = () => setIsModalOpen(false);
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
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isModalOpen && <Modal handleClose={close} />}
      </AnimatePresence>
      <div className="flex gap-4 justify-between items-center xl:gap-8">
        <Header toogleModal={() => (isModalOpen ? close() : open())} />
        <Footer />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
