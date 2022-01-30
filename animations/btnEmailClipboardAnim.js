export const emailClipboardAnima = (isActive) => ({
  animate: isActive
    ? {
        rotate: 360,
        opacity: [1, 0],
      }
    : {
        opacity: 1,
      },
  transition: {
    duration: 1,
    opacity: {
      duration: 0.75,
    },
  },
});

export const emailCheckAnim = {
  initial: { opacity: 0 },
  animate: {
    rotate: [-360, 0, 0],
    opacity: [0, 1, 1],
    x: -50,
  },
  transition: { duration: 1.5, delay: 1 },
};

export const emailCopytextAnim = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
  },
  transition: {
    duration: 0.5,
    delay: 2.5,
  },
};
