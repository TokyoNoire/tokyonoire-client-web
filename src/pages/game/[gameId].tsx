import React, {
  type FC,
  type ReactElement,
  useState,
  useEffect,
  useRef,
} from "react";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useRouter } from "next/router";
import LocationModule from "../../Components/LocationModule";
import NarrativePictureModule from "../../Components/NarrativePictureModule";
import TextQuestionModule from "../../Components/TextQuestionModule";
import PhotoQuestionModule from "../../Components/PhotoQuestionModule";
import EndModule from "../../Components/EndModule";
import NarrativeTextModule from "../../Components/NarrativeTextModule";
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
  locationCoordinates: Array<number>;
};

const GameId: FC = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(true);
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
    if (challengeSuccess && sentRequest.current) {
      setChallengeSuccess(false);
      sentRequest.current = false; 
    }
  }, [challengeSuccess])

  useEffect(() => {
    if (challengeSuccess === true && !sentRequest.current) {
      currentIndex.current++;
      getGameObject();
      sentRequest.current = true;
    }
  }, [challengeSuccess]);

  useEffect(() => {
    if (gameObject !== null) {
      setTypeOfModule(gameObject.typeOfModule);
    }
  }, [gameObject]);
  const handleClose = () => {
    setOpen(false);
  };
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
              locationCoordinates={gameObject!.locationCoordinates}
              setChallengeSuccess={setChallengeSuccess}
              />
              : <></>
            }
          </>
        );

      case "narrativePicture":
        return (
          <NarrativePictureModule
            gameObject={gameObject!}
            setChallengeSuccess={setChallengeSuccess}
          />
        );

      case "narrativeText":
        return (
          <NarrativePictureModule
            gameObject={gameObject!}
            setChallengeSuccess={setChallengeSuccess}
          />
        );

      case "question":
        return (
          <TextQuestionModule
            gameObject={gameObject!}
            setChallengeSuccess={setChallengeSuccess}
          />
        );

      case "photoQuestion":
        return (
          <PhotoQuestionModule
            gameObject={gameObject!}
            setChallengeSuccess={setChallengeSuccess}
          />
        );

      case "narrative":
        return (
          <NarrativeTextModule
            gameObject={gameObject!}
            setChallengeSuccess={setChallengeSuccess}
          />
        );

      case "end":
        return (
          <EndModule
            gameObject={gameObject!}
            setChallengeSuccess={setChallengeSuccess}
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
