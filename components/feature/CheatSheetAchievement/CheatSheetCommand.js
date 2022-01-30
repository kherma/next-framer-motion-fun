import { useState, useEffect } from "react";

const CheatSheetCommand = ({ command }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (command) => {
    if (!isCopied) {
      navigator.clipboard.writeText(command);
      setIsCopied(true);
    }
    return;
  };

  useEffect(() => {
    const timer = setTimeout(() => isCopied && setIsCopied(false), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [isCopied]);
  return (
    <li className="text-xs text-black dark:text-white lowercase bg-white dark:bg-black transition-colors duration-300 ease-in-out sm:text-base xl:text-base 2xl:text-lg">
      <button
        className="transition-colors duration-200 ease-in-out xl:hover:bg-neutral-200"
        onClick={() => copyToClipboard(command)}
      >
        {isCopied ? (
          <span className="text-green-600">&#47;&#47; copied</span>
        ) : (
          command
        )}
      </button>
    </li>
  );
};

export default CheatSheetCommand;
