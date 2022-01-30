import Link from "next/link";
import { config } from "../../config/config";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { btnScaleAnim } from "../../animations/btnScaleAnim";

const BtnHomeLink = () => {
  const { link, Icon } = config.linksData.home;
  const router = useRouter();
  const isActive = router.pathname === link;
  const { whileHover, whileTap, transition } = btnScaleAnim(isActive);

  return (
    <motion.div
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      className={`paper w-1/3 flex justify-center items-center xl:hover:bg-bgRed-100 xl:hover:text-white transition-colors duration-300 ${
        isActive ? "bg-bgRed-100 text-white" : "bg-white"
      }`}
    >
      <Link href={link}>
        <a
          role="button"
          aria-label="Go to home page"
          className={`flex justify-center items-center w-full ${
            isActive && "cursor-default"
          }`}
        >
          <Icon className="p-4 w-16 h-16 lg:w-20 lg:h-20" />
        </a>
      </Link>
    </motion.div>
  );
};

export default BtnHomeLink;
