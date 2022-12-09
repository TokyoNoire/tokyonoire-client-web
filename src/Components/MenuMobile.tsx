import React, { type FC, type ReactElement, useState } from "react";
import Logo from '../../public/Logo_DarkTheme.svg';
import Image from "next/image";
import Link from "next/link";

type menuItem = {
  title: string
  url: string
}

const menuItems: Array<menuItem> = [
  {
    title: 'Home',
    url: '/',
  },
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

const MenuMobile: FC = (): ReactElement => {

  const [fadeIn, setFadeIn] = useState<boolean>(false)
  const [isShown, setIsShown] = useState<boolean>(false);

  const handleClick = () => {
    setIsShown(current => !current)
  }

  return (
    <>
      <Logo
        alt="logo menu button"
        className="logo"
        onClick={() => {
          if (!fadeIn) setFadeIn(true)
          if (fadeIn) setFadeIn(false)
        }}
      />
      <ul
        className={fadeIn ? "menu__fade-in menu__scale-up menu" : "menu__fade-out menu"}
        onAnimationStart={() => {
          if (!isShown && fadeIn) setIsShown(true)
        }}
        onAnimationEnd={() => {
          if (!isShown) setIsShown(false)
        }}
      >
        {isShown && (menuItems.map((menuItem, index) => (
          <li key={index} className="menu-item">
            <Link href={menuItem.url}>
              {menuItem.title}
            </Link>
          </li>
        )))}
      </ul>
    </>
  );
};

export default MenuMobile;