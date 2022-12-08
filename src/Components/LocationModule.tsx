import React, { type FC, type ReactElement, useEffect, useRef, useState } from "react";
import { Card } from "@mui/material";
// import Image from "next/image";
// import heroImage from "public/Hero.jpg";
import { GameModule } from "../pages/game/[gameId]";

interface props {
  gameObject: GameModule;
  setChallengeSuccess: (boolean: boolean) => void;
}

const LocationModule = (props: props): ReactElement => {
  const { gameObject, setChallengeSuccess } = props;

  return (
    <>
      <div className="self-center w-full flexCenterDiv bg-darkGrey">
          <div className="self-center mb-5 flexCenterDiv">
            <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
              {gameObject.title}
            </h1>
            <div className="self-center w-10/12 m-4 flexCenterDiv">
              <img
                src={gameObject.image}
                alt="Tokyo Noire Hero"
                className="rounded-lg"
              />
            </div>
            <p className="px-6 mt-2 text-justify font-body1">
              {gameObject.description}
            </p>
          </div>
      </div>
    </>
  );
};

export default LocationModule;