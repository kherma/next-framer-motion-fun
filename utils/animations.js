export const btnScaleWithColor = (color, isActive) => {
  return {
    whileHover: {
      backgroundColor: color,
      color: "#fff",
      scale: isActive ? 1 : 1.05,
    },
    whileTap: {
      backgroundColor: color,
      color: "#fff",
      scale: isActive ? 1 : 0.95,
    },
    transition: {
      scale: {
        type: "spring",
        sctiffness: 300,
      },
      duration: 0.3,
    },
  };
};

export const headerEnvelopeAnimation = (isActive) => {
  return {
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
  };
};

export const headerCheckAnimation = {
  initial: { opacity: 0, display: "none" },
  animate: {
    rotate: [-360, 0, 0],
    opacity: [0, 1, 1],
    display: "block",
    x: [-40, -40, -80],
  },
  transition: { duration: 1.5, delay: 1 },
};
export const headerCopytextAnimation = {
  initial: { opacity: 0, display: "none" },
  animate: {
    opacity: 1,
    display: "block",
  },
  transition: {
    duration: 0.5,
    delay: 2.5,
  },
};

export const backdrop = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
export const modal = {
  initial: {
    y: "-10vh",
    opacity: 0,
  },
  animate: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "10vh",
    opacity: 0,
  },
};
