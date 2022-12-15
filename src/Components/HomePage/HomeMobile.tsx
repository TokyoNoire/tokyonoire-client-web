import React, { type FC, type ReactElement, useState, useEffect } from "react";
import FadeDiv from "../Helpers/FadeDiv";
import GameSearchByID from "./GameSearchByID";
import GamePreview from "./GamePreview";
import Hero from "./Hero";
import ListOfPublicGames from "./ListOfPublicGames";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Dialog } from "@mui/material";
import TokyoNoireName from "../../../public/Title_DarkTheme.svg";
import { type saveGameInfo } from "../../types/global";

const testArray = [
  {
    _id: "638d8a2f61306a3dc4e94430",
    titleOfGame: "The disappearance of Akika Mori",
    description:
      "Akika Mori is the hidden daughter of the late Taikichiro Mori, who was once the richest person on earth. She was being surveilled at all time, her family wanting her to stay hidden from the public and to not be associated with her family. Her dream was to become an actress, despite knowing that her family would never allow it. The worried Mori family requested your services to find their daughter.",
    author: "Cole Phelps",
    rating: "G",
    startLocation: "roppongi",
    isPrivate: false,
    isPublished: true,
    estimatedTimeMinutes: "20"
  },
  {
    _id: "638d8a2f61306a3dc4e94430",
    titleOfGame: "The disappearance of Akika Mori",
    description:
      "Akika Mori is the hidden daughter of the late Taikichiro Mori, who was once the richest person on earth. She was being surveilled at all time, her family wanting her to stay hidden from the public and to not be associated with her family. Her dream was to become an actress, despite knowing that her family would never allow it. The worried Mori family requested your services to find their daughter.",
    author: "Cole Phelps",
    rating: "G",
    startLocation: "roppongi",
    isPrivate: false,
    isPublished: true,
    estimatedTimeMinutes: "20"
  },
];

interface props {
  show: boolean;
}

const HomeMobile = (props: props): ReactElement => {
  const { show } = props;

  const [gameId, setGameId] = useState<string>("");
  const [game, setGame] = useState<saveGameInfo | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [publicGames, setPublicGames] = useState<saveGameInfo[] | null>(
    testArray
  );

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
    <>
      <div className="relative h-screen mx-5 flexCenterDiv place-items-center ">
        <TokyoNoireName alt="Tokyo Noire Name" style={{ maxWidth: "80vw" }} />
        <div className="absolute bottom-8">
          <KeyboardArrowDownIcon
            style={{ animation: `hover-up-down ease-in-out 3s infinite` }}
            sx={{
              width: "1.5em",
              height: "1.5em",
            }}
          />
        </div>
      </div>
      <Hero />
      <GameSearchByID
        setGameId={setGameId}
        gameId={gameId}
        setGame={setGame}
        game={game}
        handleOpen={handleOpen}
      />

      <div className="w-screen flexCenterDiv">
        <KeyboardArrowDownIcon
          style={{ animation: `hover-up-down ease-in-out 3s infinite` }}
          sx={{
            width: "1.5em",
            height: "1.5em",
          }}
          className="self-center"
        />
      </div>

      <ListOfPublicGames
        publicGames={publicGames!}
        setGameId={setGameId}
        gameId={gameId}
        setGame={setGame}
        game={game}
        handleOpen={handleOpen}
      />
      {game ? (
        <Dialog
          className="object-fit flexCenterDiv"
          open={open}
          onClose={handleClose}
          fullScreen
        >
          <GamePreview game={game!} handleClose={handleClose} gameId={gameId!} />
        </Dialog>
      ) : (
        <></>
      )}
    </>
  );
};

export default HomeMobile;
