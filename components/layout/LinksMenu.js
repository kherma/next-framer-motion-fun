import React from "react";
import ExternalLink from "../buttons/BtnExternalLink";
import { links } from "../../utils/config";
import { v4 as uuidv4 } from "uuid";

const innerData = ["github", "linkedin", "website"];

const LinksMenu = () => {
  return (
    <div className="flex gap-4 justify-between items-center w-full xl:gap-8">
      {innerData.map((linkName) => (
        <ExternalLink
          key={uuidv4()}
          link={links[linkName].link}
          Icon={links[linkName].Icon}
        />
      ))}
    </div>
  );
};

export default LinksMenu;
