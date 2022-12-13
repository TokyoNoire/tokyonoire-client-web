import React, { type FC, type ReactElement } from "react";
import Link from "next/link";
import TokyoNoireName from "../../../public/Title_DarkTheme.svg";
import HintPopper from "../GameModules/Helpers/HintPopper";

interface props {
  show: boolean
}

const HomeDesktop = (props: props): ReactElement => {

  return (
    <main className="relative w-screen h-screen flexCenterDiv place-items-center">
      <TokyoNoireName
        alt="Tokyo Noire Name"
        style={{ maxWidth: "80vw", filter: "drop-shadow(0 0 0.5rem grey)", animation: "pulsate 1s ease-in-out infinite alternate" }}
      />
      <section className="absolute bottom-1/4">
        <Link href="/editor">
          <button
            id="themeButton"
            className="font-heading"
            style={{ transform: "scale(1.2)" }}
          >Go To Editor</button>
        </Link>
      </section>
    </main>
  );
};

export default HomeDesktop;