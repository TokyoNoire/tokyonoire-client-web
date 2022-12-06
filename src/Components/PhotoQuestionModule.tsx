import React, { type FC, type ReactElement } from "react";
import { Card } from "@mui/material";
// import Image from "next/image";
import ChildQuestion from "./ChildQuestion";
import { GameModule } from "../pages/game/[gameId]";

interface props {
  gameObject: GameModule;
  challengeSuccess: boolean;
}

const PhotoQuestionModule = (props: props): ReactElement => {
  const { gameObject, challengeSuccess } = props;

  return (
    <div>
      <div>
        <div className="self-center w-4/5 m-10">
          <Card>
            <div className="self-center mb-5">
              <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">
                {gameObject.title}
              </h1>
              <div className="self-center w-10/12 m-4">
                <img
                  src={gameObject.image}
                  alt="Image for question module"
                  className="rounded-lg"
                />
              </div>
              <p className="px-6 mt-2 font-body1">{gameObject.description}</p>
            </div>
          </Card>
        </div>
        <ChildQuestion
          question={gameObject.question}
          rightAnswer={gameObject.answer}
          challengeSuccess={challengeSuccess}
        />
      </div>
    </div>
  );
};

export default PhotoQuestionModule;
