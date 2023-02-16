import HorizontalLogo from "./Icons/horizontalLogo";
import MenuIcon from "./Icons/menuIcon";

export default function Header() {
  return (
    <div className="text-white h-24 flex justify-between items-center px-4 lg:px-12 w-full">
      <HorizontalLogo />
      <div className="lg:hidden">
        <MenuIcon />
      </div>
      <div className="hidden lg:visible">test</div>
    </div>
  );
}
