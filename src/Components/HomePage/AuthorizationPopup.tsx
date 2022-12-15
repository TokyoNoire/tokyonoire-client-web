import React, { type ReactElement, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const AuthorizationPopup = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flexCenterDiv">
      <Dialog open={open} onClose={handleClose}>
        <h1 className="self-center p-5 text-3xl text-center uppercase font-heading">
          A Request For Location
        </h1>
        <DialogContent>
          <p className="text-left font-body1">
            To fully enjoy this application, we request the following
            permissions: your location and your gyroscope in your web browser.
            <br />
            <br />
            This application will use the access to your current geolocation and
            your gyroscope to guide you to the different game locations. We do
            not store any of your device data nor share your data to anyone
            else.
            <br />
            <br />
            By enabling your location services, you will be able to access our
            application and start your mystery.
          </p>
        </DialogContent>
        {/* <DialogActions className="flexCenterDiv">
                    <button
                        onClick={() => {
                            handleClose();
                        }}
                        id="themeButton"
                        className="self-center my-5"
                        type="button"
                    >
                        I understand
                    </button>
                </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default AuthorizationPopup;
