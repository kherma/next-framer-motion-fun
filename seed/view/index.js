import { renderBody } from "./renderBody";
import { renderAtmosphere } from "./renderAtmosphere";

export const renderPlanet = (config) => {
  renderBody(config);
  renderAtmosphere(config);
};
