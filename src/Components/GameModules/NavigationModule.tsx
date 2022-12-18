import React, {
  type ReactElement,
  type MutableRefObject,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import Compass from "./Helpers/Compass";
import Distance from "./Helpers/Distance";
import BearingAngle from "./Helpers/BearingAngle";
import Gyroscope from "./Helpers/Gyroscope";
import FadeDiv from "../Helpers/FadeDiv";
import HintPopper from "./Helpers/HintPopper";

interface props {
  setChallengeSuccess: (boolean: boolean) => void;
  locationCoordinates: number[] | null;
  // setGoToNext: (boolean: boolean) => void
}

const NavigationModule = (props: props): ReactElement => {
  const { setChallengeSuccess, locationCoordinates } = props;
  const { orientation, requestAccessAsync } = Gyroscope();

  const { calcBearingAngle } = BearingAngle();
  const [currentCoords, setCurrentCoords] = useState<number[] | null>(null);
  const coords = useRef<number[] | null>(null);
  const [targetCoords] = useState<number[]>([
    locationCoordinates![1] as number,
    locationCoordinates![0] as number,
  ]);
  const [bearingAngle, setBearingAngle] = useState<number | null>(
    calcBearingAngle(currentCoords as number[], targetCoords)
  );

  const [acquiredPermissions, setAcquiredPermissions] =
    useState<boolean>(false);

  useEffect(() => {
    if (acquiredPermissions) {
      const interval = setInterval(() => {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            setCurrentCoords([
              position.coords.longitude,
              position.coords.latitude,
            ]);
            coords.current = [
              position.coords.longitude,
              position.coords.latitude,
            ];
          });
        } else console.error("geolocation unavailable");
        setBearingAngle(
          calcBearingAngle(coords.current as number[], targetCoords)
        );
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [acquiredPermissions, calcBearingAngle, targetCoords]);

  function getPosition(
    options?: PositionOptions
  ): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    );
  }

  const handlePermissions = useCallback(async () => {
    await requestAccessAsync();
    const position = await getPosition();
    setAcquiredPermissions(true);
  }, [requestAccessAsync]);

  useEffect(() => {
    if (!acquiredPermissions) {
      handlePermissions();
    }
  }, [acquiredPermissions, handlePermissions]);

  return (
    <>
      {currentCoords && targetCoords && (
        <FadeDiv>
          <Distance
            currentCoords={currentCoords}
            targetCoords={targetCoords}
            setChallengeSuccess={setChallengeSuccess}
          // setGoToNext={setGoToNext}
          />
          {orientation && (
            <Compass
              bearingAngle={bearingAngle}
              currentCoords={currentCoords}
              targetCoords={targetCoords}
              orientation={orientation}
            />
          )}
        </FadeDiv>
      )}
    </>
  );
};

export default NavigationModule;
