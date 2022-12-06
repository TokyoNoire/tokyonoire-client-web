import React, { type FC, type ReactElement, useState, useEffect } from "react";
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
import UseDeviceOrientation from "../../Components/Gyroscope";

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
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [gameObject, setGameObject] = useState<GameModule | null>(null);
  const router = useRouter();

  console.log(router.query.gameId);

  useEffect(() => {
    if (gameObject === null) {
      getGameObject();
    }
  }, []);

  useEffect(() => {
    if (challengeSuccess === true) {
      setCurrentIndex(currentIndex + 1);
      getGameObject();
      setChallengeSuccess(false);
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
    console.log("😩", currentIndex);
    await axios
      .get(
        `https://tokyo-noire-server-development.herokuapp.com/game/${router.query.gameId}/?index=${currentIndex}`
      )
      .then((response) => setGameObject(response.data));
  };

  const setCurrentComponent = (typeOfModule: string | undefined) => {
    switch (typeOfModule) {
      case "location":
        return (
          <LocationModule
            gameObject={gameObject!}
            setChallengeSuccess={setChallengeSuccess}
          />
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
    <div>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            <h1 className="self-center p-5 text-3xl text-center uppercase font-heading">
              How to Play
            </h1>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p className="text-left font-body1">
                This is a welcome message for you the kind player.
                <br />
                <br />
                Here we will need to think of our instructions. It needs to in
                simple words explain the &quot;go somewhere, resolve a
                challenge&quot; principle we are going with.
                <br />
                <br />
                Also explain that some interactions will require user to grant
                authorisation for geolocation, webcam and/or gyrometer.
              </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button
              onClick={handleClose}
              id="themeButton"
              className="my-5 font-body2"
              type="button"
            >
              I understand
            </button>
          </DialogActions>
        </Dialog>
      </div>

      {setCurrentComponent(gameObject?.typeOfModule)}
      <UseDeviceOrientation />
    </div>
  );
};

export default GameId;
