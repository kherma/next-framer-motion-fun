import React from "react";
import Link from "next/link";
import { links } from "../../utils/config";
import { useRouter } from "next/router";

const HomeLink = () => {
  const { link, Icon } = links.home;
  const router = useRouter();
  return (
    <nav>
      <Link href={link}>
        <a>
          <Icon
            className={`p-4 w-20 h-20 hover:text-white hover:bg-bgRed-100 transition-colors duration-300 paper ${
              router.pathname === link && "bg-bgRed-100 text-white"
            }`}
          />
        </a>
      </Link>
    </nav>
  );
};

export default HomeLink;
