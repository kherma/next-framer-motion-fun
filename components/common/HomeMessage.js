import React from "react";
import Logo from "./Logo";

const HomeMessage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Logo />
      <p className="text-xl font-normal text-center text-slate-600 md:w-4/5 xl:text-2xl xl:text-left">
        Welcome to the world of cool, weird and funny projects that I decided to
        put together because I had too many repositories and I wanted to try
        Next.JS and Framer Motion.
      </p>
    </div>
  );
};

export default HomeMessage;
