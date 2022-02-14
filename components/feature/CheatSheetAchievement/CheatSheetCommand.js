import CheatSheetBtnAchievement from "./CheatSheetBtnAchievement";

const CheatSheetCommand = ({ command, index, copied, handleCopied }) => (
  <li className="text-xs text-black dark:text-white lowercase bg-white dark:bg-black transition-colors duration-300 ease-in-out sm:text-base xl:text-lg">
    {command === "COPY ME!!!" ? (
      copied ? (
        <CheatSheetBtnAchievement />
      ) : (
        <button
          disabled={copied}
          className={`${
            !copied
              ? "xl:hover:bg-neutral-200 xl:dark:hover:bg-neutral-700"
              : "hover:bg-transparent"
          }`}
          onClick={() => handleCopied(index)}
        >
          {command}
        </button>
      )
    ) : (
      <button
        disabled={copied}
        className={`${
          !copied
            ? "xl:hover:bg-neutral-200 xl:dark:hover:bg-neutral-700"
            : "hover:bg-transparent"
        }`}
        onClick={() => handleCopied(index)}
      >
        {copied ? (
          <span className="text-green-600">&#47;&#47; copied</span>
        ) : (
          command
        )}
      </button>
    )}
  </li>
);

export default CheatSheetCommand;
