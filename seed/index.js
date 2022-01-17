import { config } from "./config";
import { generateData } from "./data";
import { renderPlanet } from "./view";

export const generatePlanet = () => {
  const state = {
    ...config,
    data: { ...config.data, atmosphere: [...config.data.atmosphere] },
    view: { ...config.view },
  };
  generateData(state);
  renderPlanet(state);
  return { data: state.data, view: state.view };
};
