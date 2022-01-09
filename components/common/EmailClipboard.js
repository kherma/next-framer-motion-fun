import React from "react";
import { links } from "../../utils/config";

const EmailClipboard = () => {
  const { link, Icon } = links.email;

  return (
    <button
      className="flex justify-center items-center w-40 hover:text-white hover:bg-bgViolet-100 transition-colors duration-300 xl:w-48 paper"
      onClick={() => {
        navigator.clipboard.writeText(link);
      }}
    >
      <Icon className="p-4 w-16 h-16 sm:w-20 sm:h-20 md:w-16 md:h-16 xl:w-20 xl:h-20" />
    </button>
  );
};

export default EmailClipboard;
