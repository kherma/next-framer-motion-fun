import React from "react";
import Link from "next/link";
import { links } from "../../utils/config";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { btnScale } from "../../utils/animations";

const HomeLink = () => {
  const { link, Icon } = links.home;
  const router = useRouter();
  const isActive = router.pathname === link;
  const { whileHover, whileTap, transition } = btnScale(isActive);

  return (
    <motion.nav
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      className={`paper w-full flex justify-center items-center xl:hover:bg-bgRed-100 xl:hover:text-white transition-colors duration-300 ${
        isActive ? "bg-bgRed-100 text-white" : "bg-white"
      }`}
    >
      <Link href={link}>
        <a
          className={`flex justify-center items-center w-full ${
            isActive && "cursor-default"
          }`}
        >
          <Icon className="p-4 w-16 h-16 xl:w-20 xl:h-20" />
        </a>
      </Link>
    </motion.nav>
  );
};

export default HomeLink;
