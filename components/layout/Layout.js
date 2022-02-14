import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { config } from "../../config/config";
import Head from "next/head";
import Header from "./Header";
import Modal from "./Modal";
import PageDescription from "./PageDescription";
import AchievementsBar from "./AchievementsBar";
import AchievementMessage from "./AchievementMessage";

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
    <div className="flex flex-col gap-4 p-4 w-full h-full min-h-screen bg-gray-200 sm:gap-8 sm:p-8">
      <Head>
        <title>{`${pagesData[pageTitle].title} ${titlePart}`}</title>
        <meta name="description" content={pagesData[pageTitle].description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isModalOpen && <Modal handleClose={close} />}
      </AnimatePresence>
      <Header handleOpen={open} />
      <main className="grid grid-cols-1 gap-8 w-full h-full xl:grid-cols-5">
        <PageDescription
          title={pagesData[pageTitle].title}
          message={pagesData[pageTitle].message}
        />
        <AchievementsBar />
        <AchievementMessage
          achievementDescription={pagesData[pageTitle].achievementDescription}
        />
        <div className="flex justify-center items-center w-full h-full xl:col-span-3 xl:min-h-[calc(100vh-208px)]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
