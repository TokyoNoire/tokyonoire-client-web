import React, {type FC, type ReactElement} from "react";
import logo from '../../public/Logo_DarkTheme.svg';
import Image from "next/image";
import Menu from "./Menu"

const NavBar: FC = (): ReactElement => {

  return (
    <div className="navbar">
      <Menu/>
    </div>
  );
};

export default NavBar;