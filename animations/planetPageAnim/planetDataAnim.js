export const distanceAnim = {
  initial: { scale: 8 },
  animate: { scale: 1 },
  exit: { scale: 0 },
  transition: {
    duration: 0.7,
    type: "spring",
  },
};

export const populationAnim = {
  initial: { y: "-50%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "50%", opacity: 0 },
  transition: {
    duration: 0.9,
    type: "spring",
  },
};

export const sizeAnim = {
  initial: { x: "-50%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: "50%", opacity: 0 },
  transition: {
    duration: 0.6,
    type: "spring",
  },
};

export const temperatureAnim = {
  initial: { scaleX: 0, opacity: 0 },
  animate: { scaleX: 1, opacity: 1 },
  exit: { scaleX: 0, opacity: 0 },
  transition: {
    scaleX: {
      delay: 0.3,
    },
    duration: 0.8,
    type: "spring",
  },
};
