import Logo from "../common/Logo";
import Line from "../common/Line";
import Message from "../common/Message";
import AchievementsBar from "../feature/AchievementsBar";
import AchievementMessage from "../common/AchievementMessage";

const PageDescription = ({ title, message, achievementDescription }) => (
  <div className="py-8 px-4 w-full h-full sm:p-8 md:py-12 md:px-8 xl:p-8 xl:w-1/2 paper">
    <div className="flex flex-col gap-8 justify-center items-center w-full h-full">
      <Logo title={title} />
      <Message message={message} />
      <Line />
      <AchievementsBar />
      <Line />
      <AchievementMessage achievementDescription={achievementDescription} />
    </div>
  </div>
);

export default PageDescription;
