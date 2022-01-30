const placeholderTransition = {
  duration: 0.9,
  opacity: {
    delay: 0.7,
  },
};

export const viewPlaceholderAnim = (loading) => ({
  initial: {
    rotate: -30,
  },
  animate: {
    rotate: loading ? [-60, 0, -60, 0] : -30,
    opacity: loading ? 0 : 1,
  },
  transition: placeholderTransition,
});

export const dataPlaceholderAnim = (loading) => ({
  animate: {
    rotate: loading ? 360 : 0,
    opacity: loading ? 0 : 1,
  },
  transition: placeholderTransition,
});

export const atmospherePlaceholderAnim = (loading) => ({
  animate: {
    scale: loading ? [0.9, 1.1, 0.9, 1.1] : 1,
    opacity: loading ? 0 : 1,
  },
  transition: placeholderTransition,
});
