import { config } from "./config/config";
import { generateData } from "./data";
import { renderPlanet } from "./view";

export const generatePlanet = () => {
  generateData(config);
  renderPlanet(config);
  console.log(config);
};
