import React, { type FC, type ReactElement, useState, useEffect } from "react";
import { Card, CardActions } from "@mui/material";
// import Image from "next/image";
// import heroImage from "public/Hero.jpg";
import { type startModuleInfo } from "../pages";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";


interface Props {
  game: startModuleInfo;
  handleClose: ()=>void;
}

const StartModule = ( props: Props ): ReactElement => {
  const { game, handleClose } = props;

  return (
    // <div className="self-center w-4/5 m-10">
      <Card>
        <div className="self-center">
          <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
            {game.title}
          </h1>
          <p className="self-center pb-3 font-heading">{game.author}</p>
          <div className="grid grid-cols-2 gap-1">
            <AccessTimeFilledIcon fontSize="small" />
            <p className="self-center font-heading">RATING</p>
            <p className="self-center text-xs font-body2">
              {game.estimatedTimeMinutes} minutes
            </p>
            <p className="self-center font-body2">{game.rating}</p>
          </div>
          <div className="self-center w-10/12 m-4">
            <img
              src={game.image}
              alt="Game Home Image"
              className="rounded-lg"
            />
          </div>
          <p className="px-3 mt-2 font-body1">{game.description}</p>
        </div>
        <CardActions>
          <button
            id="themeButton"
            className="mt-20 mb-5 font-heading"
            type="button"
          >
            start
          </button>
          <br/>
          <button
              onClick={handleClose}
              id="themeButton"
              className="my-5 font-heading"
              type="button"
            >
              Choose a Different Case
            </button>
        </CardActions>
      </Card>
    // </div>
  );
};

export default StartModule;
