import React from "react";
import { v4 as uuidv4 } from "uuid";
import BtnTechStack from "../buttons/BtnTechStack";
import { links } from "../../utils/config";
import { motion } from "framer-motion";
import { btnScale } from "../../utils/animations";

const TechStackLinks = () => {
  const { techStack } = links;
  const { whileHover, whileTap, transition } = btnScale(false);

  return (
    <div className="flex flex-col gap-8 justify-center items-center md:flex-row">
      <h2 className="text-4xl font-black text-slate-800 uppercase md:text-5xl">
        Tech stack
      </h2>
      <div className="flex gap-10 items-center">
        {techStack.map(({ link, Icon }) => (
          <BtnTechStack href={link} key={uuidv4()}>
            <motion.div
              whileHover={whileHover}
              whileTap={whileTap}
              transition={transition}
            >
              <Icon className="w-12 h-12" />
            </motion.div>
          </BtnTechStack>
        ))}
      </div>
    </div>
  );
};

export default TechStackLinks;
