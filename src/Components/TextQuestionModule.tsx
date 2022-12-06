import React, { type FC, type ReactElement } from "react";
import { Card } from "@mui/material";
import ChildQuestion from "./ChildQuestion";
import { GameModule } from "../pages/game/[gameId]";

interface props {
  gameObject: GameModule;
  challengeSuccess: boolean;
}

const TextQuestionModule = (props: props): ReactElement => {
  const { gameObject, challengeSuccess } = props;

  return (
    <div>
      <div className="self-center w-4/5 m-10">
        <Card>
          <div className="self-center mb-5">
            <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
              {gameObject.title}
            </h1>

            <p className="px-6 mt-2 font-body1">{gameObject.description}</p>
          </div>
        </Card>
      </div>
      <ChildQuestion
        question={gameObject.question}
        challengeSuccess={challengeSuccess}
        rightAnswer={gameObject.answer}
      />
    </div>
  );
};

export default TextQuestionModule;
