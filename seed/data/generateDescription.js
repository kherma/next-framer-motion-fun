import { descriptionHandler } from "../utils/descriptionHandler";

export const generateDescription = (state) => {
  const {
    data: { name, size, distanceFromSun, atmosphere, temperature, population },
    settings: { descriptionOptions },
  } = state;

  const {
    temperatureDescription,
    atmosphereDescription,
    populationDescription,
  } = descriptionHandler(
    descriptionOptions,
    temperature,
    atmosphere,
    population
  );

  state.data.description = `${name} is a ${size} planet. It is located ${distanceFromSun} milion miles from its star. The average temperature is ${temperature} degrees Celsius and because of that ${temperatureDescription}. The atmosphere has ${atmosphere.length} layers ${atmosphereDescription}. Finally ${populationDescription}.`;
};
