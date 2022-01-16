import { colorPaletteHandler } from "../utils/colorPaletteHandler";
import { randomRange } from "../utils/randomRange";

export const renderBody = (state) => {
  const {
    settings: { colorOptions },
    data: { temperature },
  } = state;
  const palette = colorPaletteHandler(colorOptions, temperature);
  const gradientType = randomRange(1, 2) === 1 ? "linear" : "radial";
  const numberOfColors = randomRange(3, 5);
  const percentageOfGradient = 100 / numberOfColors;
  let colorString = "";

  for (let i = 0; i < numberOfColors; i++) {
    if (i < numberOfColors - 1) {
      if (i === 0) {
        colorString += `${palette[i]} ${percentageOfGradient}%, `;
      } else {
        colorString += `${palette[i]} ${i * percentageOfGradient}%, ${
          palette[i]
        } ${(i + 1) * percentageOfGradient}%, `;
      }
    } else {
      colorString += `${palette[i]} ${i * percentageOfGradient}%`;
    }
  }

  const background = `${gradientType}-gradient(${colorString})`;
  state.view.planet.background = background;
};
