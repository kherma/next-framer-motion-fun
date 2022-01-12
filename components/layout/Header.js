import React from "react";
import HomeLink from "../buttons/BtnHomeLink";
import InfoButton from "../buttons/BtnInfo";
import PagePagination from "../feature/PagePagination";

const Header = ({ handleOpen }) => (
  <header className="h-20 sm:h-28 lg:h-20">
    <div className="flex fixed top-0 left-0 z-20 gap-4 justify-between items-center p-4 w-full bg-white rounded-xl shadow-md sm:p-8 lg:static lg:gap-8 lg:p-0 lg:bg-transparent lg:shadow-none">
      <nav className="flex gap-4 justify-between items-center w-full lg:gap-8">
        <HomeLink />
        <PagePagination />
      </nav>
      <InfoButton handleOpen={handleOpen} />
    </div>
  </header>
);

export default Header;
