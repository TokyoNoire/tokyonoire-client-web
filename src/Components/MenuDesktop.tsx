import React, { type FC, type ReactElement, useState } from "react";
import Logo from "../../public/Logo_DarkTheme.svg";
import Link from "next/link";

import { useRouter } from "next/router";

type menuItem = {
  title: string;
  url: string;
};

const menuItems: Array<menuItem> = [
  {
    title: "Explore",
    url: "/explore",
  },
  {
    title: "How To Play",
    url: "/how-to-play",
  },
  {
    title: "Profile",
    url: "/profile",
  },
];

const MenuDesktop: FC = (): ReactElement => {
  useRouter();

  return (
    <>
      <Link href="/" className="z-50 w-12">
        <Logo alt="logo menu button" className="logo" />
      </Link>
      <ul className="flex gap-12">
        {menuItems.map((menuItem, index) => (
          <li key={index} className="menu-item text-xl">
            <Link href={menuItem.url}>{menuItem.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuDesktop;
