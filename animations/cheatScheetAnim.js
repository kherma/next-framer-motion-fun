export const celestialSunAnim = (darkMode) => ({
  initial: {
    translateX: "-50%",
    translateY: darkMode ? "200%" : "-50%",
    scale: 1,
  },
  animate: {
    translateY: darkMode ? ["-50%", "-200%", "200%"] : "-50%",
    opacity: darkMode ? [1, 0, 0] : 1,
    scale: darkMode ? [1, 0, 0] : 1,
  },
});

export const celestialMoonAnim = (darkMode) => ({
  initial: {
    translateX: "-50%",
    translateY: darkMode ? "200%" : "-50%",
    scale: 0.7,
  },
  animate: {
    translateY: darkMode ? ["-50%", "-200%", "200%"] : "-50%",
    opacity: darkMode ? [1, 0, 0] : 1,
    scale: darkMode ? [0.7, 0, 0] : 0.7,
  },
});

export const slideAnim = (index, position) => ({
  initial: {
    scale: index === position ? 1 : 0.9,
    left: `${5 + (index - position) * 87}%`,
  },
  animate: {
    scale: index === position ? 1 : 0.9,
    left: `${5 + (index - position) * 87}%`,
  },
  transition: {
    type: "spring",
    stiffness: 200,
    damping: 20,
  },
});
