import BtnHomeLink from "../buttons/BtnHomeLink";
import BtnInfo from "../buttons/BtnInfo";
import PagePagination from "./PagePagination";

const Header = ({ handleOpen }) => (
  <header className="w-full h-20 sm:h-24 lg:h-28">
    <div className="flex fixed top-0 left-0 z-20 gap-4 p-4 w-full bg-white rounded-b-xl shadow-md sm:p-8 lg:gap-8 xl:bg-slate-600">
      <nav className="flex gap-4 w-full lg:gap-8">
        <BtnHomeLink />
        <PagePagination />
      </nav>
      <BtnInfo handleOpen={handleOpen} />
    </div>
  </header>
);

export default Header;
