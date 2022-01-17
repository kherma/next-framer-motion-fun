import { randomRange } from "../utils/randomRange";

export const generateName = (state) => {
  const { lettersOptions } = state.settings;
  let name = "";

  for (let i = 0; i < 12; i++) {
    if (i <= 6) {
      i === 6
        ? (name += "-")
        : (name +=
            lettersOptions[
              randomRange(0, lettersOptions.length - 1)
            ].toUpperCase());
    }

    if (i > 6 && i <= 10) {
      i === 10 ? (name += "-") : (name += randomRange(0, 9));
    }

    if (i > 10) {
      name += lettersOptions[randomRange(0, lettersOptions.length - 1)];
    }
  }
  state.data.name = name;
};
