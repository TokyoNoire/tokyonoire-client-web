import React, {type FC, type ReactElement, useState} from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import LocationModule from "../../Components/LocationModule";

const Game: FC = (): ReactElement => {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
            <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            <h1 className="self-center p-5 text-2xl text-center uppercase font-heading">Instructions</h1>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p className="text-center font-body1"> hello test hello</p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <button onClick={handleClose} id="themeButton" className="my-5 font-body2" type="button">
        start
      </button>
          </DialogActions>
        </Dialog>
      </div>
      <LocationModule/>
    </div>
  );
};

export default Game;
