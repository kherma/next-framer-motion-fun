import Image from "next/image";
import Line from "../common/Line";

const PageDescription = ({ title, message }) => (
  <div className="flex flex-col justify-center items-center py-8 px-4 w-full h-full sm:p-8 md:py-12 md:px-8 xl:col-span-3 xl:py-20 paper">
    <div className="flex flex-col gap-8 justify-center items-center w-full max-w-[1440px] h-full">
      <h1 className="flex gap-4 justify-center items-center text-4xl font-black text-slate-800 uppercase md:text-5xl lg:justify-start xl:text-6xl">
        <div className="relative w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24">
          <Image src="/logo.png" alt="logo" layout="fill" />
        </div>
        <div className="flex flex-col justify-center items-start">
          <span className="text-base md:text-xl xl:text-3xl">{title}</span>
          <span>patchwork</span>
        </div>
      </h1>
      <Line />
      <p className="text-xl font-normal text-center text-slate-600 lg:text-2xl xl:text-3xl xl:leading-relaxed">
        {message}
      </p>
    </div>
  </div>
);

export default PageDescription;
