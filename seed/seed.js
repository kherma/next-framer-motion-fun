// class Planet {
//   constructor() {
//     this.data = {
//       name: "",
//       size: "",
//       distanceFromSun: 0,
//       atmosphere: [],
//       ozoneLayer: false,
//       temperature: "",
//       population: 0,
//       description: "",
//     };

//     this.settings = {
//       gradinetType: "",
//       numberOfColors: 0,
//       colorString: "",
//       palette: {},
//       atmosphereBase: 0.4,
//       borderStyle: "",
//       numberSize: 0,
//     };

//     this.styles = {
//       planet: {},
//       rings: {
//         show: false,
//       },
//     };
//   }

//   generateDescription() {
//     const { name, size, distanceFromSun, temperature, atmosphere, population } =
//       this.data;
//     const options = {
//       temperature: [
//         "it has great potential for resource extraction",
//         "mining resources on the planet will be very difficult or almost impossible",
//       ],
//       atmosphere: [
//         "there is no potential for terraformation in the future",
//         "and there is a lot of oxygen in it",
//         "it has potential for terraformation in the future",
//       ],
//       population: [
//         `the planet is inhabited by ${population} M of unexplored creatures`,
//         "the planet is uninhabited",
//       ],
//     };

//     this.data.description = `${name} is a ${size} planet. It is located ${distanceFromSun} milion miles from its star. The average temperature is ${temperature} degrees Celsius and because of that ${
//       temperature > -100 && temperature < 61
//         ? options.temperature[0]
//         : options.temperature[1]
//     }. The atmosphere has ${atmosphere.length} layers so ${
//       atmosphere.length < 3
//         ? options.atmosphere[0]
//         : population
//         ? options.atmosphere[1]
//         : options.atmosphere[2]
//     }. Finally ${population ? options.population[0] : options.population[1]}.`;
//   }

//   RenderPlanet() {
//     const { cold, warm, etheric, ethericCold } = colorSchemes;
//     switch (true) {
//       case this.data.temperature > 60:
//         this.settings.palette = warm[this.random(0, warm.length - 1)];
//         break;
//       case this.data.temperature >= 0 && this.data.temperature <= 60:
//         this.settings.palette = etheric[this.random(0, etheric.length - 1)];
//         break;
//       case this.data.temperature < 0 && this.data.temperature >= -100:
//         this.settings.palette =
//           ethericCold[this.random(0, ethericCold.length - 1)];
//         break;
//       case this.data.temperature < -100:
//         this.settings.palette = cold[this.random(0, cold.length - 1)];
//         break;
//       default:
//         break;
//     }

//     switch (this.random(1, 2)) {
//       case 1:
//         this.settings.gradinetType = "linear";
//         break;
//       case 2:
//         this.settings.gradinetType = "radial";
//         break;
//       default:
//         break;
//     }

//     this.settings.numberOfColors = this.random(3, 4);

//     for (let i = 0; i < this.settings.numberOfColors; i++) {
//       if (i < this.settings.numberOfColors - 1) {
//         this.settings.colorString += `${this.settings.palette.colors[i]}, `;
//       } else {
//         this.settings.colorString += `${this.settings.palette.colors[i]}`;
//       }
//     }

//     this.styles.planet.background = `${this.settings.gradinetType}-gradient(${this.settings.colorString})`;
//   }

//   RenderAtmosphere() {
//     const { atmosphere } = colorSchemes;
//     const { atmosphereBase } = this.settings;

//     if (
//       this.data.atmosphere.length === 1 &&
//       this.data.atmosphere.includes("exosphere")
//     ) {
//       this.styles.planet.boxShadow = `inset -2.5rem -1.5rem 1rem rgba(0,0,0,0.2), 0 0 0 ${(
//         atmosphereBase * this.random(4, 7)
//       ).toFixed(1)}rem ${atmosphere[4]}`;
//     }

//     if (
//       this.data.atmosphere.length === 1 &&
//       this.data.atmosphere.includes("troposphere")
//     ) {
//       this.styles.planet.boxShadow = `inset -2.5rem -1.5rem 1rem rgba(0,0,0,0.2), 0 0 0 ${(
//         atmosphereBase * this.random(1, 3)
//       ).toFixed(1)}rem ${atmosphere[0]}`;
//     }

//     if (this.data.atmosphere.length === 3) {
//       this.styles.planet.boxShadow = `inset -2.5rem -1.5rem 1rem rgba(0,0,0,0.2), 0 0 0 ${atmosphereBase}rem ${
//         atmosphere[0]
//       }, 0 0 0 ${atmosphereBase * 4}rem ${atmosphere[2]}, 0 0 0 ${
//         atmosphereBase * 10
//       }rem ${atmosphere[4]}`;
//     }

//     if (this.data.atmosphere.length === 5 && !this.data.ozoneLayer) {
//       this.styles.planet.boxShadow = `inset -2.5rem -1.5rem 1rem rgba(0,0,0,0.2), 0 0 0 ${atmosphereBase}rem ${
//         atmosphere[0]
//       }, 0 0 0 ${(atmosphereBase * 3).toFixed(1)}rem ${atmosphere[1]}, 0 0 0 ${(
//         atmosphereBase * 4
//       ).toFixed(1)}rem ${atmosphere[2]}, 0 0 0 ${(atmosphereBase * 6).toFixed(
//         1
//       )}rem ${atmosphere[3]}, 0 0 0 ${(atmosphereBase * 10).toFixed(1)}rem ${
//         atmosphere[4]
//       }`;
//     }

//     if (this.data.atmosphere.length === 5 && this.data.ozoneLayer) {
//       this.styles.planet.boxShadow = `inset -2.5rem -1.5rem 1rem rgba(0,0,0,0.2), 0 0 0 ${atmosphereBase}rem ${
//         atmosphere[0]
//       }, 0 0 0 ${(atmosphereBase * 2).toFixed(1)}rem ${atmosphere[5]}, 0 0 0 ${(
//         atmosphereBase * 3
//       ).toFixed(1)}rem ${atmosphere[1]}, 0 0 0 ${(atmosphereBase * 4).toFixed(
//         1
//       )}rem ${atmosphere[2]}, 0 0 0 ${(atmosphereBase * 6).toFixed(1)}rem ${
//         atmosphere[3]
//       }, 0 0 0 ${(atmosphereBase * 10).toFixed(1)}rem ${atmosphere[4]}`;
//     }
//   }

//   generatePlanet() {
//     this.generateDescription();
//     this.RenderPlanet();
//     this.RenderAtmosphere();
//     this.RenderRings();
//   }
// }
