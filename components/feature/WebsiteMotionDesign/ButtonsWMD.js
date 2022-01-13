import React from "react";

const ButtonsWMD = ({ resizeAnimations, setResizeAnimations }) => {
  const toggleAnimation = (variant) => {
    const newState = { ...resizeAnimations };
    newState[variant] = !resizeAnimations[variant];
    setResizeAnimations((prevState) => ({ ...prevState, ...newState }));
  };
  return (
    <ul className="flex gap-4 w-full">
      <li
        onClick={() => toggleAnimation("scale")}
        className="w-4 h-4 bg-green-300 rounded-full cursor-pointer md:w-8 md:h-8"
      />
      <li
        onClick={() => toggleAnimation("minimize")}
        className="w-4 h-4 bg-yellow-300 rounded-full cursor-pointer md:w-8 md:h-8"
      />
      <li
        onClick={() => toggleAnimation("exit")}
        className="w-4 h-4 bg-red-400 rounded-full cursor-pointer md:w-8 md:h-8"
      />
      <li
        onClick={() => toggleAnimation("rotate")}
        className="w-4 h-4 bg-blue-400 rounded-full cursor-pointer md:w-8 md:h-8"
      />
    </ul>
  );
};

export default ButtonsWMD;
