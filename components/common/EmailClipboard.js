import React from "react";
import { links } from "../../utils/config";

const EmailClipboard = () => {
  const { link, Icon } = links.email;

  return (
    <button
      className="flex justify-center items-center w-48 hover:text-white hover:bg-bgViolet-100 transition-colors duration-300 paper"
      onClick={() => {
        navigator.clipboard.writeText(link);
      }}
    >
      <Icon className="p-4 w-20 h-20 " />
    </button>
  );
};

export default EmailClipboard;
