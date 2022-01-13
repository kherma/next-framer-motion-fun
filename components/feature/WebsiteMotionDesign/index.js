import React, { useState } from "react";
import { config } from "../../../utils/config";
import ButtonsWMD from "./ButtonsWMD";
import SearchBarWMD from "./SearchBarWMD";
import BoxesWMD from "./BoxesWMD";
import AsidWMD from "./AsidWMD";
import ParagraphWMD from "./ParagraphWMD";
import ModalWMD from "./ModalWMD";

const WebsiteMotionDesign = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const open = () => setIsModalOpen(true);
  const close = () => setIsModalOpen(false);

  const {
    websiteMotionDesignData: { buttons, boxes },
  } = config;
  return (
    <div className="overflow-hidden w-72 h-72 rounded-3xl shadow-md md:w-[37rem] md:h-[37rem]">
      <div className="relative w-full h-full bg-slate-200">
        {isModalOpen && <ModalWMD handleClose={close} />}
        <div className="flex justify-between items-center px-4 w-full h-1/6 bg-slate-500 md:p-8">
          <ButtonsWMD innerData={buttons} />
          <SearchBarWMD />
        </div>
        <div className="flex flex-col gap-4 p-4 w-full h-5/6 md:gap-8 md:p-8">
          <BoxesWMD innerData={boxes} />
          <div className="flex gap-4 justify-between w-full h-2/3 md:gap-8">
            <AsidWMD />
            <ParagraphWMD handleOpen={open} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteMotionDesign;
