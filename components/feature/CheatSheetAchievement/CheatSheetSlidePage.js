const CheatSheetSlidePage = ({ title, commands }) => {
  return (
    <div className="py-4 px-2 w-full h-full rounded-2xl sm:p-6 xl:p-8">
      <h3 className="mb-4 text-lg font-black text-black dark:text-white uppercase bg-white dark:bg-black border-b border-b-black dark:border-b-white transition-colors duration-300 ease-in-out sm:mb-6 sm:text-2xl xl:text-3xl">
        {title}
      </h3>
      <ul className="flex flex-col gap-1 ml-2">
        {commands.map((command, index) => (
          <li
            className="text-xs text-black dark:text-white lowercase bg-white dark:bg-black transition-colors duration-300 ease-in-out sm:text-base xl:text-lg"
            key={index}
          >
            {command}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheatSheetSlidePage;
