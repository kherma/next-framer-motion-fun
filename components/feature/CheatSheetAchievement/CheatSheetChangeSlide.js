const CheatSheetChangeSlide = () => (
  <div className="flex overflow-hidden gap-2 justify-between items-center py-4 px-2 rounded-b-2xl">
    <button className="p-4 w-full hover:text-white dark:text-white dark:hover:text-black uppercase hover:bg-black dark:bg-black dark:hover:bg-white rounded-bl-2xl border border-black dark:border-white transition-colors duration-300 ease-in-out">
      prev
    </button>
    <button className="p-4 w-full hover:text-white dark:text-white dark:hover:text-black uppercase hover:bg-black dark:bg-black dark:hover:bg-white rounded-br-2xl border border-black dark:border-white transition-colors duration-300 ease-in-out">
      next
    </button>
  </div>
);

export default CheatSheetChangeSlide;
