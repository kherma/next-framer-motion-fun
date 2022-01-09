const titlePart = "| Have Fun";

const pagesMetaData = {
  home: {
    title: `Home ${titlePart}`,
    description:
      "Welcome to the world of projects made with next and framer motions. The purpose is to have fun and learn some new things!",
  },
};

export const returnSpecificMetaData = (pageTitle) => {
  const { title, description } = pagesMetaData[pageTitle];
  return { title, description };
};
