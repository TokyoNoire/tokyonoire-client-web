import React, { type FC, type ReactElement, useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import LocationModule from "../../Components/LocationModule";
import NarrativePictureModule from "../../Components/NarrativePictureModule";
import StartModule from "../../Components/StartModule";
import TextQuestionModule from "../../Components/TextQuestionModule";
import PhotoQuestionModule from "../../Components/PhotoQuestionModule";
import EndModule from "../../Components/EndModule";
import NarrativeTextModule from "../../Components/NarrativeTextModule";
import Gyroscope from "../../Components/Gyroscope";

const Game: FC = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(true);
  const [challengeSuccess, setChallengeSuccess] = useState<boolean>(false);
  const [typeOfModule, setTypeOfModule] = useState<string | null>("");

  interface gameModules {
    typeOfModule: string;
    description: string;
    question: string;
    answer: string;
    pictureId: string;
    locationCoordinates: Array<number>;
  }

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    return setTypeOfModule("narrativePicture");
  }, []);

  const setCurrentComponent = () => {
    switch (typeOfModule) {
      case "start":
        return <StartModule />;

      case "location":
        return <LocationModule />;

      case "narrativePicture":
        return <NarrativePictureModule />;

      case "textQuestion":
        return <TextQuestionModule />;

      case "photoQuestion":
        return <PhotoQuestionModule />;

      case "narrative":
        return <NarrativeTextModule />;

      case "end":
        return <EndModule />;

      default:
        return null;
    }
  };

  return (
    <div>
      <LocationModule/>
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
    </div>
  );
};

export default Game;
