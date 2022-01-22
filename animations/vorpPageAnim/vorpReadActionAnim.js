export const readActionVorp = {
  hidden: {
    scale: 1,
    opacity: 1,
  },
  visible: {
    scale: [1, 0.5],
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 2,
    },
  },
};

export const readActionGears = {
  hidden: {
    translateX: "-50%",
    translateY: "-50%",
    rotate: 0,
  },
  visible: {
    translateX: "-50%",
    translateY: "-50%",
    rotate: 3600,
    transition: {
      delay: 0.3,
      duration: 9,
    },
  },
};

export const readActionLids = {
  hidden: {
    borderTopWidth: "1.2rem",
    borderBottomWidth: "1.2rem",
  },
  visible: {
    borderTopWidth: ["1.2rem", "1rem"],
    borderBottomWidth: ["1.2rem", "1rem"],
    transition: { delay: 0.9, duration: 1 },
  },
};

export const readActionEye = {
  hidden: {
    translateX: "-50%",
    translateY: "-50%",
    scale: 1,
  },
  visible: {
    translateX: "-50%",
    translateY: ["-50%", "-70%", "-40%", "-70%", "-40%", "-70%", "-50%"],
    scale: [1, 0.5],
    transition: {
      scale: {
        delay: 0.9,
        duration: 1,
      },
      translateY: {
        duration: 5,
        delay: 3,
      },
    },
  },
};

export const readActionTablet = {
  hidden: {
    borderRadius: "100%",
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: [0, 1, 1, 1, 0],
    opacity: [0, 1, 1, 1, 0],
    borderRadius: ["100%", "10%", "10%", "10%", "100%"],
    transition: {
      duration: 10,
      delay: 0.3,
      borderRadius: {
        delay: 1,
        duration: 10,
      },
    },
  },
};

export const readActionText = {
  hidden: {
    y: "0%",
    opacity: 0,
    rotateY: "180deg",
  },
  visible: {
    y: ["0%", "-100%"],
    rotateY: "180deg",
    opacity: [0, 0.7, 0.7, 0.7, 0],
    transition: {
      opacity: {
        duration: 10,
        delay: 1,
      },
      y: {
        duration: 6,
        delay: 3,
      },
    },
  },
};
