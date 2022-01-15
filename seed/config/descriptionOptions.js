export const descriptionOptions = (temperature, atmosphere, population) => {
  const options = {
    temperature: [
      "it has great potential for resource extraction",
      "mining resources on the planet will be very difficult or almost impossible",
    ],
    atmosphere: [
      "so there is no potential for terraformation in the future",
      "and there is a lot of oxygen in it",
      "so it has potential for terraformation in the future",
    ],
    population: [
      `the planet is inhabited by ${population} M of unexplored creatures`,
      "the planet is uninhabited",
    ],
  };

  return {
    temperatureDescription:
      temperature > -100 && temperature < 61
        ? options.temperature[0]
        : options.temperature[1],
    atmosphereDescription:
      atmosphere.length < 3
        ? options.atmosphere[0]
        : population
        ? options.atmosphere[1]
        : options.atmosphere[2],
    populationDescription: population
      ? options.population[0]
      : options.population[1],
  };
};
