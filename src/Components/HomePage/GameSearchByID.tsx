import React, { type ReactElement, type MutableRefObject } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { saveGameInfo } from "../../types/global";

interface prop {
  setGame: ({ }: saveGameInfo) => void;
  handleOpen: () => void;
  game: saveGameInfo | null;
  gameId: MutableRefObject<string | null>;
}
const GameSearchByID = (prop: prop): ReactElement => {
  const { gameId, setGame, handleOpen } = prop;


  const getGameById = async () => {
    await axios
      .get(
        `https://tokyo-noire-server-development.herokuapp.com/${gameId}`
      )
      .then((response) => setGame(response.data[0]));
  };


  return (
    <div className="items-center mx-4 mt-16 mb-32 flexCenterDiv">
      <h1 className="mb-12 text-center text-xl font-body2">
        {`Looking for something specific?`}
      </h1>
      <div className="w-full flex justify-self-auto items-stretch">

        <TextField
          id="gameId"
          className="w-4/5 flex-grow"
          label="Enter a Case ID"
          variant="filled"
          aria-label="enter a game id"
          onChange={(e) => gameId.current = e.target.value}
        />

        <button
          id="themeButton"
          className="w-1/5 font-heading h-100"
          type="button"
          onClick={() => {
            getGameById();
            setTimeout(handleOpen, 2000);
          }}
        >
          GO
        </button>
      </div>
    </div>
  );
};

export default GameSearchByID;
