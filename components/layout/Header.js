import React from "react";
import HomeLink from "../buttons/BtnHomeLink";
import InfoButton from "../buttons/BtnInfo";
import PagePagination from "../feature/PagePagination";

const Header = ({ toogleModal }) => {
  return (
    <header className="flex gap-4 justify-between items-center w-full lg:gap-8">
      <nav className="flex gap-4 justify-between items-center w-full lg:gap-8">
        <HomeLink />
        <PagePagination />
      </nav>
      <InfoButton toogleModal={toogleModal} />
    </header>
  );
};

export default Header;
