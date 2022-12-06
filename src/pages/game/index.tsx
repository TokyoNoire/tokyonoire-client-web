import React, { type FC, type ReactElement, useState, useEffect } from "react";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
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
const testObject = {
  _id: "21312",
  title: "hellohello",
  typeOfModule: "location",
  description:
    "Akika Mori is the hidden daughter of the late Taikichiro Mori, who was once the richest person on earth. She was being surveilled at all time, her family wanting her to stay hidden from the public and to not be associated with her family. Her dream was to become an actress, despite knowing that her family would never allow it. The worried Mori family requested your services to find their daughter.",
  question: "when do you sing?",
  answer: "everyday",
  image:
    "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  locationCoordinates: [1, 2],
};
const Game: FC = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(true);
  const [challengeSuccess, setChallengeSuccess] = useState<boolean>(false);
  const [typeOfModule, setTypeOfModule] = useState<string | null>("");
  const [currentIndex, setCurrentIndex] = useState<object | null>({});
  const [gameObject, setGameObject] = useState<GameModule>(testObject);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setGameObject(testObject);
    setTypeOfModule(gameObject.typeOfModule);
  }, []);

  const setCurrentComponent = () => {
    switch (typeOfModule) {
      case "location":
        return <LocationModule gameObject={gameObject} />;

      case "narrativePicture":
        return <NarrativePictureModule gameObject={gameObject} />;

      case "narrativeText":
        return <NarrativePictureModule gameObject={gameObject} />;

      case "textQuestion":
        return <TextQuestionModule gameObject={gameObject} />;

      case "photoQuestion":
        return <PhotoQuestionModule gameObject={gameObject} />;

      case "narrative":
        return <NarrativeTextModule gameObject={gameObject} />;

      case "end":
        return <EndModule gameObject={gameObject} />;

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

      {setCurrentComponent()}
      <UseDeviceOrientation />
    </div>
  );
};

export default Game;
