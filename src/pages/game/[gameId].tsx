import React, {
  type FC,
  type ReactElement,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import axios from "axios";
import { useRouter } from "next/router";
import LocationModule from "../../Components/LocationModule";
import NarrativeModule from "../../Components/NarrativeModule";
import QuestionModule from "../../Components/QuestionModule";
import EndModule from "../../Components/EndModule";
import NavigationModule from "../../Components/NavigationModule";
import HowToPlayPopup from "../../Components/HowToPlayPopup";

export type GameModule = {
  _id: string;
  typeOfModule: string;
  title: string;
  description: string;
  question: string;
  answer: string;
  image: string;
  locationCoordinates: Array<number> | null;
};

const GameId: FC = (): ReactElement => {
  const [challengeSuccess, setChallengeSuccess] = useState<boolean>(false);
  const [, setTypeOfModule] = useState<string | null>("");
  const [gameObject, setGameObject] = useState<GameModule | null>(null);
  const router = useRouter();
  const currentIndex = useRef(0);
  const [devicePermission, setDevicePermission] = useState<boolean>(false);

  const getGameObject = useCallback(
    async () => {
      await axios
        .get(
          `https://tokyo-noire-server-development.herokuapp.com/game/${router.query.gameId}/?index=${currentIndex.current}`
        )
        .then((response) => setGameObject(response.data));
    },
    [router, currentIndex]
  );

  useEffect(() => {
    if (gameObject === null) {
      getGameObject();
    }
  }, [gameObject, getGameObject]);

  useEffect(() => {
    if (challengeSuccess === true) {
      currentIndex.current++;
      getGameObject();
      gameObject!.locationCoordinates = null;
      setChallengeSuccess(false);
    }
  }, [gameObject, getGameObject, challengeSuccess]);

  useEffect(() => {
    if (gameObject !== null) {
      setTypeOfModule(gameObject.typeOfModule);
    }
  }, [gameObject]);

  const setCurrentComponent = (typeOfModule: string | undefined) => {
    switch (typeOfModule) {
      case "location":
        return (
          <>
            <LocationModule
              gameObject={gameObject!}
            />
            {devicePermission
              ? <NavigationModule
                locationCoordinates={
                  gameObject?.locationCoordinates !== null ? gameObject!.locationCoordinates : [0, 0]
                }
                setChallengeSuccess={setChallengeSuccess}
              />
              : <></>
            }
          </>
        );

      case "narrative":
        return (
          <NarrativeModule
            gameObject={gameObject!}
            setChallengeSuccess={setChallengeSuccess}
          />
        );

      case "question":
        return (
          <QuestionModule
            gameObject={gameObject!}
            setChallengeSuccess={setChallengeSuccess}
          />
        );


      case "end":
        return (
          <EndModule
            gameObject={gameObject!}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <HowToPlayPopup
        setDevicePermission={setDevicePermission}
      />
      {gameObject !== null ? setCurrentComponent(gameObject.typeOfModule) : <></>}
    </>
  );
};

export default GameId;
