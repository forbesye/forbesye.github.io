import React from "react";
import { Link } from "gatsby";
import Icon from "./icon";

const menuIcon = `M4 34H40V30H4V34ZM4 24H40V20H4V24ZM4 10V14H40V10H4Z`;

const MainMenu: React.FC<MainMenuProps> = ({ mainMenu, isMobileMenu }) => {
  return (
    <>
      {mainMenu.map((menuItem, idx) => (
        <li
          key={idx}
          className={isMobileMenu ? "m-0 whitespace-nowrap" : "my-0 mx-3"}
        >
          <Link
            to={menuItem.path}
            className={
              isMobileMenu
                ? "no-underline block py-2.5 px-4 font-medium"
                : "no-underline font-medium"
            }
          >
            {menuItem.title}
          </Link>
        </li>
      ))}
    </>
  );
};

// const SubMenu: React.FC<SubMenuProps> = ({
//   mainMenu,
//   mainMenuItems,
//   onToggleSubMenu,
// }) => {
//   const menu = mainMenu.slice(0);
//   menu.splice(0, mainMenuItems);

//   return (
//     <>
//       {menu.map((menuItem, idx) => (
//         <li key={idx} className="text-left m-0 whitespace-nowrap">
//           <Link className="p-3" to={menuItem.path}>
//             {menuItem.title}
//           </Link>
//         </li>
//       ))}
//       <button
//         className="fixed inset-0 w-screen h-screen cursor-default"
//         onClick={onToggleSubMenu}
//       />
//     </>
//   );
// };

const Menu: React.FC<MenuProps> = ({
  mainMenu,
  mainMenuItems,
  menuMoreText,
  isMobileMenuVis,
  isSubMenuVis,
  onToggleMobileMenu,
  onToggleSubMenu,
}) => {
  const isSubMenu = !(mainMenuItems >= mainMenu.length) && mainMenuItems > 0;

  return (
    <>
      <div className="flex md:hidden">
        <>
          {isMobileMenuVis ? (
            <>
              <ul className="absolute top-0 right-0 m-0 p-0 flex-col items-start bg-slate-900 text-left list-none rounded overflow-hidden z-50">
                <MainMenu mainMenu={mainMenu} isMobileMenu />
              </ul>
              <button
                className="fixed inset-0 z-10 bg-black opacity-20 w-screen h-screen cursor-default"
                onClick={onToggleMobileMenu}
              />
            </>
          ) : null}
          <button
            className="p-0 leading-[0] bg-none text-inherit border-0"
            onClick={onToggleMobileMenu}
            type="button"
            aria-label="Menu"
          >
            <Icon size={24} d={menuIcon} className="cursor-pointer" />
          </button>
        </>
      </div>
      <div className="hidden md:block">
        <ul className="flex flex-[0 0 auto] items-center justify-center max-w-full my-0 mx-auto py-0 list-none">
          <MainMenu mainMenu={mainMenu} isMobileMenu={false} />
          {/* {isSubMenu ? (
            <>
              <button
                className="my-0 mx-3 p-0 cursor-pointer"
                onClick={onToggleSubMenu}
                type="button"
                aria-label="Menu"
              >
                {menuMoreText || "Menu"}{" "}
                <span className="inline-block ml-1 rotate-90 ">{">"}</span>
              </button>
              {isSubMenuVis ? (
                <ul className="absolute max-w-xs shadow-lg m-0 p-1 list-none top-8 right-16 overflow-hidden z-40">
                  <SubMenu
                    mainMenu={mainMenu}
                    mainMenuItems={mainMenuItems}
                    onToggleSubMenu={onToggleSubMenu}
                  />
                </ul>
              ) : null}
            </>
          ) : null} */}
        </ul>
      </div>
    </>
  );
};

export default Menu;
