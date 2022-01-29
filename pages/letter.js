import { useState } from "react";
import Layout from "../components/layout/Layout";
import Envelope from "../components/feature/LetterAchievement/Envelope";
import LetterModal from "../components/feature/LetterAchievement/LetterModal";
import { AnimatePresence } from "framer-motion";

const Letter = ({ quotes }) => {
  const [toggleAnimation, setToggleAnimation] = useState(false);
  const { results: quotesRes } = quotes;
  const quotesList = [...quotesRes];
  quotesList.unshift({
    author: "kherma",
    content: `You did it, now only ${quotesList.length} random quotes left!`,
  });
  quotesList.push({
    author: "congratulations",
    content: "achievement",
  });

  return (
    <Layout pageTitle="letter">
      <div className="flex overflow-hidden relative flex-col p-4 w-full h-full bg-slate-800 rounded-2xl sm:p-8">
        <h1 className="p-4 w-full text-xl font-black text-center text-slate-300 uppercase bg-slate-700 rounded-xl sm:p-8 sm:text-4xl">
          Just click the letter
        </h1>
        <Envelope
          toggleAnimation={toggleAnimation}
          setToggleAnimation={setToggleAnimation}
        />
        <AnimatePresence exitBeforeEnter={true} initial={false}>
          {toggleAnimation && (
            <LetterModal
              toggleAnimation={toggleAnimation}
              setToggleAnimation={setToggleAnimation}
              quotesList={quotesList}
            />
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://quotable.io/quotes?maxLength=100&limit=23");
  const quotes = await res.json();
  return {
    props: {
      quotes,
    },
  };
};

export default Letter;
