import { AiFillHeart } from "react-icons/ai";

const VorpStatus = ({ completedActions }) => (
  <div className="flex gap-2 justify-between items-center py-2 w-full sm:gap-8 sm:py-4 xl:py-2">
    <div className="p-1 w-full h-12 bg-bgViolet-500 rounded-full border-4 border-bgViolet-400 sm:h-20 xl:h-16">
      <div className="w-full h-full rounded-full fan" />
    </div>
    <div className="flex gap-2 justify-end items-center w-1/2 h-full sm:gap-4 sm:w-1/4">
      {[...Array.from({ length: 3 }, (_, i) => i)].map((item) => (
        <AiFillHeart
          key={item}
          className={`w-10 h-10 ${
            completedActions[item] !== undefined
              ? "text-red-500"
              : "text-bgViolet-400"
          } sm:w-16 sm:h-16 xl:w-16 xl:h-16`}
        />
      ))}
    </div>
  </div>
);

export default VorpStatus;
