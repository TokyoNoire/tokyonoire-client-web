import React, { type FC, type ReactElement, useState, useEffect } from "react";
import { Card, CardActions } from "@mui/material";
// import Image from "next/image";
// import heroImage from "public/Hero.jpg";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

type startModuleInfo = {
  _id: string;
  title: string;
  description?: string | null;
  rating?: string | null;
  author?: string | null;
  image: string;
  estimatedTimeMinutes?: number | null;
  startLocationCoordinates?: Array<number>;
};

const testObject = {
  _id: "21312",
  title: "testtestmysteries",
  description:
    "Akika Mori is the hidden daughter of the late Taikichiro Mori, who was once the richest person on earth. She was being surveilled at all time, her family wanting her to stay hidden from the public and to not be associated with her family. Her dream was to become an actress, despite knowing that her family would never allow it. The worried Mori family requested your services to find their daughter.",
  author: "Hello",
  rating: "G",
  image:
    "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  estimatedTimeMinutes: 100,
  startLocationCoordinate: [1, 2],
};

const StartModule: FC = (): ReactElement => {
  const [game, setGame] = useState<startModuleInfo>(testObject);

  // useEffect(() => {
  //   return setGame(testObject);
  // }, []);

  return (
    <div className="self-center w-4/5 m-10">
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
              {" "}
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
        </CardActions>
      </Card>
    </div>
  );
};

export default StartModule;
