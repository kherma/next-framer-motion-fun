export const btnScaleAnim = (isActive, scaleMin = 0.95, scaleMax = 1.03) => {
  return {
    whileHover: {
      scale: isActive ? 1 : scaleMax,
    },
    whileTap: {
      scale: isActive ? 1 : scaleMin,
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
