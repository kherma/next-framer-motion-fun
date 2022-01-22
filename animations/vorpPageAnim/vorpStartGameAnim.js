export const startGameVorp = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      delay: 0.3,
      duration: 1,
    },
  },
};

export const startGameGears = {
  hidden: {
    translateX: "-50%",
    translateY: "-50%",
  },
  visible: {
    translateX: "-50%",
    translateY: "-50%",
    rotate: [0, 270, -270, 0],
    transition: {
      delay: 2,
      duration: 8,
    },
  },
};

export const startGameLids = {
  hidden: {
    borderTopWidth: "3rem",
    borderBottomWidth: "3rem",
  },
  visible: {
    borderTopWidth: ["3rem", "1.7rem", "3rem", "0.7rem", "1.2rem"],
    borderBottomWidth: ["3rem", "1.7rem", "3rem", "0.7rem", "1.2rem"],
    transition: { delay: 4, duration: 5 },
  },
};

export const startGameEye = {
  hidden: {
    translateX: "-50%",
    translateY: "-50%",
    scale: 1,
  },
  visible: {
    translateX: "-50%",
    translateY: "-50%",
    scale: [1, 0.5, 1],
    transition: {
      delay: 8,
      duration: 2,
    },
  },
};
