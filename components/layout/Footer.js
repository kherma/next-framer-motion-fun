import React from "react";
import ExternalLink from "../common/ExternalLink";
import EmailClipboard from "../common/EmailClipboard";
import { links } from "../../utils/config";
import { v4 as uuidv4 } from "uuid";

const innerData = ["linkedin", "website"];

const Footer = () => {
  return (
    <footer className="hidden gap-8 justify-center items-center w-full sm:flex">
      <div className="flex gap-8 justify-between items-center">
        {innerData.map((linkName) => (
          <ExternalLink
            key={uuidv4()}
            link={links[linkName].link}
            Icon={links[linkName].Icon}
          />
        ))}
        <EmailClipboard />
      </div>
      <div className="flex gap-2 justify-center items-center w-full h-20 font-bold uppercase paper">
        <p>Kamil Herma</p>
        <p>&copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
