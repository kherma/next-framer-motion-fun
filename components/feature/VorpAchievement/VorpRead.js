import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import {
  readActionTablet,
  readActionText,
} from "../../../animations/vorpPageAnim/vorpReadActionAnim";

const VorpRead = () => (
  <motion.div
    variants={readActionTablet}
    initial="hidden"
    animate="visible"
    className="overflow-hidden absolute w-52 h-52 sm:w-72"
  >
    <div className="absolute w-full h-full bg-sky-300 border-y-4 border-y-white opacity-10" />
    <div className="absolute top-0 right-0 w-[5%] h-full bg-slate-700 border-r-4 border-slate-500" />
    <div className="absolute top-0 left-0 w-[5%] h-full bg-slate-700 border-l-4 border-slate-500" />
    <ul className="flex absolute bottom-0 justify-evenly items-center w-full h-1/6 ">
      {[...Array.from({ length: 5 }, (_, i) => i + 1)].map(() => (
        <li
          key={uuidv4()}
          className="w-4 h-4 bg-slate-500 rounded-full border border-slate-600"
        />
      ))}
    </ul>
    <p className="overflow-hidden absolute top-0 px-6 w-full h-5/6 text-xs font-black text-white uppercase scale-x-75">
      <motion.span
        variants={readActionText}
        initial="hidden"
        animate="visible"
        className="absolute p-2"
      >
        Vivamus quis nisl felis. In hac habitasse platea dictumst. Nam mattis
        orci velit, id egestas eros cursus vitae. Aenean consectetur eros
        mauris, nec condimentum turpis porttitor sed. Vestibulum eleifend
        finibus neque, at gravida purus vulputate vitae. Phasellus accumsan
        molestie massa. Suspendisse ac venenatis ligula. Phasellus vitae
        pharetra ipsum. Proin elementum urna eget tincidunt semper. In hac
        habitasse platea dictumst. Duis justo augue, hendrerit eu ipsum sit
        amet, dapibus suscipit elit. Duis varius nisi vel odio venenatis
        imperdiet. Ut ligula nibh, hendrerit in metus vel, elementum pulvinar
        elit. Duis venenatis ac purus id tempor. Mauris in elit eu risus
        sollicitudin tincidunt eu in elit.
      </motion.span>
    </p>
  </motion.div>
);

export default VorpRead;
