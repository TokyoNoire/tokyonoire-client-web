import React, { type FC, type ReactElement, useState } from "react";
import logo from '../../public/Logo_DarkTheme.svg';
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


const Menu: FC = (): ReactElement => {

  const [isShown, setIsShown] = useState<boolean>(false);

  const handleClick = () => {
    setIsShown(current => !current)
  }

  return (
    <>
      <Image
        src={logo}
        alt="logo menu button"
        className="logo"
        onClick={handleClick}
      />
      <ul className="menu">

        {isShown &&  (menuItems.map((menuItem, index) => (
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

export default Menu;