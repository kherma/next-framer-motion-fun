import React, { useState } from "react";
import Head from "next/head";
import { pagesMetaData } from "../../utils/config";
import Header from "./Header";
import Modal from "../feature/Modal";
import { motion, AnimatePresence } from "framer-motion";
import { page } from "../../utils/animations";

const Layout = ({ children, pageTitle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const open = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="flex flex-col gap-4 p-4 w-screen min-h-screen bg-gray-200 lg:gap-8 lg:p-8 lg:h-screen">
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
      <Header handleOpen={open} />
      <main className="w-full h-full paper">
        <motion.div
          initial={page.initial}
          animate={page.animate}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
};

export default Layout;
