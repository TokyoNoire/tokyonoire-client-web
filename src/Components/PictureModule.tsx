import React, { type FC, type ReactElement } from "react";
import { Card, CardActions } from "@mui/material";
// import Image from "next/image";
import { GameModule } from "../pages/game";

interface props {
  gameObject: GameModule;
}

const PictureModule = (props:props): ReactElement => {
  const { gameObject } = props;
  
  return (
    <div className="self-center w-4/5 m-10">
      <Card>
        <div className="self-center">
          <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
            {gameObject.title}
          </h1>
          <div className="self-center w-10/12 m-4">
            <img
              src={gameObject.image}
              alt="image"
              className="rounded-lg"
            />
          </div>
          <p className="px-6 mt-2 font-body1">
            {gameObject.description}
          </p>
        </div>
        <CardActions>
          <button
            id="themeButton"
            className="mt-20 mb-5 font-heading"
            type="button"
          >
            start
          </button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PictureModule;
