import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBarWMD = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  return (
    <motion.div
      onClick={() => setToggleSearch(!toggleSearch)}
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
