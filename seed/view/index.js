import { renderBody } from "./renderBody";
import { renderAtmosphere } from "./renderAtmosphere";

export const renderPlanet = (state) => {
  renderBody(state);
  renderAtmosphere(state);
};
