import React from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
// import { links } from "../../utils/config";
import BtnPageNavigation from "../buttons/BtnPageNavigation";

const PagePagination = () => {
  return (
    <div className="flex gap-4 justify-between items-center w-2/3 lg:gap-8">
      <BtnPageNavigation href="/" Icon={HiArrowNarrowLeft} />
      <BtnPageNavigation href="/" Icon={HiArrowNarrowRight} />
    </div>
  );
};

export default PagePagination;
