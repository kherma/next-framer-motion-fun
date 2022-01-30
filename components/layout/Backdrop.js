import { motion } from "framer-motion";
import { backdropAnim } from "../../animations/modalMenuAnim";

const Backdrop = ({ children, onClick }) => (
  <motion.div
    className="flex fixed top-0 left-0 z-50 justify-center items-center w-full h-full bg-slate-900"
    onClick={onClick}
    initial={backdropAnim.initial}
    animate={backdropAnim.animate}
    exit={backdropAnim.exit}
  >
    {children}
  </motion.div>
);

export default Backdrop;
