import React, {type FC, type ReactElement} from "react";
import logo from '../../public/Logo_DarkTheme.svg';
import Image from "next/image";

const NavBar: FC = (): ReactElement => {

  return (
    <div className="navbar">
      <Image
      src={logo}
      alt="logo menu button"
      className="logo"
    />
    </div>
  );
};

export default NavBar;