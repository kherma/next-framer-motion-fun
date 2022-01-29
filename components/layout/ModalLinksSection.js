import BtnExternalLink from "../buttons/BtnExternalLink";
import { config } from "../../config/config";
import { v4 as uuidv4 } from "uuid";

const ModalLinksSection = ({ title, innerData, variant }) => {
  const { linksData } = config;
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4 w-full bg-white rounded-xl shadow-md md:gap-8 md:p-8 xl:flex-row xl:bg-transparent xl:rounded-none xl:shadow-none">
      <h2 className="shrink-0 text-2xl font-black text-slate-800 uppercase sm:text-5xl">
        {title}
      </h2>
      <div className="flex gap-4 justify-between items-center w-full xl:gap-8">
        {innerData.map((linkName) => (
          <BtnExternalLink
            key={uuidv4()}
            link={linksData[linkName].link}
            Icon={linksData[linkName].Icon}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
};

export default ModalLinksSection;
