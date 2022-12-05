import React, { type FC, type ReactElement, useState } from "react";
import TextField from "@mui/material/TextField";

const ChildQuestion: FC = (): ReactElement => {
  const [answer, setAnswer] = useState<string>("");

  return (
    <div className="items-center mx-20 my-48">
      <h1 className="mb-5 text-m font-heading">&quot;Head, shoulders, knees or toes?&quot;</h1>
      <TextField
        id="standard-basic"
        fullWidth
        label="Enter your answer"
        variant="filled"
        aria-label="enter a game id"
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button id="themeButton" className="mt-5 font-heading" type="button">
        is my answer
      </button>
    </div>
  );
};

export default ChildQuestion;
