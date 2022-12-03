import React, {type FC, type ReactElement} from "react";
import logo from '../../public/Logo_DarkTheme.svg';
import Image from "next/image";
import Link from "next/link";

const NavBar: FC = (): ReactElement => {

  return (
    <Link href="/">
    <div className="navbar">
      <Image
      src={logo}
      alt="logo menu button"
      className="logo"
    />
    </div>
    </Link>
  );
};

export default NavBar;