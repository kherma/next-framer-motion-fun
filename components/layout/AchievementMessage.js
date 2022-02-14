import Line from "../common/Line";

const AchievementMessage = ({ achievementDescription }) => (
  <div className="flex flex-col gap-8 justify-center items-center py-8 px-4 text-center sm:p-8 md:py-12 md:px-8 xl:col-span-2 paper">
    <h3 className="text-4xl font-black text-slate-800 uppercase md:text-5xl xl:text-5xl">
      achievement
    </h3>
    <Line />
    <p className="w-full text-xl text-slate-600 uppercase md:text-3xl">
      {achievementDescription}
    </p>
  </div>
);

export default AchievementMessage;
