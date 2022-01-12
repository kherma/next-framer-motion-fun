import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <h1 className="flex gap-4 justify-center items-center mb-4 text-4xl font-black text-slate-800 uppercase md:mb-8 md:text-5xl lg:justify-start">
      <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28">
        <Image src="/logo.png" alt="logo" layout="fill" priority />
      </div>
      patchwork
    </h1>
  );
};

export default Logo;
