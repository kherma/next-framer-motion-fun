import { randomRange } from "../utils/randomRange";

export const generateSize = (state) => {
  const randomSize = randomRange(1, 9);

  const setSize = (text, value) => {
    state.data.size = text;
    state.view.container = `scale(${value === 100 ? 1 : `0.${value}`})`;
  };

  switch (true) {
    case randomSize <= 3:
      setSize("small", randomRange(50, 60));
      break;
    case randomSize >= 4 && randomSize <= 6:
      setSize("medium", randomRange(70, 80));
      break;
    case randomSize >= 7 && randomSize <= 9:
      setSize("large", randomRange(90, 100));
      break;
    default:
      break;
  }
};
