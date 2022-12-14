import React, { type ReactElement } from "react";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";

interface props {
  deviceType: string;
}

const NavBar = (props: props): ReactElement => {
  const { deviceType } = props;

  return (
    <>
      {deviceType === "Mobile" && (
        <nav className="top-0 fixed w-screen z-20">
          <div
            className="flex justify-center h-20 items-center"
            style={{
              backgroundColor: "rgb(0, 0, 0)",
              boxShadow: "0 10px 10px 10px rgb(0, 0, 0)",
            }}
          >
            <MenuMobile />
          </div>
          {/* <div className="navbar__fade"></div> */}
        </nav>
      )}
      {deviceType === "Desktop" && (
        <nav className="top-0 fixed w-screen z-20">
          <div
            className="flex justify-between h-24 items-center px-7"
            style={{
              backgroundColor: "rgb(0, 0, 0)",
              boxShadow: "0 2px 2px rgb(0, 0, 0)",
            }}
          >
            <MenuDesktop />
          </div>
          <div
            className="h-4 w-full"
            style={{
              background: "linear-gradient(rgb(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            }}
          ></div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
