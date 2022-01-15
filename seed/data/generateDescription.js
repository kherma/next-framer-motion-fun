import { descriptionOptions } from "../config/descriptionOptions";

export const generateDescription = (config) => {
  const { name, size, distanceFromSun, atmosphere, temperature, population } =
    config.data;

  const {
    temperatureDescription,
    atmosphereDescription,
    populationDescription,
  } = descriptionOptions(temperature, atmosphere, population);

  config.data.description = `${name} is a ${size} planet. It is located ${distanceFromSun} milion miles from its star. The average temperature is ${temperature} degrees Celsius and because of that ${temperatureDescription}. The atmosphere has ${atmosphere.length} layers ${atmosphereDescription}. Finally ${populationDescription}.`;
};
