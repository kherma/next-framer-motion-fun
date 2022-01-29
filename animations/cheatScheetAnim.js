export const celestialAnim = (darkMode, variant) => ({
  initial: {
    translateX: "-50%",
    translateY: "-50%",
    scale: variant === "moon" ? 0.7 : 1,
  },
  animate: {
    translateY: darkMode ? ["-50%", "-200%", "200%"] : "-50%",
    opacity: darkMode ? [1, 0, 0] : 1,
    scale: darkMode
      ? [variant === "moon" ? 0.7 : 1, 0, 0]
      : variant === "moon"
      ? 0.7
      : 1,
  },
  transition: {
    type: "spring",
    stiffness: 100,
    delay: darkMode ? 0 : 0.3,
  },
});

export const slideAnim = (index, position) => ({
  initial: {
    rotation: -180,
    scale: 0,
  },
  animate: {
    rotation: 0,
    scale: index === position ? 1 : 0.9,
    left: `${5 + (index - position) * 87}%`,
  },
  transition: {
    type: "spring",
    stiffness: 200,
    damping: 20,
  },
});
