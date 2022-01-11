import React, { useState, useEffect } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { links } from "../../utils/config";
import BtnPageNavigation from "../buttons/BtnPageNavigation";
import { useRouter } from "next/router";

const PagePagination = () => {
  const { navLinks } = links;
  const pagesLength = navLinks.length;
  const router = useRouter();
  const [next, setNext] = useState(1);
  const [prev, setPrev] = useState(pagesLength - 1);

  useEffect(() => {
    const { pathname } = router;
    const indexOfPage = navLinks.indexOf(pathname);

    if (indexOfPage === 0) {
      setNext(indexOfPage + 1);
      setPrev(pagesLength - 1);
    }

    if (indexOfPage === pagesLength - 1) {
      setNext(0);
      setPrev(indexOfPage - 1);
    }

    if (indexOfPage !== 0 && indexOfPage !== pagesLength - 1) {
      setNext(indexOfPage + 1);
      setPrev(indexOfPage - 1);
    }
  }, [navLinks, pagesLength, router]);

  return (
    <div className="flex gap-4 justify-between items-center w-2/3 lg:gap-8">
      <BtnPageNavigation href={navLinks[prev]} Icon={HiArrowNarrowLeft} />
      <BtnPageNavigation href={navLinks[next]} Icon={HiArrowNarrowRight} />
    </div>
  );
};

export default PagePagination;
