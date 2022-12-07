import React, { type FC, type ReactElement, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { startModuleInfo } from "../pages";

interface prop {
  setGameId: (string: string) => void;
  setGame: ({}: startModuleInfo) => void;
  handleOpen: () => void;
  game: startModuleInfo | null;
  gameId: string | null;
}
const GameIdForm = (prop: prop): ReactElement => {
  const { setGameId, gameId, setGame, handleOpen, game } = prop;

  //const [game, setGame] = useState<startModuleInfo>(testObject);

  const getGameById = async () => {
    await axios
      .get(
        `https://tokyo-noire-server-development.herokuapp.com/?_id=${gameId}`
      )
      .then((response) => setGame(response.data[0]));
  };
  //setGame

  return (
    <div className="items-center mx-8 my-32">
      <h1 className="mb-5 text-m font-heading">
        &quot;Hello Detective, are you ready to close a case?&quot;
      </h1>
      <TextField
        id="gameId"
        className="w-4/5"
        label="Enter a Case ID"
        variant="filled"
        aria-label="enter a game id"
        onChange={(e) => setGameId(e.target.value)}
      />

      <button
        id="themeButton"
        className="mt-5 font-heading"
        type="button"
        onClick={() => {
          getGameById();
          setTimeout(handleOpen, 2000);
        }}
      >
        start
      </button>
    </div>
  );
};

export default GameIdForm;
