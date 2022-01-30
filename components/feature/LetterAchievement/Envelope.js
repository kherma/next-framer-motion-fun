import { motion } from "framer-motion";
import {
  letterHeartAnim,
  letterPageAnim,
  letterTopAnim,
} from "../../../animations/letterPageAnim/letterEnvelopeAnim";

const Envelope = ({ setToggleAnimation, toggleAnimation }) => (
  <div className="flex justify-center items-center w-full h-96 min-h-[24rem] sm:h-[35rem] xl:h-full">
    <motion.button
      onClick={() => setToggleAnimation((prev) => !prev)}
      className="relative w-56 h-28 transition-transform duration-300 hover:scale-[1.1] sm:scale-[2] sm:hover:scale-[2.1]"
    >
      <div className="absolute top-0 left-0 z-[1] w-full h-full bg-slate-600" />
      <motion.div
        variants={letterPageAnim(toggleAnimation)}
        initial="hidden"
        animate="visible"
        className="overflow-hidden absolute left-1/2 z-[2] w-[80%] h-[60%] bg-slate-400 -translate-x-1/2"
      >
        <p className="py-2 px-4 text-[0.5rem] font-black text-slate-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          consequatur temporibus, doloremque autem delectus officiis nemo at
          dolores expedita dolorem itaque quibusdam. Debitis quas eveniet
          aspernatur facere perferendis delectus nemo animi. Omnis, tenetur
          doloremque. Cupiditate qui autem tenetur omnis! Vel nihil voluptates
          sint quos harum, eligendi accusamus obcaecati quae, illum hic
          molestiae nulla ea ad asperiores eveniet, perferendis eaque! Adipisci
          ea dolorem veritatis, voluptates id reiciendis sapiente corporis, in
          assumenda fuga tempora numquam praesentium quod saepe quo ut magni
          minus fugit aut enim aliquam maiores error, ullam perferendis.
          Nesciunt ipsa porro incidunt quasi saepe maiores reiciendis commodi
          minima enim nihil?
        </p>
      </motion.div>
      <ul className="absolute top-0 left-0 z-[3] w-full h-full bg-slate-500 frontface">
        <li className="absolute top-[22%] left-0 w-[50%] h-2 bg-slate-600 skew-y-[26.5deg]" />
        <li className="absolute top-[22%] right-0 w-[50%] h-2 bg-slate-600 -skew-y-[26.5deg]" />
      </ul>

      <motion.div
        variants={letterTopAnim(toggleAnimation)}
        initial="hidden"
        animate="visible"
        className="absolute top-0 left-0 z-[4] border-x-[112px] border-t-[56px] border-x-transparent border-t-slate-500 origin-top"
      />
      <motion.ul
        variants={letterHeartAnim(toggleAnimation)}
        initial="hidden"
        animate="visible"
        className="z-[5] w-4 h-4 bg-slate-700 absoluteCenter"
      >
        <li className="absolute -top-1/2 w-4 h-4 bg-inherit rounded-full" />
        <li className="absolute -left-1/2 w-4 h-4 bg-inherit rounded-full" />
      </motion.ul>
    </motion.button>
  </div>
);

export default Envelope;
