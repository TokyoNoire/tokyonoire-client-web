import React, { type FC, type ReactElement, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";

const GameIdForm: FC = (): ReactElement => {
  const [gameId, setGameId] = useState<string>("");

  const getGameById = async () => {
    await axios
      .get(`http://localhost:2000/?uId=${gameId}`)
      .then((response) => console.log(response.data));
  };

  return (
    <div className="items-center mx-8 my-48">
      <h1 className="mb-5 text-m font-heading">
        &quot;Hello Detective, are you ready to close a case?&quot;
      </h1>
      <TextField
        id="standard-basic"
        label="Enter a Case ID"
        variant="standard"
        aria-label="enter a game id"
        onChange={(e) => {
          setGameId(e.target.value);
          console.log(gameId);
        }}
      />

      <button
        id="themeButton"
        className="mt-5 font-body2"
        type="button"
        onClick={getGameById}
      >
        start
      </button>
    </div>
  );
};

export default GameIdForm;
