import { AnimatePresence, motion } from "framer-motion";
import { temperatureAnim } from "../../../../animations/planetPageAnim/planetDataAnim";

const PlanetDataTemperature = ({ temperature }) => {
  const handleBgColor = (temperature) => {
    if (temperature > 60) return "#dc2626";
    if (temperature >= 0 && temperature <= 60) return "#fbbf24";
    if (temperature < 0) return "#06b6d4";
  };
  const { initial, animate, exit, transition } = temperatureAnim;
  return (
    <div className="flex justify-center items-center p-4 font-black text-white uppercase bg-black">
      <AnimatePresence>
        {temperature !== undefined && (
          <motion.p
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
            style={{ backgroundColor: handleBgColor(temperature) }}
            className="p-4 w-full text-2xl text-center rounded-2xl lg:text-3xl xl:p-2 xl:text-xl 2xl:p-4 2xl:text-3xl"
          >
            {temperature} &#x000B0;C
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlanetDataTemperature;
