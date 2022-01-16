import { randomRange } from "./randomRange";

export const atmosphereSizeHandler = (atmosphereBase, atmosphere) => {
  const numOfAtmosphereLayers = atmosphere.length;
  const hasAtmosphereLayer = (layerName) =>
    atmosphere.some(({ layer }) => layer === layerName);

  if (numOfAtmosphereLayers === 1 && hasAtmosphereLayer("troposphere"))
    return [atmosphereBase * randomRange(1, 4)];
  if (numOfAtmosphereLayers === 1 && hasAtmosphereLayer("exosphere"))
    return [atmosphereBase * randomRange(4, 7)];
  if (numOfAtmosphereLayers === 3)
    return [
      atmosphereBase * randomRange(1, 2),
      atmosphereBase * randomRange(3, 4),
      atmosphereBase * randomRange(7, 10),
    ];
  if (numOfAtmosphereLayers === 5)
    return [
      atmosphereBase * 2,
      atmosphereBase * 3,
      atmosphereBase * 4,
      atmosphereBase * 6,
      atmosphereBase * 10,
    ];
  if (numOfAtmosphereLayers === 6)
    return [
      atmosphereBase,
      atmosphereBase * 2,
      atmosphereBase * 3,
      atmosphereBase * 4,
      atmosphereBase * randomRange(5, 7),
      atmosphereBase * 10,
    ];
};
