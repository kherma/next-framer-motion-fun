import React from "react";
import { links } from "../../utils/config";

const CodeLink = () => {
  const { link, Icon } = links.github;
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Icon className="p-4 w-20 h-20 paper" />
    </a>
  );
};

export default CodeLink;
