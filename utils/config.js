import { HomeIcon, CodeIcon } from "@heroicons/react/outline";

const titlePart = "| Have Fun";

export const pagesMetaData = {
  home: {
    title: `Home ${titlePart}`,
    description:
      "Welcome to the world of projects made with next and framer motions. The purpose is to have fun and learn some new things!",
  },
};

export const links = {
  home: {
    link: "/",
    Icon: HomeIcon,
  },
  github: {
    link: "https://github.com/kherma/next-framer-motion-fun",
    Icon: CodeIcon,
  },
};
