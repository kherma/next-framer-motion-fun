import React from "react";
import Image from "next/image";

const Logo = ({ title }) => (
  <h1 className="flex gap-4 justify-center items-center text-4xl font-black text-slate-800 uppercase md:text-5xl lg:justify-start xl:text-4xl 2xl:text-5xl">
    <div className="relative w-16 h-16 md:w-20 md:h-20 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20">
      <Image src="/logo.png" alt="logo" layout="fill" />
    </div>
    <div className="flex flex-col justify-center items-start">
      <span className="text-base md:text-xl xl:text-base 2xl:text-xl">
        {title}
      </span>
      <span>patchwork</span>
    </div>
  </h1>
);

export default Logo;
