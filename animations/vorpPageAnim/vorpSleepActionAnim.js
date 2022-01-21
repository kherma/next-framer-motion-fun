export const sleepActionVorp = {
  hidden: {
    scale: 1,
    opacity: 1,
  },
  visible: {
    scale: [1, 0.25],
    opacity: 1,
    y: "-20%",
    transition: {
      delay: 0.3,
      duration: 2,
    },
  },
};

export const sleepActionGears = {
  hidden: {
    translateX: "-50%",
    translateY: "-50%",
  },
  visible: {
    translateX: "-50%",
    translateY: "-50%",
    rotate: 0,
    transition: {
      delay: 0.3,
      duration: 2,
    },
  },
};

export const sleepActionLids = {
  hidden: {
    borderTopWidth: "3rem",
    borderBottomWidth: "3rem",
  },
  visible: {
    borderTopWidth: "3rem",
    borderBottomWidth: "3rem",
    transition: { delay: 0.9, duration: 1 },
  },
};

export const sleepActionEye = {
  hidden: {
    translateX: "-50%",
    translateY: "-50%",
    scale: 1,
  },
  visible: {
    translateX: "-50%",
    translateY: "-50%",
    scale: [1, 0.5],
    transition: {
      delay: 8,
      duration: 2,
    },
  },
};

export const sleepActionDome = {
  hidden: {
    translateY: "-100%",
    translateX: "-50%",
    opacity: 0,
  },
  visible: {
    translateY: ["-100%", "0%", "0%", "0%", "-100%"],
    translateX: "-50%",
    opacity: [0, 1, 1, 1, 0],
    transition: {
      duration: 10,
    },
  },
};

export const sleepActionPlatform = {
  hidden: {
    translateX: "-50%",
    translateY: "100%",
    opacity: 0,
  },
  visible: {
    translateY: ["100%", "0%", "0%", "0%", "100%"],
    translateX: "-50%",
    opacity: [0, 1, 1, 1, 0],
    transition: {
      duration: 10,
    },
  },
};
