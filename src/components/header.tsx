import React, { useState } from "react";
import { Link } from "gatsby";
import Menu from "./menu";

const Header: React.FC<HeaderProps> = ({
  logoText,
  mainMenu,
  menuMoreText,
  numMenuItems,
}) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false);
  const [subMenuVisible, setSubMenuVisible] = useState<boolean>(false);

  const onToggleMobileMenu = () => setMobileMenuVisible(!mobileMenuVisible);
  const onToggleSubMenu = () => setSubMenuVisible(!subMenuVisible);

  return (
    <>
      <header className="flex justify-between items-center relative p-5 bg-slate-900">
        <div className="flex items-center justify-between my-1 mx-auto w-[900px] max-w-[900px] md:px-5">
          <Link to="/" className="no-underline">
            <div className="flex items-center font-bold font-mono text-2xl">
              <>
                <span className="mr-1">{">"}</span>
                <span>{logoText}</span>
                <span className="inline-block w-2.5 h-6 bg-[#bf5700] ml-1 rounded-[1px] animate-cursor" />
              </>
            </div>
          </Link>
          <span className="flex relative">
            <Menu
              mainMenu={mainMenu}
              mainMenuItems={numMenuItems}
              menuMoreText={menuMoreText}
              isMobileMenuVis={mobileMenuVisible}
              isSubMenuVis={subMenuVisible}
              onToggleMobileMenu={onToggleMobileMenu}
              onToggleSubMenu={onToggleSubMenu}
            />
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
