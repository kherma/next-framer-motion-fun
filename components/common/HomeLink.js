import React from "react";
import Link from "next/link";
import { links } from "../../utils/config";
import { useRouter } from "next/router";

const HomeLink = () => {
  const { link, Icon } = links.home;
  const router = useRouter();
  return (
    <nav
      className={`hover:text-white hover:bg-bgRed-100 transition-colors duration-300 paper ${
        router.pathname === link &&
        "bg-bgRed-100 text-white w-full md:w-auto flex justify-center items-center"
      }`}
    >
      <Link href={link}>
        <a>
          <Icon className="p-4 w-16 h-16 sm:w-20 sm:h-20 md:w-16 md:h-16 xl:w-20 xl:h-20" />
        </a>
      </Link>
    </nav>
  );
};

export default HomeLink;
