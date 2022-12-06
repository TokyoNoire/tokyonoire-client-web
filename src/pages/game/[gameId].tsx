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
  const challengeSuccess = useRef<boolean>(false);
  const [typeOfModule, setTypeOfModule] = useState<string | null>("");
  const [gameObject, setGameObject] = useState<GameModule | null>(null);
  const router = useRouter();
  const currentIndex = useRef(0);
  const sentRequest = useRef<boolean>(false);
  const [devicePermission, setDevicePermission] = useState<boolean>(false);

  const [dummyState, setDummyState] = useState<boolean>(true);


  useEffect(() => {
    if (gameObject === null) {
      getGameObject();
    }
  }, []);

  console.log(challengeSuccess.current)
  
  useEffect(() => {
    if (challengeSuccess.current === true) {

      console.log("yes")
      currentIndex.current++;
      getGameObject();
      setDummyState(true)
      // challengeSuccess.current = false;
    }
  }, [challengeSuccess.current]);

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
              />
            {devicePermission
              ? <NavigationModule 
              locationCoordinates={gameObject!.locationCoordinates}
              challengeSuccess={challengeSuccess.current}
              />
              : <></>
            }
          </>
        );

      case "narrativePicture":
        return (
          <NarrativePictureModule
            gameObject={gameObject!}
          />
        );

      case "narrativeText":
        return (
          <NarrativeTextModule
            gameObject={gameObject!}
          />
        );

      case "question":
        return (
          <TextQuestionModule
            gameObject={gameObject!}
            challengeSuccess={challengeSuccess.current}
          />
        );

      case "photoQuestion":
        return (
          <PhotoQuestionModule
            gameObject={gameObject!}
            challengeSuccess={challengeSuccess.current}
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
