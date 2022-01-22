export const letterTopAnim = (toggleAnimation) => ({
  hidden: {
    rotateX: "0deg",
  },
  visible: {
    rotateX: toggleAnimation ? "180deg" : "0deg",
    transition: {
      rotateX: {
        delay: toggleAnimation ? 0.5 : 0.5,
        duration: 0.5,
      },
    },
  },
});

export const letterHeartAnim = (toggleAnimation) => ({
  hidden: {
    translateX: "-50%",
    translateY: "-50%",
    rotate: "45deg",
  },
  visible: {
    translateX: "-50%",
    translateY: toggleAnimation ? "70%" : "-50%",
    rotate: toggleAnimation ? "-45deg" : "45deg",
    transition: {
      duration: 0.5,
      delay: toggleAnimation ? 0 : 1,
    },
  },
});

export const letterPageAnim = (toggleAnimation) => ({
  hidden: {
    translateX: "-50%",
    translateY: "-20%",
  },
  visible: {
    translateX: "-50%",
    translateY: toggleAnimation ? "-70%" : "-20%",
    transition: {
      duration: 0.5,
      delay: toggleAnimation ? 1 : 0,
    },
  },
});
