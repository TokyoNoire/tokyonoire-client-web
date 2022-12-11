import React, { type FC, type ReactElement, useState, useEffect } from "react";
import FadeDiv from "../Helpers/FadeDiv";
import GameIdForm from "./GameIdForm";
import GamePreview from "./GamePreview";
import Hero from "./Hero";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Dialog } from "@mui/material";
import TokyoNoireName from "../../../public/Title_DarkTheme.svg";

export type startModuleInfo = {
  _id: string;
  titleOfGame: string;
  description?: string | null;
  rating?: string | null;
  author?: string | null;
  image?: string;
  estimatedTimeMinutes?: number | null;
  startLocationCoordinates?: Array<number>;
};

interface props {
  show: boolean
}

const HomeMobile = (props: props): ReactElement => {
  const { show } = props;

  const [gameId, setGameId] = useState<string>("");
  const [game, setGame] = useState<startModuleInfo | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (game !== null) {
      handleOpen();
    }
  }, [game]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    // <FadeDiv show={show}>
    <>
      <div className="relative h-screen flexCenterDiv place-items-center mx-5 ">
        <TokyoNoireName alt="Tokyo Noire Name" style={{ maxWidth: "80vw" }} />
        <div className="absolute bottom-8">
          <KeyboardArrowDownIcon
            style={{ animation: `hover-up-down ease-in-out 3s infinite` }}
            sx={{
              width: "1.5em",
              height: "1.5em",
            }} />
        </div>
      </div>
      <Hero />
      <GameIdForm
        setGameId={setGameId}
        gameId={gameId}
        setGame={setGame}
        game={game}
        handleOpen={handleOpen}
      />
      {game &&
        <Dialog className="object-fit flexCenterDiv" open={open} onClose={handleClose} fullScreen>
          <GamePreview game={game} handleClose={handleClose} gameId={gameId} />
        </Dialog>
      }
      {/* </FadeDiv> */}
    </>
  );
};

export default HomeMobile;