import React, {type FC, type ReactElement} from "react";
import logo from '../../public/Logo_DarkTheme.svg'

const NavBar: FC = (): ReactElement => {
  return (
    <div className = "items-center w-16 m-4">
      <img src={logo.src} alt="logo menu button"/>
      <h1>NavBar</h1>
    </div>
  );
};

export default NavBar;