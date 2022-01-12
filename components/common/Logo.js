import React from "react";
import Image from "next/image";

const Logo = () => (
  <h1 className="flex gap-4 justify-center items-center text-4xl font-black text-slate-800 uppercase md:text-5xl lg:justify-start">
    <div className="relative w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
      <Image src="/logo.png" alt="logo" layout="fill" />
    </div>
    patchwork
  </h1>
);

export default Logo;
