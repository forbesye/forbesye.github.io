import { ImageDataLike } from "gatsby-plugin-image";

type MainMenuLink = {
  title: string;
  path: string;
};

type HeaderProps = {
  logoText: string;
  mainMenu: MainMenuLink[];
  menuMoreText: string;
  numMenuItems: number;
};

type MainMenuProps = {
  mainMenu: MainMenuLink[];
  isMobileMenu: boolean;
};

type SubMenuProps = {
  mainMenu: MainMenuLink[];
  mainMenuItems: number;
  onToggleSubMenu: () => void;
};

type MenuProps = {
  mainMenu: MainMenuLink[];
  mainMenuItems: number;
  menuMoreText: string;
  isMobileMenuVis: boolean;
  isSubMenuVis: boolean;
  onToggleMobileMenu: () => void;
  onToggleSubMenu: () => void;
};

type PostProps = {
  title: string;
  date: string;
  updatedDate?: string;
  coverImage?: ImageDataLike;
  body: string;
  // previousPost: object;
  // nextPost: object;
};

type PreviewProps = {
  key: string;
  title: string;
  date: string;
  coverImage?: ImageDataLike;
  excerpt: string;
  slug: string;
};

type PaginationProps = {
  currentPage: number;
  numPages: number;
};

type IconProps = {
  d: string;
  size: number;
  label?: string;
  className?: string;
};
