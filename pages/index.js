import { useState } from "react";
import Layout from "../components/layout/Layout";
import { AnimatePresence } from "framer-motion";
import ButtonsWMD from "../components/feature/WebsiteMotionDesign/ButtonsWMD";
import BoxesWMD from "../components/feature/WebsiteMotionDesign/BoxesWMD";
import FooterWMD from "../components/feature/WebsiteMotionDesign/FooterWMD";
import ParagraphsWMD from "../components/feature/WebsiteMotionDesign/ParagraphsWMD";
import ModalWMD from "../components/feature/WebsiteMotionDesign/ModalWMD";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resizeAnimations, setResizeAnimations] = useState({
    scale: false,
    minimize: false,
    exit: false,
    rotate: false,
  });
  const open = () => setIsModalOpen(true);
  const close = () => setIsModalOpen(false);
  return (
    <Layout pageTitle="home">
      <div className="w-full h-96 sm:h-[37rem] md:h-[45rem] xl:h-full">
        <div className="overflow-hidden relative w-full h-full bg-white rounded-2xl">
          <AnimatePresence initial={false} exitBeforeEnter={true}>
            {isModalOpen && <ModalWMD handleClose={close} />}
          </AnimatePresence>
          <div className="flex justify-start items-center px-4 w-full h-1/6 bg-slate-500 md:p-8">
            <ButtonsWMD
              resizeAnimations={resizeAnimations}
              setResizeAnimations={setResizeAnimations}
            />
          </div>
          <div className="flex flex-col gap-4 p-4 w-full h-5/6 sm:gap-8 sm:p-8">
            <BoxesWMD
              scale={resizeAnimations.scale}
              minimize={resizeAnimations.minimize}
            />
            <ParagraphsWMD
              exit={resizeAnimations.exit}
              rotate={resizeAnimations.rotate}
            />
            <FooterWMD handleOpen={open} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
