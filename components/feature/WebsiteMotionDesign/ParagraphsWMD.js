import { motion } from "framer-motion";

const ParagraphsWMD = ({ rotate, exit }) => (
  <div className="flex gap-4 justify-between items-center w-full h-2/5 md:gap-8">
    <motion.div
      animate={{
        scale: exit ? 0 : 1,
        opacity: exit ? 0 : 1,
        transition: {
          scale: {
            delay: 0.1,
          },
        },
      }}
      className="w-2/3 h-full bg-pink-400 rounded-2xl"
    />
    <motion.div
      animate={{
        scale: rotate ? 0.5 : 1,
        rotate: rotate ? 180 : 0,
        transition: {
          duration: 0.5,
        },
      }}
      className="w-1/3 h-full bg-blue-400 rounded-2xl"
    />
  </div>
);

export default ParagraphsWMD;
