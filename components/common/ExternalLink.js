import React from "react";

const CodeLink = ({ link, Icon }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Icon className="p-4 w-20 h-20 paper" />
    </a>
  );
};

export default CodeLink;
