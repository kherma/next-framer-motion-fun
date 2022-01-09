import React from "react";
import Link from "next/link";
import { links } from "../../utils/config";

const HomeLink = () => {
  const { link, Icon } = links.home;
  return (
    <nav>
      <Link href={link}>
        <a>
          <Icon className="p-4 w-20 h-20 paper" />
        </a>
      </Link>
    </nav>
  );
};

export default HomeLink;
