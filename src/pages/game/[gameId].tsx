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
import HowToPlayPopup from "../../Components/GameModules/HowToPlayPopup";
import { type GameModule } from "../../types/global";

const GameId: FC = (): ReactElement => {
  // const challengeSuccess = useRef<boolean>(false);
  const [challengeSuccess, setChallengeSuccess] = useState<boolean>(false);
  // const [goToNext, setGoToNext] = useState<boolean>(false);
  const [TypeOfModule, setTypeOfModule] = useState<string | null>("");
  const [gameObject, setGameObject] = useState<GameModule | null | undefined>(
    null
  );
  const router = useRouter();
  const currentIndex = useRef(0);
  const [devicePermission, setDevicePermission] = useState<boolean>(false);

  console.log(gameObject)

  const getGameObject = useCallback(async () => {
    setGameObject(null)
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
    if (challengeSuccess === true) {
      currentIndex.current++;
      getGameObject();
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
