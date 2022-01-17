export const planetViewAnim = {
  initial: { opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.1 },
  transition: {
    scale: {
      delay: 0.3,
    },
    duration: 2,
    type: "spring",
  },
};
