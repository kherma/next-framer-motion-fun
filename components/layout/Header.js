import React from "react";
import HomeLink from "../common/HomeLink";
import ExternalLink from "../common/ExternalLink";
import { links } from "../../utils/config";
import InfoButton from "../common/InfoButton";

const Header = () => {
  return (
    <header className="flex gap-8 justify-between items-center">
      <HomeLink />
      <ExternalLink link={links.github.link} Icon={links.github.Icon} />
      <InfoButton />
    </header>
  );
};

export default Header;
