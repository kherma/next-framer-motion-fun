import { letters } from "./letters";
import { atmosphereLayers } from "./atmosphereLayers";
import { colorSchemes } from "./colorSchemes";

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
  size: "",
  planet: "",
};

const settings = {
  letters,
  atmosphereLayers,
  colorSchemes,
};

export const config = {
  data,
  view,
  settings,
};
