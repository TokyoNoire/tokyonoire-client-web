import React, { type ReactElement } from "react";
import { Card, CardActions } from "@mui/material";
import { useRouter } from "next/router";
import { type startModuleInfo } from "../pages";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

interface Props {
  game: startModuleInfo;
  handleClose: () => void;
  gameId: string;
}

const StartModule = (props: Props): ReactElement => {
  const { game, handleClose, gameId } = props;
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push({
      pathname: "/game/[gameId]",
      query: { gameId: gameId },
    });
  };

  return (
    <Card className="overflow-auto block">
      <div className="self-center">
        <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
          {game.titleOfGame}
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
          <img src={game.image} alt="Game Home Image" className="rounded-lg" />
        </div>
        <p className="px-3 mt-2 font-body1">{game.description}</p>
      </div>

      <CardActions>
        <div className="grid grid-cols-2">
          <button
            onClick={handleClick}
            id="themeButton"
            className="mt-20 mb-5 font-heading"
            type="button"
          >
            start
          </button>{" "}
          <button
            onClick={handleClose}
            id="themeButton"
            className="mt-20 mb-5 font-heading"
            type="button"
          >
            Choose another
          </button>
        </div>
      </CardActions>
    </Card>
  );
};

export default StartModule;
