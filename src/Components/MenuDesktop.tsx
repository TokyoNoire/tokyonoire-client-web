import React, { type FC, type ReactElement, useState } from "react";
import Logo from '../../public/Logo_DarkTheme.svg';
import Link from "next/link";

type menuItem = {
  title: string
  url: string
}

const menuItems: Array<menuItem> = [
  {
    title: 'Explore',
    url: '/explore',
  },
  {
    title: 'How To Play',
    url: '/how-to-play',
  },
  {
    title: 'Account',
    url: '/account',
  }
]

const MenuDesktop: FC = (): ReactElement => {

  return (
    <>
      <Logo
        alt="logo menu button"
        className="logo"
      />
      <ul className="flex gap-12">
        {menuItems.map((menuItem, index) => (
          <li key={index} className="menu-item text-xl">
            <Link href={menuItem.url}>
              {menuItem.title}
            </Link>
          </li>
        ))}
      </ul>

    </>
  )
}

export default MenuDesktop;