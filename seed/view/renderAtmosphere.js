import { atmosphereSizeHandler } from "../utils/atmosphereSizeHandler";

export const renderAtmosphere = (state) => {
  const { atmosphere } = state.data;
  const { atmosphereBase } = state.settings;
  const atmosphereSizes = atmosphereSizeHandler(atmosphereBase, atmosphere);
  let atmosphereStyles = "inset -2.5rem -1.5rem 1rem rgba(0,0,0,0.2),";

  atmosphere.forEach(({ color }, index) => {
    atmosphereStyles += `0 0 0 ${atmosphereSizes[index].toFixed(
      2
    )}rem ${color}`;
    if (index < atmosphere.length - 1) atmosphereStyles += ", ";
  });

  state.view.planet.boxShadow = atmosphereStyles;
};
