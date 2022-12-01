import React, {type FC, type ReactElement} from "react";
import logo from '../../public/Logo_DarkTheme.svg';

const NavBar: FC = (): ReactElement => {

  return (
    <div className="navbar">
      <img src={logo.src} alt="logo menu button" className="logo"/>
    </div>
  );
};

export default NavBar;