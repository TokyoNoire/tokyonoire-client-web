import React, { type ReactElement } from "react";
import { type GameModule } from "../pages/game/[gameId]";
import Image from "next/image";

interface props {
  gameObject: GameModule;
  setChallengeSuccess: (boolean: boolean) => void;
}

const NarrativeModule = (props: props): ReactElement => {
  const { gameObject, setChallengeSuccess } = props;

  return (
    <div className="self-center w-full flexCenterDiv bg-darkGrey">
      <div className="self-center flexCenterDiv">
        <h1 className="self-center p-5 text-2xl text-center uppercase font-heading flexCenterDiv">
          {gameObject.title}
        </h1>

        <div className="self-center w-10/12 m-4 flexCenterDiv">
          {gameObject.image === null &&
            <Image src={gameObject.image} alt="Image for question module" className="rounded-lg"></Image>
            // <img
            //       src={gameObject.image}
            //       alt="Image for question module"
            //       className="rounded-lg"
            //     />
                }

        </div>
        <p className="px-6 mt-2 font-body1">{gameObject.description}</p>
      </div>

      <button
        id="themeButton"
        className="mt-20 mb-5 font-heading"
        type="button"
        onClick={() => {
          setChallengeSuccess(true);
        }}
      >
        NEXT
      </button>

    </div>
  );
};

export default NarrativeModule;
