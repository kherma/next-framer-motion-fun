import React from "react";
import HomeLink from "../buttons/BtnHomeLink";
import InfoButton from "../buttons/BtnInfo";

const Header = ({ toogleModal }) => {
  return (
    <header className="flex gap-4 justify-between items-center w-full lg:gap-8">
      <HomeLink />
      <InfoButton toogleModal={toogleModal} />
    </header>
  );
};

export default Header;
