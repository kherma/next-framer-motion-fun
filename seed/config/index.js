import { lettersOptions } from "./lettersOptions";
import { atmosphereOptions } from "./atmosphereOptions";
import { colorOptions } from "./colorOptions";
import { descriptionOptions } from "./descriptionOptions";

const data = {
  name: "",
  description: "",
  size: "",
  distanceFromSun: 0,
  atmosphere: [],
  ozoneLayer: false,
  temperature: 0,
  population: 0,
};

const view = {
  container: "",
  planet: "",
};

const settings = {
  lettersOptions,
  atmosphereOptions,
  descriptionOptions,
  colorOptions,
};

export const config = {
  data,
  view,
  settings,
};
