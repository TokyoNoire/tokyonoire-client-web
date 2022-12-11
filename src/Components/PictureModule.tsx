import React, { type ReactElement } from "react";
import Image from "next/image";
import { type GameModule } from "../pages/game/[gameId]";

interface props {
  gameObject: GameModule;
}

const PictureModule = (props: props): ReactElement => {
  const { gameObject } = props;

  return (
    <div className="self-center w-4/5 m-10 flexCenterDiv bg-darkGrey">

      <div className="self-center flexCenterDiv">
        <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
          {gameObject.title}
        </h1>
        <div className="self-center w-10/12 m-4 flexCenterDiv">
          <Image
            src={gameObject.image}
            alt="Image for picture module"
            className="rounded-lg"
          ></Image>
          {/* <img
            src={gameObject.image}
            alt="Image for picture module"
            className="rounded-lg"
          /> */}
        </div>
        <p className="px-6 mt-2 font-body1">{gameObject.description}</p>
      </div>

      <button
        id="themeButton"
        className="px-6 mt-20 mb-5 font-heading"
        type="button"
      >
        start
      </button>
    </div>
  );
};

export default PictureModule;