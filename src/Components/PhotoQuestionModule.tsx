import React, { type FC, type ReactElement } from "react";
import { Card } from "@mui/material";
// import Image from "next/image";
import ChildQuestion from "./ChildQuestion";
import { GameModule } from "../pages/game";

interface props {
  gameObject: GameModule;
}

const PhotoQuestionModule = (props: props): ReactElement => {
  const { gameObject } = props;

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
                  alt="Tokyo Noire Hero"
                  className="rounded-lg"
                />
              </div>
              <p className="px-6 mt-2 font-body1">{gameObject.description}</p>
            </div>
          </Card>
        </div>
        <ChildQuestion question={gameObject.question} />
      </div>
    </div>
  );
};

export default PhotoQuestionModule;
