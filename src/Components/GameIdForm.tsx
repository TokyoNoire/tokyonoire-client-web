import React, { type FC, type ReactElement } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const GameIdForm: FC = (): ReactElement => {
  return (
    <div className="items-center my-20 mx-80">

      <h1 className="mb-5 font-heading">"Hello Detective, are you ready to close a case?"</h1>
      <TextField
        fullWidth
        id="standard-basic"
        label="Enter a Case ID"
        variant="standard"
        aria-label="enter a game id"
      />

      <button id="themeButton" className="mt-5 font-body2" type="button">
        start the case
      </button>
    </div>
  );
};

export default GameIdForm;
