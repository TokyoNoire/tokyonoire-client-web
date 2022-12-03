import React, {type FC, type ReactElement} from "react";
import logo from '../../public/Logo_DarkTheme.svg';
import Image from "next/image";
import Menu from "./Menu"

const NavBar: FC = (): ReactElement => {

  return (
    <Link href="/">
    <div className="navbar">
      <Menu/>
    </div>
    </Link>
  );
};

export default NavBar;