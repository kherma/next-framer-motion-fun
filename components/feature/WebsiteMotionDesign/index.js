import React, { useState } from "react";
import ButtonsWMD from "./ButtonsWMD";
import SearchBarWMD from "./SearchBarWMD";
import BoxesWMD from "./BoxesWMD";
import AsidWMD from "./AsidWMD";
import ParagraphWMD from "./ParagraphWMD";
import ModalWMD from "./ModalWMD";

const WebsiteMotionDesign = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resizeAnimations, setResizeAnimations] = useState({
    scale: false,
    minimize: false,
    exit: false,
  });
  const open = () => setIsModalOpen(true);
  const close = () => setIsModalOpen(false);

  return (
    <div className="w-72 h-72 md:w-[37rem] md:h-[37rem]">
      <div className="overflow-hidden relative w-full h-full bg-slate-200 rounded-3xl shadow-md">
        {isModalOpen && <ModalWMD handleClose={close} />}
        <div className="flex justify-between items-center px-4 w-full h-1/6 bg-slate-500 md:p-8">
          <ButtonsWMD
            resizeAnimations={resizeAnimations}
            setResizeAnimations={setResizeAnimations}
          />
          <SearchBarWMD />
        </div>
        <div className="flex flex-col gap-4 p-4 w-full h-5/6 md:gap-8 md:p-8">
          <BoxesWMD
            scale={resizeAnimations.scale}
            minimize={resizeAnimations.minimize}
          />
          <div className="flex gap-4 justify-between w-full h-2/3 md:gap-8">
            <AsidWMD exit={resizeAnimations.exit} />
            <ParagraphWMD handleOpen={open} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteMotionDesign;
