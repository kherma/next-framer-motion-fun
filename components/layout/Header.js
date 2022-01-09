import React from "react";
import HomeLink from "../common/HomeLink";
import ExternalLink from "../common/ExternalLink";
import { links } from "../../utils/config";
import InfoButton from "../common/InfoButton";

const Header = ({ toogleModal }) => {
  return (
    <header className="flex gap-4 justify-between items-center w-full md:w-auto xl:gap-8">
      <HomeLink />
      <ExternalLink link={links.github.link} Icon={links.github.Icon} />
      <InfoButton toogleModal={toogleModal} />
    </header>
  );
};

export default Header;
