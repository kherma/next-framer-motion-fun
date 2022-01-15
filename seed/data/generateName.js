import { randomRange } from "../utils/randomRange";

export const generateName = (config) => {
  const { letters } = config.settings;

  for (let i = 0; i < 12; i++) {
    if (i <= 6) {
      i === 6
        ? (config.data.name += "-")
        : (config.data.name +=
            letters[randomRange(0, letters.length - 1)].toUpperCase());
    }

    if (i > 6 && i <= 10) {
      i === 10
        ? (config.data.name += "-")
        : (config.data.name += randomRange(0, 9));
    }

    if (i > 10) {
      config.data.name += letters[randomRange(0, letters.length - 1)];
    }
  }
};
