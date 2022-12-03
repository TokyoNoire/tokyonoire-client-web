import React, { type FC, type ReactElement } from "react";
import Menu from "./Menu"

const NavBar: FC = (): ReactElement => {

  return (
    <div className="navbar">
      <div className="navbar__main">
        <Menu />
      </div>
      <div className="navbar__fade"></div>
    </div>
  );
};

export default NavBar;