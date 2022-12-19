import AppContext from "../../AppContext";
import React, { type ReactElement, type MutableRefObject, useContext } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { saveGameInfo } from "../../types/global";


interface prop {
  //setGameId: (string: string) => void;
  setGame: ({ }: saveGameInfo) => void;
  handleOpen: () => void;
  game: saveGameInfo | null;
  gameId: MutableRefObject<string | null>;
}
const GameSearchByID = (prop: prop): ReactElement => {
  const {gameId, setGame, handleOpen} = prop;
  const value = useContext(AppContext)
  const {userId, sessionTable, setSessionTable} = value


  const getGameById = async () => {
    await axios
      .get(
        `https://tokyo-noire-server-development.herokuapp.com/${gameId}`
      )
      .then((response) => setGame(response.data[0]));
  };



  return (
    <div className="items-center mx-8 my-24 flexCenterDiv">
      <h1 className="mb-5 text-center text-m font-heading">
        &quot;Hello Detective, are you requested for a specific case?&quot;
      </h1>
      <TextField
        id="gameId"
        className="w-4/5"
        label="Enter a Case ID"
        variant="filled"
        aria-label="enter a game id"
        onChange={(e) => gameId.current = e.target.value}
      />

      <button
        id="themeButton"
        className="self-center w-1/3 mt-20 mb-10 font-heading"
        type="button"
        onClick={() => {
          getGameById()
          setTimeout(handleOpen, 2000);
        }}
      >
        start
      </button>
    </div>
  );
};

export default GameSearchByID;
