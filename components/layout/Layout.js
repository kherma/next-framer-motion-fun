import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { page } from "../../utils/animations";
import { config } from "../../utils/config";
import Head from "next/head";
import Header from "./Header";
import Modal from "../feature/Modal";
import PageDescription from "./PageDescription";
import AchievementMessage from "../common/AchievementMessage";

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
  const titlePart = "| PATCHWORK";

  const { pagesData } = config;
  return (
    <div className="flex flex-col gap-4 p-4 w-screen min-h-screen bg-gray-200 lg:gap-8 lg:p-8 xl:h-screen">
      <Head>
        <title>{`${pagesData[pageTitle].title} ${titlePart}`}</title>
        <meta name="description" content={pagesData[pageTitle].description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isModalOpen && <Modal handleClose={close} />}
      </AnimatePresence>
      <Header handleOpen={open} />
      <main className="w-full h-full">
        <motion.div
          initial={page.initial}
          animate={page.animate}
          className="w-full h-full"
        >
          <div className="flex flex-col gap-8 w-full h-full xl:flex-row">
            <PageDescription
              title={pagesData[pageTitle].title}
              message={pagesData[pageTitle].message}
            />
            <div className="flex flex-col gap-8 justify-between items-center py-8 px-4 w-full h-full sm:p-8 xl:w-1/2 paper">
              <AchievementMessage
                achievementDescription={
                  pagesData[pageTitle].achievementDescription
                }
              />
              {children}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Layout;
