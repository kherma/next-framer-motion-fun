import React from "react";

const CodeLink = ({ link, Icon }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Icon className="p-4 w-20 h-20 hover:text-white hover:bg-bgBlue-100 transition-colors duration-300 paper" />
    </a>
  );
};

export default CodeLink;
