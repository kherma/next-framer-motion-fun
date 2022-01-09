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
  planet: {
    title: `Planet ${titlePart}`,
    description: "Random planet generator build with CSS and JavaScript.",
  },
  vorp: {
    title: `Vorp ${titlePart}`,
    description:
      "Animated animalistic robot that meant to be a voice assistant visualization.",
  },
  letter: {
    title: `Letter ${titlePart}`,
    description: "Animated love letter build with CSS and JavaScript.",
  },
  fizzbuzz: {
    title: `FizzBuzz ${titlePart}`,
    description: "Automated FizzBuzz generator with visualization.",
  },
  cheatsheet: {
    title: `Git CheatSheet ${titlePart}`,
    description: "Cheatsheet with GIT and GitHub commands.",
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
  navLinks: ["/planet", "/vorp", "/letter", "/fizzbuzz", "/cheatsheet"],
};
