import React from "react";
import HomeLink from "../common/HomeLink";
import CodeLink from "../common/CodeLink";

const Header = () => {
  return (
    <header className="flex gap-8 items-center">
      <HomeLink />
      <CodeLink />
    </header>
  );
};

export default Header;
