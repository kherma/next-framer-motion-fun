import { HiOutlineHome, HiOutlineCode, HiOutlineMail } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

// ****************
// CONFIG
// *********

const titlePart = "| Have Fun";

// ****************
// META DATA
// *********

export const pagesMetaData = {
  home: {
    title: `Home ${titlePart}`,
    description:
      "Welcome to the world of projects made with next and framer motions. The purpose is to have fun and learn some new things!",
  },
};

// ****************
// LINKS DATA
// *********

export const links = {
  home: {
    link: "/",
    Icon: HiOutlineHome,
  },
  github: {
    link: "https://github.com/kherma/next-framer-motion-fun",
    Icon: HiOutlineCode,
  },
  email: {
    link: "kamil.herma01@gmail.com",
    Icon: HiOutlineMail,
  },
  linkedin: {
    link: "https://www.linkedin.com/in/kamil-herma/",
    Icon: BsLinkedin,
  },
  website: {
    link: "https://kherma.github.io/",
    Icon: CgWebsite,
  },
};
