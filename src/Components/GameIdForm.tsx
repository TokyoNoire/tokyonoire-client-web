import React, { type FC, type ReactElement, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
interface prop {
  setGameId: (string: string) => void;
  gameId: string | null;
}
const GameIdForm = (prop: prop): ReactElement => {
  const { setGameId, gameId } = prop;

  //const [game, setGame] = useState<startModuleInfo>(testObject);

  const getGameById = async () => {
    await axios
      .get(`/?_id=${gameId}`)
      .then((response) => console.log(response.data));
  };
  console.log(gameId);

  return (
    <div className="items-center mx-8 my-48">
      <h1 className="mb-5 text-m font-heading">
        &quot;Hello Detective, are you ready to close a case?&quot;
      </h1>
      <TextField
        id="gameId"
        label="Enter a Case ID"
        variant="filled"
        aria-label="enter a game id"
        onChange={(e) => setGameId(e.target.value)}
      />

      <button id="themeButton" className="mt-5 font-heading" type="button">
        start
      </button>
    </div>
  );
};

export default GameIdForm;
