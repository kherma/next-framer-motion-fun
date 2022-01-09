import React from "react";
import ExternalLink from "../common/ExternalLink";
import EmailClipboard from "../common/EmailClipboard";
import { links } from "../../utils/config";
import { v4 as uuidv4 } from "uuid";

const innerData = ["linkedin", "website"];

const Footer = () => {
  return (
    <footer className="hidden gap-4 justify-center items-center w-full md:flex xl:gap-8">
      <div className="flex gap-4 justify-between items-center xl:gap-8">
        {innerData.map((linkName) => (
          <ExternalLink
            key={uuidv4()}
            link={links[linkName].link}
            Icon={links[linkName].Icon}
          />
        ))}
        <EmailClipboard />
      </div>
      <div className="flex justify-center items-center w-full h-16 font-bold uppercase xl:h-20 paper">
        <p>Kamil Herma &copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
