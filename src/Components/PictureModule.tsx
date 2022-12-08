import React, { type FC, type ReactElement } from "react";
import { Card, CardActions } from "@mui/material";
// import Image from "next/image";
import { GameModule } from "../pages/game/[gameId]";

interface props {
  gameObject: GameModule;
  setChallengeSuccess: (boolean: boolean) => void;
}

const PictureModule = (props: props): ReactElement => {
  const { gameObject, setChallengeSuccess } = props;

  return (
    <div className="self-center w-4/5 m-10 flexCenterDiv bg-darkGrey">

        <div className="self-center flexCenterDiv">
          <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
            {gameObject.title}
          </h1>
          <div className="self-center w-10/12 m-4 flexCenterDiv">
            <img
              src={gameObject.image}
              alt="Image for picture module"
              className="rounded-lg"
            />
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