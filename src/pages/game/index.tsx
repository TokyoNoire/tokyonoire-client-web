import React, { type FC, type ReactElement, useState } from "react";
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
import PhotoQuestionModule from "../../Components/PhotoQuestionModule"
import EndModule from "../../Components/EndModule";
import NarrativeTextModule from "../../Components/NarrativeTextModule";
import UseDeviceOrientation from "../../Components/Gyroscope";

const Game: FC = (): ReactElement => {
  const [open, setOpen] = useState(true);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
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
                <br/>
                <br/>
                Here we will
                need to think of our instructions. It needs to in simple words
                explain the &quot;go somewhere, resolve a challenge&quot; principle we are
                going with. 
                <br/>
                <br/>
                Also explain that some interactions will require
                user to grant authorisation for geolocation, webcam and/or
                gyrometer.
            
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
      <LocationModule />

      <StartModule/>
      <NarrativePictureModule/>
      <TextQuestionModule/>
      <PhotoQuestionModule/>
      <NarrativeTextModule/>
      <EndModule/>
      <UseDeviceOrientation/>
    </div>
  );
};

export default Game;
