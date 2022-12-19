import React, {
  type ReactElement,
  type MutableRefObject,
  useRef,
  useState,
  useEffect,
  useCallback,
  useContext
} from "react";
import Compass from "./Helpers/Compass";
import Distance from "./Helpers/Distance";
import FadeDiv from "../Helpers/FadeDiv";
import AppContext from "../../AppContext";

interface props {
  setChallengeSuccess: (boolean: boolean) => void;
  locationCoordinates: number[] | null;
}

const NavigationModule = (props: props): ReactElement => {
  const { setChallengeSuccess, locationCoordinates } = props;
  // const { orientation, requestAccessAsync } = Gyroscope();
  // requestAccessAsync()

  const value = useContext(AppContext)
  const { currentCoords, setCurrentCoords } = value;

  // const [currentCoords, setCurrentCoords] = useState<number[] | null>(null);
  // const coords = useRef<number[] | null>(null);
  const [targetCoords] = useState<number[]>([
    locationCoordinates![1] as number,
    locationCoordinates![0] as number,
  ]);

  return (
    <>
      {/* {currentCoords && targetCoords && ( */}
      {/* <FadeDiv> */}
      <section>
        <Distance
          currentCoords={currentCoords}
          targetCoords={targetCoords}
          setChallengeSuccess={setChallengeSuccess}
        />
        {/* {orientation && ( */}
        <Compass
          // bearingAngle={bearingAngle}
          currentCoords={currentCoords}
          targetCoords={targetCoords}
        // orientation={orientation}
        />
        {/* )} */}
      </section>
      {/* </FadeDiv> */}
      {/* )} */}
    </>
  );
};

export default NavigationModule;
