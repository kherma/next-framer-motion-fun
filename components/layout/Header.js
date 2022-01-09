import React from "react";
import HomeLink from "../common/HomeLink";
import ExternalLink from "../common/ExternalLink";
import { links } from "../../utils/config";

const Header = () => {
  return (
    <header className="flex gap-8 items-center">
      <HomeLink />
      <ExternalLink link={links.github.link} Icon={links.github.Icon} />
    </header>
  );
};

export default Header;
