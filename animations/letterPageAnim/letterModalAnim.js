export const letterBackdropAnim = (toggleAnimation) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: toggleAnimation ? 0.5 : 0.1,
      delay: toggleAnimation ? 1.5 : 0,
    },
  },
  exit: { opacity: 0 },
});

export const letterModalAnim = (toggleAnimation) => ({
  initial: {
    y: "-20%",
    opacity: 0,
  },
  animate: {
    y: "0",
    opacity: 1,
    transition: {
      duration: toggleAnimation ? 0.5 : 0.1,
      delay: toggleAnimation ? 2 : 0,
    },
  },
  exit: {
    y: "20%",
    opacity: 0,
  },
});

export const letterContentAnim = (key) => ({
  key: key,
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: { opacity: 0 },
});
