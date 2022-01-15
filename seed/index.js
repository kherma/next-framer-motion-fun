import { config } from "./config";
import { generateData } from "./data";
import { renderPlanet } from "./view";

export const generatePlanet = () => {
  generateData(config);
  renderPlanet(config);
  return { data: config.data, view: config.view };
};
