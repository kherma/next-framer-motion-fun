import React from "react";

const CodeLink = ({ link, Icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex justify-center items-center w-full hover:text-white hover:bg-bgBlue-100 transition-colors duration-300 md:w-auto paper"
    >
      <Icon className="p-4 w-16 h-16 sm:w-20 sm:h-20 md:w-16 md:h-16 xl:w-20 xl:h-20" />
    </a>
  );
};

export default CodeLink;
