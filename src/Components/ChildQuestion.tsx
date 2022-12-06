import React, { type ReactElement, useState } from "react";
import TextField from "@mui/material/TextField";

interface props {
  question: string;
  setChallengeSuccess: (boolean: boolean) => void;
  rightAnswer: string;
}

const ChildQuestion = (props: props): ReactElement => {
  const [answer, setAnswer] = useState<string>("");

  const { question, setChallengeSuccess, rightAnswer } = props;

  return (
    <div className="items-center mx-20 my-48">
      <h1 className="mb-5 text-m font-heading">&quot;{question}&quot;</h1>
      <TextField
        id="standard-basic"
        fullWidth
        label="Enter your answer"
        variant="filled"
        aria-label="enter a game id"
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button
        id="themeButton"
        className="mt-5 font-heading"
        type="button"
        onClick={() => {
          if (answer === rightAnswer) {
            setChallengeSuccess(true);
          }
        }}
      >
        is my answer
      </button>
    </div>
  );
};

export default ChildQuestion;
