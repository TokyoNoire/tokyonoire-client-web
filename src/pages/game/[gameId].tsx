import React, {
  type FC,
  type ReactElement,
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext
} from "react";
import AppContext from "../../AppContext";
import axios from "axios";
import { useRouter } from "next/router";
import LocationModule from "../../Components/GameModules/LocationModule";
import NarrativeModule from "../../Components/GameModules/NarrativeModule";
import QuestionModule from "../../Components/GameModules/QuestionModule";
import EndModule from "../../Components/GameModules/EndModule";
import NavigationModule from "../../Components/GameModules/NavigationModule";
import HowToPlayPopup from "../../Components/GameModules/HowToPlayPopup";
import { type GameModule } from "../../types/global";
import App from "next/app";

const GameId: FC = (): ReactElement => {
  const value = useContext(AppContext);
  const {sessionTable, setSessionTable, sessionGameIndex, userId,} = value
  const [challengeSuccess, setChallengeSuccess] = useState<boolean>(false);
  // const [goToNext, setGoToNext] = useState<boolean>(false);
  const [TypeOfModule, setTypeOfModule] = useState<string | null>("");
  const [gameObject, setGameObject] = useState<GameModule | null | undefined>(
    null
  );
  const router = useRouter();
  const currentIndex = useRef(0);
  const [devicePermission, setDevicePermission] = useState<boolean>(false);

  const incrementSessionIndex = async () => {
    await axios.patch(`http://localhost:2000/updateSession/${sessionTable.gameId}/${userId}`, {
     gameModulesIndex: sessionGameIndex.current 
    })
  }

  const getGameObject = useCallback(async () => {
    setGameObject(null)
    await axios
      .get(
        `https://tokyo-noire-server-development.herokuapp.com/game/${router.query.gameId}/?index=${sessionGameIndex.current}`
      )
      .then((response) => setGameObject(response.data));
  }, [router, currentIndex]);

  useEffect(() => {
    if (gameObject === null) {
      getGameObject();
    }
  }, [gameObject, getGameObject]);

  useEffect(() => {
    if (challengeSuccess === true) {
      currentIndex.current++;
      sessionGameIndex.current++;
      getGameObject();
      incrementSessionIndex();
      // gameObject!.locationCoordinates = null;
      setChallengeSuccess(false);
      // setGoToNext(false)
    }
  }, [challengeSuccess]);

  useEffect(() => {
    if (gameObject !== null) {
      setTypeOfModule(gameObject!.typeOfModule);
    }
  }, [gameObject]);

  const setCurrentComponent = (typeOfModule: string | undefined) => {
    switch (typeOfModule) {
      case "start":
        return (
          <NarrativeModule
            gameObject={gameObject!}
            setChallengeSuccess={setChallengeSuccess}
          />
        );

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
                setChallengeSuccess={setChallengeSuccess}
              // setGoToNext={setGoToNext}
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
