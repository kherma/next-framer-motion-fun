import BtnEmailClipboard from "../buttons/BtnEmailClipboard";

const Footer = () => (
  <footer className="flex flex-col gap-4 w-full md:flex-row md:gap-8">
    <BtnEmailClipboard />
    <div className="flex justify-center items-center w-full h-20 sm:h-28 sm:text-2xl paper">
      <p className="font-bold uppercase">Kamil Herma &copy; 2022</p>
    </div>
  </footer>
);

export default Footer;
