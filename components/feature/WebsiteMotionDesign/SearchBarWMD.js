import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import { btnScaleAnim } from "../../../animations/btnScaleAnim";

const SearchBarWMD = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const { whileHover, whileTap, transition } = btnScaleAnim(false, 0.9, 1.1);
  return (
    <motion.div
      onClick={() => setToggleSearch(!toggleSearch)}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
      className="relative h-8 bg-slate-400 rounded-full cursor-pointer"
      animate={{
        width: toggleSearch ? "250px" : "34px",
        transition: {
          transition: {
            duration: 0.5,
            type: "spring",
            sctiffness: 300,
          },
        },
      }}
    >
      <AiOutlineSearch className="absolute top-1/2 left-2 w-4 h-4 text-white -translate-y-1/2" />
    </motion.div>
  );
};

export default SearchBarWMD;
