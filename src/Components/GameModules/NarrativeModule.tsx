import React, { type ReactElement } from "react";
import { type GameModule } from "../../types/global";
import Image from "next/image";

interface props {
  gameObject: GameModule;
  setChallengeSuccess: (boolean: boolean) => void;
}

const NarrativeModule = (props: props): ReactElement => {
  const { gameObject, setChallengeSuccess } = props;

  return (
    <>
    <div className="self-center w-full py-10 flexCenterDiv shadow-inset1 rounded-m">
        <h1 className="self-center p-5 text-2xl text-center uppercase font-heading flexCenterDiv">
          {gameObject.title}
        </h1>

        <div className="self-center w-10/12 m-4 flexCenterDiv">

          {gameObject.imageURL ? (
            <img
              src={gameObject.imageURL}
              alt="Image for narrative module"
              className="rounded-lg"
            />
          ) : (
            ""
          )}
          
        </div>
        <p className="px-2 mt-2 text-center font-body1">{gameObject.description}</p>

    </div>
    <div className="items-center mx-20 my-5 flexCenterDiv">
    
      <button
        id="themeButton"
        className="self-center w-1/3 mt-20 mb-10 font-heading"
        type="button"
        onClick={() => {
          setChallengeSuccess(true);
        }}
      >
        NEXT
      </button>
</div>
    </>
  );
};

export default NarrativeModule;
