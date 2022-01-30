import Link from "next/link";
import { motion } from "framer-motion";
import { btnScaleAnim } from "../../animations/btnScaleAnim";

const BtnPageNavigation = ({ href, Icon }) => {
  const { whileHover, whileTap, transition } = btnScaleAnim(false);

  return (
    <Link href={href} passHref={true}>
      <motion.a
        aria-label={`Go to ${href.replace("/", "")}`}
        whileHover={whileHover}
        whileTap={whileTap}
        transition={transition}
        className="flex justify-center items-center w-full text-white hover:text-white bg-bgBluelight-100 hover:bg-bgBluelight-100 transition-colors duration-300 xl:text-black xl:bg-white paper"
      >
        <Icon className="p-4 w-16 h-16 lg:w-20 lg:h-20" />
      </motion.a>
    </Link>
  );
};

export default BtnPageNavigation;
