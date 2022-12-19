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
import HowToPlayPopup from "../../Components/GameModules/HowToPlayPopup";
import { type GameModule } from "../../types/global";
import HintPopper from "../../Components/GameModules/Helpers/HintPopper";
import App from "next/app";


const GameId: FC = (): ReactElement => {
  const value = useContext(AppContext);
  const { sessionTable, setSessionTable, sessionGameIndex, userId, } = value
  const [challengeSuccess, setChallengeSuccess] = useState<boolean>(false);
  const [TypeOfModule, setTypeOfModule] = useState<string | null>("");
  const [gameObject, setGameObject] = useState<GameModule | null | undefined>(
    null
  );
  const router = useRouter();
  const currentIndex = useRef(0);
  const [devicePermission, setDevicePermission] = useState<boolean>(false);

  const incrementSessionIndex = async () => {
    await axios.patch(`https://tokyo-noire-server-development.herokuapp.com/updateSession/${sessionTable.gameId}/${userId}`, {
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
            <LocationModule
              gameObject={gameObject!}
              devicePermission={devicePermission}
              setChallengeSuccess={setChallengeSuccess}
            />
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
    <main>
      <HowToPlayPopup setDevicePermission={setDevicePermission} />
      <section className="w-screen h-28"></section>
      {gameObject !== null && (
        setCurrentComponent(gameObject!.typeOfModule)
      )}
    </main>
  );
};

export default GameId;
