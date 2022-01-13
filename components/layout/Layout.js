import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { page } from "../../utils/animations";
import { config } from "../../utils/config";
import Head from "next/head";
import Header from "./Header";
import Modal from "../feature/Modal";

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

  const { pagesData } = config;

  return (
    <div className="flex flex-col gap-4 p-4 w-screen min-h-screen bg-gray-200 lg:gap-8 lg:p-8 lg:h-screen">
      <Head>
        <title>{pagesData[pageTitle].title}</title>
        <meta name="description" content={pagesData[pageTitle].description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isModalOpen && <Modal handleClose={close} />}
      </AnimatePresence>
      <Header handleOpen={open} />
      <main className="w-full min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-10rem)] lg:min-h-[calc(100vh-11rem)] paper">
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
