export const descriptionHandler = (
  descriptionOptions,
  temperature,
  atmosphere,
  population
) => {
  const temperatureDescription =
    temperature > -100 && temperature < 61
      ? descriptionOptions.temperature[0]
      : descriptionOptions.temperature[1];

  const atmosphereDescription =
    atmosphere.length < 3
      ? descriptionOptions.atmosphere[0]
      : population
      ? descriptionOptions.atmosphere[1]
      : descriptionOptions.atmosphere[2];

  const populationDescription = population
    ? `${descriptionOptions.population[0][0]} ${population} ${descriptionOptions.population[0][1]}`
    : descriptionOptions.population[1];

  return {
    temperatureDescription,
    atmosphereDescription,
    populationDescription,
  };
};
