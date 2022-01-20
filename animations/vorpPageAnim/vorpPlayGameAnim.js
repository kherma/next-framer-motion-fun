export const playGameVorp = {
  hidden: {
    scale: 1,
    opacity: 1,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

export const playGameGears = {
  hidden: {
    translateX: "-50%",
    translateY: "-50%",
  },
  visible: {
    translateX: "-50%",
    translateY: "-50%",
    rotate: 3600,
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
    transition: {
      duration: 2,
    },
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
    transition: { duration: 5 },
  },
};
