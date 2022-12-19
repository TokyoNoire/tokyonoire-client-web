import React, { type ReactElement } from "react";
import { type GameModule } from "../../types/global";
import FadeDiv from "../Helpers/FadeDiv";
import HintPopper from "./Helpers/HintPopper";
import NavigationModule from "./NavigationModule";

interface props {
  gameObject: GameModule;
  devicePermission: boolean;
  setChallengeSuccess: (boolean: boolean) => void;
}

const LocationModule = (props: props): ReactElement => {
  const { gameObject, setChallengeSuccess } = props;

  return (
    <FadeDiv>
      <div className="w-full flexCenterDiv">

        <h1 className="mb-12 text-3xl text-center uppercase font-heading">
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
          <p className="px-5 font-body1">
            {gameObject.description}
          </p>
        }
      </div>

      {/* {devicePermission && ( */}
      <NavigationModule
        locationCoordinates={gameObject?.locationCoordinates
          ? gameObject!.locationCoordinates
          : [0, 0]}
        setChallengeSuccess={setChallengeSuccess}
        gameObject={gameObject}
      />
      {/* )} */}

      {/* {gameObject.hint &&
        <HintPopper hint={gameObject.hint!} />
      } */}

    </FadeDiv>
  );
};

export default LocationModule;