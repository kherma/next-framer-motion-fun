import { randomRange } from "./randomRange";

export const colorPaletteHandler = (colorOptions, temperature) => {
  const { cold, ethericCold, etheric, warm } = colorOptions;
  switch (true) {
    case temperature > 60:
      return warm[randomRange(0, warm.length - 1)];
    case temperature >= 0 && temperature <= 60:
      return etheric[randomRange(0, etheric.length - 1)];
    case temperature < 0 && temperature >= -100:
      return ethericCold[randomRange(0, ethericCold.length - 1)];
    case temperature < -100:
      return cold[randomRange(0, cold.length - 1)];
    default:
      break;
  }
};
