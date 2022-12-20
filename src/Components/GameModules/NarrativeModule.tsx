import React, { type ReactElement } from "react";
import { type GameModule } from "../../types/global";
import Image from "next/image";
import FadeDiv from "../Helpers/FadeDiv";

interface props {
  gameObject: GameModule;
  setChallengeSuccess: (boolean: boolean) => void;
}

const NarrativeModule = (props: props): ReactElement => {
  const { gameObject, setChallengeSuccess } = props;

  return (
    <FadeDiv>
      <div className="w-full flexCenterDiv">
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

        <button
          id="themeButton"
          className="self-center w-1/3 my-20 font-heading"
          type="button"
          onClick={() => {
            setChallengeSuccess(true);
          }}
        >
          NEXT
        </button>
      </div>
    </FadeDiv>
  );
};

export default NarrativeModule;
