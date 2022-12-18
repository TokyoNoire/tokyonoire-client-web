import React, { type ReactElement, type MutableRefObject, useState } from "react";
import { type GameModule } from "../../types/global";
import TextField from "@mui/material/TextField";
import HintPopper from "./Helpers/HintPopper";

interface props {
  gameObject: GameModule;
  challengeSuccess: MutableRefObject<boolean>;
}

const QuestionModule = (props: props): ReactElement => {
  const { gameObject, challengeSuccess } = props;
  const [answer, setAnswer] = useState<string>("");

  return (
    <div>
      <div className="self-center w-full py-10 flexCenterDiv shadow-inset1">
        <div className="self-center mb-5 flexCenterDiv">
          <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
            {gameObject.title}
          </h1>
          {/* 
          {gameObject.imageURL === null &&
            <img
              src={gameObject.imageURL}
              alt="Image for question module"
              className="rounded-lg"
            />
          } */}

          {gameObject.imageURL ? (
            <img
              src={gameObject.imageURL}
              alt="Image for question module"
              className="rounded-lg"
            />
          ) : (
            ""
          )}

          <p className="px-6 mt-2 text-center font-body1">{gameObject.description}</p>
        </div>
      </div>
      <div className="items-center mx-20 my-48 flexCenterDiv">
        <h1 className="mb-5 text-m font-heading">
          &quot;{gameObject.question}&quot;
        </h1>
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
          className="self-center w-2/3 mt-20 mb-10 font-heading"
          type="button"
          onClick={() => {
            if (answer.toLowerCase() === gameObject.answer) {
              challengeSuccess.current = true;
            }
          }}
        >
          is my answer
        </button>
      </div>
      <HintPopper hint={gameObject.hint!} />
    </div>
  );
};

export default QuestionModule;
