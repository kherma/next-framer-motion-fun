// class Planet {

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
