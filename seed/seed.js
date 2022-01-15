// class Planet {
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
//     this.RenderPlanet();
//     this.RenderAtmosphere();
//   }
// }
