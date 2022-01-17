export const btnExploreAnim = [
  {
    animate: { scaleY: [1, 2, 1] },
    transition: {
      duration: 0.4,
    },
  },
  {
    animate: { scaleY: [1, 2, 1] },
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
  {
    animate: { scaleY: [1, 2, 1] },
    transition: {
      duration: 0.4,
      delay: 0.8,
    },
  },
];

export const descriptionPlaceholderAnim = (loading) => ({
  animate: {
    scale: loading ? [1, 1, 1, 1, 1, 0.5] : 1,
    y: loading ? [0, 10, 10, 10, 10, -50] : 0,
    rotate: loading ? [0, 0, 0, -10, 10, 0] : 0,
    opacity: loading ? 0 : 1,
  },
  transition: {
    opacity: {
      delay: 0.6,
    },
    duration: 0.9,
  },
});

export const summaryAnim = {
  initial: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
  animate: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
  exit: { clipPath: "polygon(0 0, 1% 0, 1% 100%, 0 100%)" },
  transition: {
    duration: 1,
    type: "spring",
  },
};
