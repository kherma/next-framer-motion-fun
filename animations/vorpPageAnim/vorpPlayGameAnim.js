export const playGameVorp = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

export const playGameGears = {
  hidden: {
    translateX: "-50%",
    translateY: "-50%",
    rotate: 0,
  },
  visible: {
    translateX: "-50%",
    translateY: "-50%",
    rotate: [0, 3600],
    transition: {
      duration: 60,
    },
  },
};

export const playGameEye = {
  hidden: {
    translateX: "-50%",
    translateY: "-50%",
    scale: 1,
  },
  visible: {
    translateX: "-50%",
    translateY: "-50%",
    scale: 1,
  },
};

export const playGameLids = {
  hidden: {
    borderTopWidth: "1.2rem",
    borderBottomWidth: "1.2rem",
  },
  visible: {
    borderTopWidth: "1.2rem",
    borderBottomWidth: "1.2rem",
    transition: { delay: 1 },
  },
};
