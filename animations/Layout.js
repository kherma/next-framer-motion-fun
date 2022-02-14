import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageAnim } from "../../animations/pageAnim";
import { config } from "../../config/config";
import Head from "next/head";
import Header from "./Header";
import Modal from "./Modal";
import PageDescription from "./PageDescription";
import AchievementMessage from "../common/AchievementMessage";

const Layout = ({ children, pageTitle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const titlePart = "| PATCHWORK";
  const { pagesData } = config;

  const open = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="flex flex-col gap-4 p-4 w-full h-full min-h-screen bg-gray-200 lg:gap-8 lg:p-8 xl:h-screen">
      <Head>
        <title>{`${pagesData[pageTitle].title} ${titlePart}`}</title>
        <meta name="description" content={pagesData[pageTitle].description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isModalOpen && <Modal handleClose={close} />}
      </AnimatePresence>
      <Header handleOpen={open} />
      <main className="flex flex-col gap-8 w-full h-full xl:flex-row">
        <PageDescription
          title={pagesData[pageTitle].title}
          message={pagesData[pageTitle].message}
        />

        <div className=" py-8 px-4 w-full h-full sm:p-8 xl:w-1/2 paper">
          <motion.div
            initial={pageAnim.initial}
            animate={pageAnim.animate}
            className="flex flex-col gap-8 justify-center items-center w-full h-full xl:gap-8"
          >
            <AchievementMessage
              achievementDescription={
                pagesData[pageTitle].achievementDescription
              }
            />
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
