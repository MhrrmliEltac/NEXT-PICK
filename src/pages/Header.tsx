import Buttons from "../components/header/Buttons";
import Logo from "../components/header/Logo";
import SearchInput from "../components/header/SearchInput";

const Header = () => {
  return (
    <header className="mt-[32px] header rounded-[8px] custom-shadow custom-blur py-[22px] flex justify-between items-center max-w-[1240px] w-[90%] mx-auto z-10 relative">
      <nav className="fixed flex justify-between items-center mx-auto z-10 py-[22px] w-full">
        <Logo />
        <SearchInput />
        <Buttons />
      </nav>
    </header>
  );
};

export default Header;
