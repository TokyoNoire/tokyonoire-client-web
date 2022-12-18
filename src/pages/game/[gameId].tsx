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
import LocationModule from "../../Components/GameModules/LocationModule";
import NarrativeModule from "../../Components/GameModules/NarrativeModule";
import QuestionModule from "../../Components/GameModules/QuestionModule";
import EndModule from "../../Components/GameModules/EndModule";
import NavigationModule from "../../Components/GameModules/NavigationModule";
import HowToPlayPopup from "../../Components/GameModules/HowToPlayPopup";
import { type GameModule } from "../../types/global";

const GameId: FC = (): ReactElement => {
  const challengeSuccess = useRef<boolean>(false);
  // const [challengeSuccess, setChallengeSuccess] = useState<boolean>(false);
  const [goToNext, setGoToNext] = useState<boolean>(false);
  const [TypeOfModule, setTypeOfModule] = useState<string | null>("");
  const [gameObject, setGameObject] = useState<GameModule | null | undefined>(
    null
  );
  const router = useRouter();
  const currentIndex = useRef(0);
  const [devicePermission, setDevicePermission] = useState<boolean>(false);

  const getGameObject = useCallback(async () => {
    await axios
      .get(
        `https://tokyo-noire-server-development.herokuapp.com/game/${router.query.gameId}/?index=${currentIndex.current}`
      )
      .then((response) => setGameObject(response.data));
  }, [router, currentIndex]);

  useEffect(() => {
    if (gameObject === null) {
      getGameObject();
    }
  }, [gameObject, getGameObject]);

  useEffect(() => {
    console.log(gameObject)
    console.log(challengeSuccess)
    if (challengeSuccess.current === true && goToNext === true) {
      currentIndex.current++;
      setGameObject(null)
      getGameObject();
      // gameObject!.locationCoordinates = null;
      challengeSuccess.current = false;
      setGoToNext(false)
    }
  }, [goToNext]);

  useEffect(() => {
    if (gameObject !== null) {
      setTypeOfModule(gameObject!.typeOfModule);
    }
  }, [gameObject]);

  const setCurrentComponent = (typeOfModule: string | undefined) => {
    switch (typeOfModule) {
      case "location":
        return (
          <>
            <LocationModule gameObject={gameObject!} />
            {devicePermission ? (
              <NavigationModule
                locationCoordinates={
                  gameObject?.locationCoordinates
                    ? gameObject!.locationCoordinates
                    : [0, 0]
                }
                challengeSuccess={challengeSuccess}
                setGoToNext={setGoToNext}
              />
            ) : (
              <></>
            )}
          </>
        );

      case "narrative":
        return (
          <NarrativeModule
            gameObject={gameObject!}
            challengeSuccess={challengeSuccess}
          />
        );

      case "question":
        return (
          <QuestionModule
            gameObject={gameObject!}
            challengeSuccess={challengeSuccess}
          />
        );

      case "end":
        return <EndModule gameObject={gameObject!} />;

      default:
        return null;
    }
  };

  return (
    <>
      <HowToPlayPopup setDevicePermission={setDevicePermission} />
      <div className="w-screen h-28"></div>
      {gameObject !== null ? (
        setCurrentComponent(gameObject!.typeOfModule)
      ) : (
        <></>
      )}
    </>
  );
};

export default GameId;
