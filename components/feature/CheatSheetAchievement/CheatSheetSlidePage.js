import { useState } from "react";
import CheatSheetCommand from "./CheatSheetCommand";
import { v4 as uuidv4 } from "uuid";

const CheatSheetSlidePage = ({ title, commands }) => {
  const [innerData, setInnerData] = useState(commands);

  const handleCopied = (index) => {
    if (!innerData[index].copied) {
      navigator.clipboard.writeText(innerData[index].text);
      setInnerData((prevState) => [
        ...prevState,
        (prevState[index].copied = true),
      ]);
    }
    return;
  };

  return (
    <div className="py-4 px-2 w-full h-full rounded-2xl sm:p-6 xl:p-4 2xl:p-8">
      <h3 className="mb-4 text-lg font-black text-black dark:text-white uppercase bg-white dark:bg-black border-b border-b-black dark:border-b-white transition-colors duration-300 ease-in-out sm:mb-6 sm:text-2xl xl:text-2xl 2xl:text-3xl">
        {title}
      </h3>
      <ul className="flex flex-col gap-1 ml-2">
        {innerData.map(({ text, copied }, index) => (
          <CheatSheetCommand
            key={uuidv4()}
            command={text}
            index={index}
            copied={copied}
            handleCopied={handleCopied}
          />
        ))}
      </ul>
    </div>
  );
};

export default CheatSheetSlidePage;
