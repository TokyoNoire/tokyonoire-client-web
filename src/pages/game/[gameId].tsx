import React, {
  type FC,
  type ReactElement,
  useState,
  useEffect,
  useRef,
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
  const [typeOfModule, setTypeOfModule] = useState<string | null>("");
  const [gameObject, setGameObject] = useState<GameModule | null>(null);
  const router = useRouter();
  const currentIndex = useRef(0);
  const sentRequest = useRef<boolean>(false);
  const [devicePermission, setDevicePermission] = useState<boolean>(false);


  useEffect(() => {
    if (gameObject === null) {
      getGameObject();
    }
  }, []);

  useEffect(() => {
    if (challengeSuccess === true 
      // && !sentRequest.current
      ) {
      currentIndex.current++;
      getGameObject();
      // sentRequest.current = true;
      gameObject!.locationCoordinates = null;
            setChallengeSuccess(false);

    }
  }, [challengeSuccess]);

  useEffect(() => {
    if (gameObject !== null) {
      setTypeOfModule(gameObject.typeOfModule);
    }
  }, [gameObject]);

  const getGameObject = async () => {
    await axios
      .get(
        `https://tokyo-noire-server-development.herokuapp.com/game/${router.query.gameId}/?index=${currentIndex.current}`
      )
      .then((response) => setGameObject(response.data));
  };

  const setCurrentComponent = (typeOfModule: string | undefined) => {
    switch (typeOfModule) {
      case "location":
        return (
          <>
            <LocationModule
              gameObject={gameObject!}
              setChallengeSuccess={setChallengeSuccess}
              />
            {devicePermission
              ? <NavigationModule 
              locationCoordinates={gameObject?.locationCoordinates !== null ? gameObject!.locationCoordinates : [0,0]}
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
