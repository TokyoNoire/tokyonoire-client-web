import React, {type FC, type ReactElement} from "react";
import Menu from "./Menu"

const NavBar: FC = (): ReactElement => {

  return (
    <div className="navbar">
      <Menu/>
    </div>
  );
};

export default NavBar;