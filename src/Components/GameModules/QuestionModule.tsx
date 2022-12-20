import React, { type ReactElement, useState } from "react";
import { type GameModule } from "../../types/global";
import TextField from "@mui/material/TextField";
import HintPopper from "./Helpers/HintPopper";
import FadeDiv from "../Helpers/FadeDiv";

interface props {
  gameObject: GameModule;
  setChallengeSuccess: (boolean: boolean) => void;
}

const QuestionModule = (props: props): ReactElement => {
  const { gameObject, setChallengeSuccess } = props;
  const [answer, setAnswer] = useState<string>("");

  return (
    <FadeDiv>

      <section className="w-full flexCenterDiv">
        <h1 className="mb-12 text-4xl text-center uppercase font-heading">
          {gameObject.title}
        </h1>

        {gameObject.imageURL && (
          <img
            src={gameObject.imageURL}
            alt="Image for narrative module"
            className="w-full mb-8"
          />
        )}

        {gameObject.description &&
          <p className="px-5 font-body1 text-lg">
            {gameObject.description}
          </p>
        }
      </section>

      <section className="px-4 flexCenterDiv">
        <h1 className="mt-12 mb-6 text-xl font-bold font-body2">
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
          className="self-center w-2/3 mt-16 mb-20 font-heading"
          type="button"
          onClick={() => {
            if (answer.toLowerCase() === gameObject.answer?.toLowerCase()) {
              setChallengeSuccess(true);
            }
          }}
        >
          is my answer
        </button>

        {gameObject.hint &&
          <HintPopper hint={gameObject.hint!} />
        }
      </section>

    </FadeDiv>
  );
};

export default QuestionModule;
