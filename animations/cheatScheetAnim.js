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
