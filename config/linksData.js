import { HiOutlineHome, HiOutlineCode, HiOutlineMail } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { SiNextdotjs, SiFramer, SiTailwindcss } from "react-icons/si";

export const linksData = {
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
  nextJs: {
    link: "https://nextjs.org/",
    Icon: SiNextdotjs,
  },
  framerMotion: {
    link: "https://www.framer.com/motion/",
    Icon: SiFramer,
  },
  tailwindCss: {
    link: "https://tailwindcss.com/",
    Icon: SiTailwindcss,
  },
  navLinks: ["/", "/planet", "/vorp", "/letter", "/fizzbuzz", "/cheatsheet"],
};
