import { ImageDataLike } from "gatsby-plugin-image";
import React from "react";

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

type MapProps = {
  children?: React.ReactNode;
  tooltip?: React.ReactNode;
  latitude?: number;
  longitude?: number;
  zoom?: number;
};

type MapMarkerProps = {
  longitude: number;
  latitude: number;
  link: string;
  title: string;
  setHoverText: (text: string) => void;
};

type CodeBlockProps = {
  children: React.ReactNode;
};
