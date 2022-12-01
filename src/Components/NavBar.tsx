import React, {type FC, type ReactElement} from "react";
import logo from '../../public/Logo_DarkTheme.svg'

const NavBar: FC = (): ReactElement => {
  return (
    <div>
      <img src={logo} alt="logo menu button"/>
      <h1>NavBar</h1>
    </div>
  );
};

export default NavBar;