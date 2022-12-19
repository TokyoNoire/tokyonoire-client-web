import React, {
  type ReactElement,
  useState,
  useContext
} from "react";
import Compass from "./Helpers/Compass";
import Distance from "./Helpers/Distance";
import FadeDiv from "../Helpers/FadeDiv";
import AppContext from "../../AppContext";
import { GameModule } from "../../types/global";
import HintPopper from "./Helpers/HintPopper";

interface props {
  setChallengeSuccess: (boolean: boolean) => void;
  locationCoordinates: number[] | null;
  gameObject: GameModule;
}

const NavigationModule = (props: props): ReactElement => {
  const { setChallengeSuccess, locationCoordinates, gameObject } = props;

  const value = useContext(AppContext)
  const { currentCoords } = value;

  const [targetCoords] = useState<number[]>([
    locationCoordinates![1] as number,
    locationCoordinates![0] as number,
  ]);

  return (
    <>
      {currentCoords && targetCoords && (
        <FadeDiv>
          <section>
            <Distance
              currentCoords={currentCoords}
              targetCoords={targetCoords}
              setChallengeSuccess={setChallengeSuccess}
            />
            <Compass
              currentCoords={currentCoords}
              targetCoords={targetCoords}
            />
          </section>
        </FadeDiv>
      )}
<<<<<<< HEAD
      {/* {gameObject!.hint?  <HintPopper hint={gameObject.hint!} /> : <></>} */}
=======
      {gameObject!.hint ? <HintPopper hint={gameObject.hint!} /> : <></>}
>>>>>>> 76842942e29876c33331eca045f5ed83d637365c
    </>
  );
};

export default NavigationModule;
