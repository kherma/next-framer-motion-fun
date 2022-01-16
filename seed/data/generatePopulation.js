import { randomRange } from "../utils/randomRange";

export const generatePopulation = (state) => {
  const { size, ozoneLayer } = state.data;

  if (ozoneLayer) {
    switch (size) {
      case "small":
        state.data.population = randomRange(100, 1750);
        break;
      case "medium":
        state.data.population = randomRange(1751, 3500);
        break;
      case "large":
        state.data.population = randomRange(3501, 5250);
        break;
      default:
        return;
    }
  }
};
