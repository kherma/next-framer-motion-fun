import React, { useState } from "react";
import Head from "next/head";
import { pagesMetaData } from "../../utils/config";
import Header from "./Header";
import Modal from "../feature/Modal";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children, pageTitle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const open = () => setIsModalOpen(true);
  const close = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col gap-4 p-4 w-screen h-screen bg-gray-200 lg:gap-8 lg:p-8">
      <Head>
        <title>{pagesMetaData[pageTitle].title}</title>
        <meta
          name="description"
          content={pagesMetaData[pageTitle].description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header toogleModal={() => (isModalOpen ? close() : open())} />
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isModalOpen && <Modal handleClose={close} />}
      </AnimatePresence>
      <main className="flex justify-center items-center w-full h-full text-5xl text-center paper">
        {children}
      </main>
    </div>
  );
};

export default Layout;
