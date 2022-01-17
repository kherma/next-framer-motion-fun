export const planetAtmosphereAnim = {
  initial: {
    scaleY: 0,
    opacity: 0,
  },
  animate: { scaleY: 1, opacity: 1 },
  exit: {
    opacity: 0,
    scaleY: 0,
    transition: {
      scaleY: {
        delay: 0.3,
      },
    },
  },
  transition: {
    duration: 1,
    type: "spring",
  },
};
