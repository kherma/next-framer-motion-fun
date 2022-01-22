export const eatActionVorp = {
  hidden: {
    scale: 1,
    opacity: 1,
  },
  visible: {
    scale: [1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1],
    opacity: 1,
    transition: {
      delay: 2,
      duration: 9,
    },
  },
};

export const eatActionGears = {
  hidden: {
    translateX: "-50%",
    translateY: "-50%",
    rotate: 0,
  },
  visible: {
    translateX: "-50%",
    translateY: "-50%",
    rotate: 1800,
    transition: {
      delay: 9,
      duration: 1,
    },
  },
};

export const eatActionLids = {
  hidden: {
    borderTopWidth: "1.2rem",
    borderBottomWidth: "1.2rem",
  },
  visible: {
    borderTopWidth: ["1.2rem", "0.5rem"],
    borderBottomWidth: ["1.2rem", "0.5rem"],
    transition: { delay: 0.9, duration: 1 },
  },
};

export const eatActionEye = {
  hidden: {
    translateX: "-50%",
    translateY: "-50%",
    scale: 1,
  },
  visible: {
    translateX: "-50%",
    translateY: "-50%",
    scale: [1, 0.2, 0.3, 0.2, 0.3, 0.2, 0.3, 0.2, 1.5, 1],
    transition: {
      scale: {
        delay: 0.9,
        duration: 8,
      },
    },
  },
};

export const eatActionDock = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    transition: {
      duration: 10,
    },
  },
};

export const eatActionBolt = {
  hidden: {
    clipPath:
      "polygon(0% 0%, 0% 53%, 0% 100%, 28% 100%, 100% 100%, 100% 0%, 51% 0)",
    borderRadius: "100%",
    backgroundColor: "#000",
  },
  visible: {
    clipPath:
      "polygon(51% 1%, 25% 53%, 55% 53%, 28% 100%, 81% 39%, 44% 39%, 51% 0)",
    borderRadius: "0%",
    backgroundColor: "#eab308",
    transition: {
      clipPath: {
        delay: 6,
        duration: 1,
      },
      backgroundColor: {
        delay: 5,
        duration: 1,
      },
      borderRadius: {
        delay: 6,
        duration: 1,
      },
    },
  },
};

export const eatActionBattery = {
  hidden: {
    scale: 0,
    opacity: 0,
    translateX: "-50%",
  },
  visible: {
    translateX: "-50%",
    translateY: "-130%",
    scale: [0, 1, 0.5, 0.5, 0.8, 0],
    opacity: [0, 1, 1, 1, 1, 0],
    transition: {
      translateY: {
        delay: 7,
        duration: 1,
      },
      duration: 5,
      delay: 4,
    },
  },
};

export const eatActionPipesMiddle = {
  hidden: {
    translateX: "-50%",
    translateY: "100%",
  },
  visible: {
    translateX: "-50%",
    translateY: ["100%", "0%", "0%", "0%", "0%", "0%", "0%", "100%"],
    transition: {
      duration: 8,
      delay: 1,
    },
  },
};

export const eatActionPlatformTop = {
  hidden: {
    translateX: "-50%",
    translateY: "100%",
  },
  visible: {
    translateX: "-50%",
    translateY: ["100%", "0%", "0%", "0%", "0%", "0%", "0%", "100%"],
    transition: {
      delay: 1,
      duration: 8,
    },
  },
};

export const eatActionBaseTop = {
  hidden: {
    translateX: "-50%",
    translateY: "300%",
  },
  visible: {
    translateX: "-50%",
    translateY: ["300%", "100%", "0%", "0%", "0%", "0%", "100%", "300%"],
    transition: {
      duration: 8,
      delay: 1,
    },
  },
};

export const eatActionWiresTop = {
  hidden: {
    translateX: "-50%",
    translateY: "400%",
  },
  visible: {
    translateX: "-50%",
    translateY: ["400%", "200%", "95%", "5%", "5%", "95%", "200%", "400%"],
    transition: {
      duration: 8,
      delay: 1,
    },
  },
};
